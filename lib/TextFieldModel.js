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
class TextFieldModel extends FieldModel_1.FieldModel {
    constructor() {
        super(...arguments);
        this.value = '';
    }
}
__decorate([
    mobx_1.observable
], TextFieldModel.prototype, "value", void 0);
exports.TextFieldModel = TextFieldModel;
