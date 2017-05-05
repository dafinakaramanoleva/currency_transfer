"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rate = (function () {
    function Rate(values) {
        if (values === void 0) { values = {}; }
        this.sell_currency = '';
        this.buy_currency = '';
        this.side = '';
        this.book = false;
        this.reason = "Payments";
        Object.assign(this, values);
    }
    return Rate;
}());
exports.Rate = Rate;
