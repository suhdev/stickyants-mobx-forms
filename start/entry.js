const { FuseBox, WebIndexPlugin } = require("fuse-box");
const path = require('path'); 
const yargs = require('yargs').argv; 
const fuse = FuseBox.init({
  homeDir: path.resolve(__dirname,"../src"),
  target: "browser@es6",
  output: "../dist/$name.js",
  plugins: [WebIndexPlugin({
    css:'dist/main.css'
  })],
});


module.exports = function(file){
  fuse.dev(); // launch http server
  fuse
    .bundle("TextField")
    .instructions(`> stories/${file}.tsx`)
    .hmr()
    .watch();
  fuse.run();
}