"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class NumberField extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (e) => {
            const val = e.currentTarget.value;
            this.props.model.onChange(+val);
        };
    }
    render() {
        const { model } = this.props;
        const control = React.createElement("input", { type: "number", onChange: this.onChange, disabled: !model.isEnabled, className: "sa-formfield__control" });
        return (React.createElement("div", { className: "sa-formfield__control-wrapper sa-formfield__control-wrapper--number" }, model.controlRenderer ? model.controlRenderer() : control));
    }
}
exports.NumberField = NumberField;
