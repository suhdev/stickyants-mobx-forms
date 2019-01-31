"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const FieldModel_1 = require("./FieldModel");
const mobx_1 = require("mobx");
class DropdownModel extends FieldModel_1.FieldModel {
    constructor() {
        super(...arguments);
        this.value = null;
        this.highlightedValue = null;
        this.options = [];
        this.showMenu = false;
        this.defaultLabel = null;
    }
    toggle() {
        this.showMenu = !this.showMenu;
    }
    hide() {
        this.showMenu = false;
    }
    show() {
        this.showMenu = true;
        this.highlightedValue = this.value;
    }
    selectPrevious() {
        let idx = 0;
        if (this.value !== null) {
            idx = this.options.indexOf(this.highlightedValue);
        }
        if (idx !== -1) {
            this.highlightedValue = idx > 0 ?
                this.options[--idx] :
                this.options[this.options.length - 1];
        }
    }
    selectNext() {
        let idx = 0;
        if (this.highlightedValue !== null) {
            idx = this.options.indexOf(this.highlightedValue);
        }
        if (idx !== -1) {
            this.highlightedValue = idx < this.options.length ?
                this.options[++idx] :
                this.options[0];
        }
    }
}
__decorate([
    mobx_1.observable.ref
], DropdownModel.prototype, "value", void 0);
__decorate([
    mobx_1.observable.ref
], DropdownModel.prototype, "highlightedValue", void 0);
__decorate([
    mobx_1.observable.ref
], DropdownModel.prototype, "options", void 0);
__decorate([
    mobx_1.observable
], DropdownModel.prototype, "showMenu", void 0);
__decorate([
    mobx_1.action.bound
], DropdownModel.prototype, "toggle", null);
__decorate([
    mobx_1.action.bound
], DropdownModel.prototype, "hide", null);
__decorate([
    mobx_1.action.bound
], DropdownModel.prototype, "show", null);
__decorate([
    mobx_1.action.bound
], DropdownModel.prototype, "selectPrevious", null);
__decorate([
    mobx_1.action.bound
], DropdownModel.prototype, "selectNext", null);
exports.DropdownModel = DropdownModel;
