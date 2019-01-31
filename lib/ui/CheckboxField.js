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
const FormField_1 = require("./FormField");
let CheckboxFieldTick = class CheckboxFieldTick extends React.Component {
    render() {
        const { model } = this.props;
        return (React.createElement("div", { className: "sa-formfield__control-tick", "data-isChecked": model.value }));
    }
};
CheckboxFieldTick = __decorate([
    mobx_react_1.observer
], CheckboxFieldTick);
exports.CheckboxFieldTick = CheckboxFieldTick;
let CheckboxField = class CheckboxField extends React.Component {
    render() {
        const { model } = this.props;
        return (React.createElement("div", { className: "sa-formfield__control-wrapper sa-formfield__control-wrapper--checkbox", onClick: model.onToggle },
            React.createElement(CheckboxFieldTick, { model: model }),
            React.createElement(FormField_1.FormFieldLabel, { model: model })));
    }
};
CheckboxField = __decorate([
    mobx_react_1.observer
], CheckboxField);
exports.CheckboxField = CheckboxField;
