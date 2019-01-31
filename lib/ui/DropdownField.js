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
let DropdownFieldOption = class DropdownFieldOption extends React.Component {
    constructor() {
        super(...arguments);
        this.onClick = () => {
            this.props.model.onChange(this.props.option);
        };
    }
    render() {
        const { model, option } = this.props;
        return (model.optionRenderer ? model.optionRenderer(option, model.value) :
            React.createElement("div", { "data-id": option.id, onClick: this.onClick, className: "sa-formfield-dropdown__option" },
                " ",
                option.label,
                " "));
    }
};
DropdownFieldOption = __decorate([
    mobx_react_1.observer
], DropdownFieldOption);
exports.DropdownFieldOption = DropdownFieldOption;
let DropdownFieldMenu = class DropdownFieldMenu extends React.Component {
    render() {
        const { model } = this.props;
        return (model.options.map(e => React.createElement(DropdownFieldOption, { model: model, option: e, key: e.id })));
    }
};
DropdownFieldMenu = __decorate([
    mobx_react_1.observer
], DropdownFieldMenu);
exports.DropdownFieldMenu = DropdownFieldMenu;
let DropdownFieldLabel = class DropdownFieldLabel extends React.Component {
    render() {
        const { model } = this.props;
        return (React.createElement("div", { className: "sa-formfield-dropdown__label" }, (model.value && model.value.label) || model.defaultLabel));
    }
};
DropdownFieldLabel = __decorate([
    mobx_react_1.observer
], DropdownFieldLabel);
exports.DropdownFieldLabel = DropdownFieldLabel;
let DropdownField = class DropdownField extends React.Component {
    constructor() {
        super(...arguments);
        this.onFocus = () => {
            this.props.model.show();
        };
        this.onBlur = () => {
            setTimeout(() => {
                this.props.model.hide();
            }, 250);
        };
        this.onKeyUp = (e) => {
            if (e.which === 38) {
                this.props.model.selectPrevious();
            }
            else if (e.which === 40) {
                this.props.model.selectNext();
            }
            else if (e.which === 13 || e.which === 32) {
                this.props.model.toggle();
            }
            else if (e.which === 27) {
                this.props.model.revert();
            }
        };
    }
    render() {
        const { model } = this.props;
        return (React.createElement("div", { className: "sa-formfield-control sa-formfield-control--dropdown", tabIndex: 0, onFocus: this.onFocus, onKeyUp: this.onKeyUp, onBlur: this.onBlur },
            React.createElement(DropdownFieldLabel, { model: model }),
            React.createElement("div", { className: "sa-formfield-dropdown__menu" },
                React.createElement(DropdownFieldMenu, { model: model }))));
    }
};
DropdownField = __decorate([
    mobx_react_1.observer
], DropdownField);
exports.DropdownField = DropdownField;
