export class Rate {
    uuid: string;
    sell_currency: string = '';
    buy_currency: string = '';
    side: string = '';
    amount: number;
    target_rate: number;
    book: boolean = false;
    reason: string = "Payments";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }


}
