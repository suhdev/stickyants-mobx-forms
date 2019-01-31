"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const React = require("react");
const FieldType_1 = require("../FieldType");
const TextField_1 = require("./TextField");
let FormFieldLabel = class FormFieldLabel extends React.Component {
    render() {
        const { model } = this.props;
        return (React.createElement("div", { className: "sa-formfield__label" }, model.label));
    }
};
FormFieldLabel = __decorate([
    mobx_react_1.observer
], FormFieldLabel);
exports.FormFieldLabel = FormFieldLabel;
let FormFieldControl = class FormFieldControl extends React.Component {
    renderField(model) {
        switch (model.type) {
            case FieldType_1.FieldType.Text:
                return React.createElement(TextField_1.TextField, { model: model });
        }
    }
    render() {
        const { model } = this.props;
        return (React.createElement("div", { className: "sa-formfield__label" }, model.label));
    }
};
FormFieldControl = __decorate([
    mobx_react_1.observer
], FormFieldControl);
exports.FormFieldControl = FormFieldControl;
let FormField = class FormField extends React.Component {
    render() {
        const { model } = this.props;
        return (React.createElement("div", { className: "sa-formfield", "data-type": FieldType_1.FieldType[model.type], "data-disabled": !model.isEnabled, "data-longtext": model.isLongText },
            model.labelRenderer ? model.labelRenderer() : React.createElement(FormFieldLabel, { model: model }),
            React.createElement(FormFieldControl, { model: model })));
    }
};
FormField = __decorate([
    mobx_react_1.observer
], FormField);
exports.FormField = FormField;
