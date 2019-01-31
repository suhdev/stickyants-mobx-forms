"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const windowContext = React.createContext({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
});
class WindowDimensions extends React.Component {
    constructor(props) {
        super(props);
        this.updateInProgress = false;
        this.updateWindowSize = () => {
            if (this.updateInProgress) {
                return;
            }
            this.updateInProgress = true;
            requestAnimationFrame(() => {
                this.updateInProgress = false;
                this.setState(() => {
                    return {
                        innerWidth: window.innerWidth,
                        innerHeight: window.innerHeight,
                        outerWidth: window.outerWidth,
                        outerHeight: window.outerHeight,
                    };
                });
            });
        };
        this.state = {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            outerWidth: window.outerWidth,
            outerHeight: window.outerHeight,
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowSize);
    }
    componentWillUnmount() {
        window.removeEventListener('r;eize', this.updateWindowSize);
    }
    render() {
        return (React.createElement(windowContext.Provider, { value: this.state }, this.props.children));
    }
}
exports.WindowDimensions = WindowDimensions;
exports.windowDimensionReceiver = windowContext.Consumer;
