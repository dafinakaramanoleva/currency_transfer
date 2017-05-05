"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rate_1 = require("../rate");
var RateFormComponent = (function () {
    function RateFormComponent(fb) {
        this.fb = fb;
        this.next = false;
        this.submitted = false;
        this.firstRowFocused = true;
        this.secondRowFocused = false;
        this.rateAdded = new core_1.EventEmitter();
        this.currentSellCurrency = 'GBP';
        this.currentBuyCurrency = 'GBP';
        this.currentRatePlaceholder = 'e.g. 1.2345';
        this.formErrors = {
            'buy': '',
            'sell': '',
            'currency-buy': '',
            'currency-sell': '',
            'current-rate': ''
        };
        this.validationMessages = {
            'inputError': 'There is a problem setting a rate alert. Please, check your form input.'
        };
        this.buildForm();
    }
    RateFormComponent.prototype.ngOnInit = function () { };
    RateFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.rateCurrencyForm = this.fb.group({
            'buy': '',
            'sell': '',
            'currency_buy': 'GBP',
            'currency_sell': 'GBP',
            'current_rate': ''
        });
        this.rateCurrencyForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    RateFormComponent.prototype.onSubmit = function (event, form) {
        var formValue = form.value;
        var rate = new rate_1.Rate();
        rate.side = formValue.buy === '' ? 'sell' : 'buy';
        rate.amount = formValue[rate.side];
        rate.target_rate = formValue.target_rate;
        rate.sell_currency = formValue.currency_sell;
        rate.buy_currency = formValue.currency_buy;
        console.log('on Submit');
        console.log(rate);
        this.rateAdded.emit(rate);
        this.submitted = true;
    };
    RateFormComponent.prototype.onNext = function () {
        this.next = true;
    };
    RateFormComponent.prototype.onFocus = function (event) {
        if (!event.currentTarget.classList.contains('focus')
            && event.currentTarget.classList.contains('buy-wrapper')) {
            this.secondRowFocused = true;
            this.firstRowFocused = false;
        }
        else if (!event.currentTarget.classList.contains('focus')
            && event.currentTarget.classList.contains('sell-wrapper')) {
            this.secondRowFocused = false;
            this.firstRowFocused = true;
        }
    };
    RateFormComponent.prototype.onInputChnaged = function (event) {
        console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList);
        // event.target.value = '';
    };
    RateFormComponent.prototype.onValueChanged = function (data) {
        if (!this.rateCurrencyForm) {
            return;
        }
        var form = this.rateCurrencyForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    Object.defineProperty(RateFormComponent.prototype, "currencyBuyInputPlaceholder", {
        get: function () {
            return 'e.g. 10,000 ' + this.currentBuyCurrency;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateFormComponent.prototype, "currencySellInputPlaceholder", {
        get: function () {
            return 'e.g. 10,000 ' + this.currentSellCurrency;
        },
        enumerable: true,
        configurable: true
    });
    RateFormComponent.prototype.onCurrencyBuyChanged = function (currency) {
        this.currentBuyCurrency = currency;
    };
    RateFormComponent.prototype.onCurrencySellChanged = function (currency) {
        this.currentSellCurrency = currency;
    };
    return RateFormComponent;
}());
__decorate([
    core_1.Output('rateAdded')
], RateFormComponent.prototype, "rateAdded", void 0);
RateFormComponent = __decorate([
    core_1.Component({
        selector: 'app-rate-form',
        templateUrl: './rate-form.component.html',
        styleUrls: ['./rate-form.component.scss'],
    })
], RateFormComponent);
exports.RateFormComponent = RateFormComponent;
