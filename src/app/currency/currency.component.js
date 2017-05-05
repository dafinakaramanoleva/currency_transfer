"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CurrencyComponent = (function () {
    function CurrencyComponent() {
        var _this = this;
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
        this.notify = new core_1.EventEmitter();
        this.currencies = [
            'GBP',
            'EUR',
            'BGN',
            'USD'
        ];
        this.currencyDependencies = [
            { 'GBP': ['EUR', 'BGN', 'USD'] },
            { 'EUR': ['GBP', 'BGN', 'USD'] },
            { 'BGN': 'GBP' },
            { 'USD': 'GBP' }
        ];
        this.stateCtrl = new forms_1.FormControl();
        this.filteredCurrencies = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterCurrencies(name); })
            .do(function (changes) { return changes.length === 1 ? _this.notify.emit(changes[0]) : false; });
    }
    CurrencyComponent.prototype.filterCurrencies = function (val) {
        return val ? this.currencies.filter(function (s) { return new RegExp("^" + val, 'gi').test(s); })
            : this.currencies;
    };
    CurrencyComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this.data = obj;
            this.currency =
                JSON.stringify(this.data, undefined, 4);
        }
    };
    CurrencyComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CurrencyComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CurrencyComponent.prototype.select = function (event) {
        this.notify.emit(event.target.value);
    };
    return CurrencyComponent;
}());
__decorate([
    core_1.Output('onCurrencyChange')
], CurrencyComponent.prototype, "notify", void 0);
CurrencyComponent = __decorate([
    core_1.Component({
        selector: 'app-currency',
        templateUrl: './currency.component.html',
        styleUrls: ['./currency.component.scss']
    })
], CurrencyComponent);
exports.CurrencyComponent = CurrencyComponent;
