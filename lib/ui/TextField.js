"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mobx_react_1 = require("mobx-react");
let TextField = class TextField extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (e) => {
            const val = e.currentTarget.value;
            this.props.model.onChange(val);
        };
    }
    render() {
        const { model } = this.props;
        const control = model.isLongText ?
            React.createElement("textarea", { value: model.value, onChange: this.onChange, disabled: !model.isEnabled, className: "sa-formfield__control" }) :
            React.createElement("input", { type: "text", onChange: this.onChange, disabled: !model.isEnabled, className: "sa-formfield__control" });
        return (React.createElement("div", { className: "sa-formfield__control-wrapper sa-formfield__control-wrapper--text" }, model.controlRenderer ? model.controlRenderer() : control));
    }
};
TextField = __decorate([
    mobx_react_1.observer
], TextField);
exports.TextField = TextField;
