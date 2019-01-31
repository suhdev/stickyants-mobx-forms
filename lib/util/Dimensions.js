"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Dimensions extends React.Component {
    constructor(props) {
        super(props);
        this.elRef = React.createRef();
        this.state = {
            boundingBox: null,
        };
    }
    componentDidMount() {
        requestAnimationFrame(() => {
            const boundingBox = this.elRef.current.getBoundingClientRect();
            this.setState(() => {
                return {
                    boundingBox,
                };
            });
        });
    }
    render() {
        return this.props.children(this.elRef, this.state.boundingBox);
    }
}
exports.Dimensions = Dimensions;
