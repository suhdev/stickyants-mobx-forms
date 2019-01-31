const { parallel, src, dest, watch } = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    pump = require('pump'),
    yargs = require('yargs'),
    fs = require('fs'),
    path = require('path'),
    prefixer = require('gulp-autoprefixer');


function compileSass(cb) {
    return pump([
        src('./sass/*.scss'),
        sass({
            outputStyle: 'compressed'
        }),
        prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }),
        dest('./dist')], (err) => {
            if (!err) {
                cb();
                return;
            }
            cb(err);
        });

}

function watchCss(cb) {
    watch('./sass/**/*.scss', compileSass);
}

function watchJs(cb) {
    process.env.PROJECT_ROOT = path.resolve(__dirname, '../')
    if (yargs.argv.entry) {
        require(path.resolve(__dirname, './start/' + yargs.argv.entry));
    }
}

const files = fs.readdirSync(path.resolve(__dirname, './src/stories'));
files.forEach(file => {
    const taskName = path.basename(file,path.extname(file)); 
    exports['build' + taskName] = function () {
        process.env.PROJECT_ROOT = path.resolve(__dirname, '../');
        const { FuseBox, WebIndexPlugin,CSSPlugin,SassPlugin } = require("fuse-box");
        const fuse = FuseBox.init({
            homeDir: path.resolve(__dirname, "./src"),
            target: "browser@es6",
            output: "../dist/$name.js",
            plugins: [WebIndexPlugin(),[SassPlugin(),CSSPlugin()]],
        });


        fuse.dev(); // launch http server
        fuse
            .bundle("TextField")
            .instructions(`> stories/${file}`)
            .hmr()
            .watch();
        fuse.run();
    }

    exports['watch' + taskName] = parallel(exports['build' + taskName],watchCss);
});

exports.buildCss = compileSass;
exports.watch = parallel(watchCss, watchJs); 