"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const FieldType_1 = require("./FieldType");
const FieldFlags_1 = require("./FieldFlags");
class FieldModel {
    constructor() {
        this.hasChanges = false;
        this.label = null;
        this.type = FieldType_1.FieldType.Text;
        this.flags = 0;
    }
    get isEnabled() {
        return this.is(FieldFlags_1.FieldFlags.Disabled);
    }
    get isLongText() {
        return this.is(FieldFlags_1.FieldFlags.LongText);
    }
    onChange(value) {
        this.value = value;
        this.hasChanges = true;
    }
    is(flag) {
        return (this.flags & flag) === 0;
    }
    clearChanges() {
        this.hasChanges = false;
    }
}
__decorate([
    mobx_1.observable
], FieldModel.prototype, "hasChanges", void 0);
__decorate([
    mobx_1.observable.ref
], FieldModel.prototype, "label", void 0);
__decorate([
    mobx_1.observable
], FieldModel.prototype, "type", void 0);
__decorate([
    mobx_1.observable
], FieldModel.prototype, "flags", void 0);
__decorate([
    mobx_1.computed
], FieldModel.prototype, "isEnabled", null);
__decorate([
    mobx_1.computed
], FieldModel.prototype, "isLongText", null);
__decorate([
    mobx_1.action.bound
], FieldModel.prototype, "onChange", null);
__decorate([
    mobx_1.action.bound
], FieldModel.prototype, "clearChanges", null);
exports.FieldModel = FieldModel;
