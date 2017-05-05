"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InputComponent = (function () {
    function InputComponent() {
        this.propagateChange = function (_) { };
    }
    InputComponent.prototype.onNotify = function (message) {
        console.log('here');
        alert(message);
    };
    InputComponent.prototype.onChange = function (event) {
        var newValue = event.target.value;
        try {
            this.data = JSON.parse(newValue);
            this.parseError = false;
            this.propagateChange(this.data);
        }
        catch (ex) {
            this.parseError = true;
        }
    };
    InputComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this.data = obj;
            this.value =
                JSON.stringify(this.data, undefined, 4);
        }
    };
    InputComponent.prototype.registerOnTouched = function () { };
    InputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    InputComponent.prototype.onlyDecimalNumberKey = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57));
    };
    InputComponent.prototype.clear = function () {
        console.log(this.data);
        this.data = '';
    };
    return InputComponent;
}());
__decorate([
    core_1.Input()
], InputComponent.prototype, "label", void 0);
__decorate([
    core_1.Input()
], InputComponent.prototype, "placeholder", void 0);
InputComponent = __decorate([
    core_1.Component({
        selector: 'app-input',
        templateUrl: './input.component.html',
        styleUrls: ['./input.component.scss']
    })
], InputComponent);
exports.InputComponent = InputComponent;
