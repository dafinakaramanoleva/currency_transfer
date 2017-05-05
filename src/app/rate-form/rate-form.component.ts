import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Rate} from '../rate';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.component.html',
  styleUrls: ['./rate-form.component.scss'],
})
export class RateFormComponent implements OnInit {
  next = false;
  submitted = false;
  rateCurrencyForm: FormGroup;
  @Output('rateAdded') rateAdded: EventEmitter<Rate> = new EventEmitter<Rate>();

  protected currentSellCurrency: string = 'GBP';
  protected currentBuyCurrency: string = 'GBP';
  protected currentRatePlaceholder: string = 'e.g. 1.2345';

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() { }

  buildForm(): void {
    this.rateCurrencyForm = this.fb.group({
      'buy': '',
      'sell': '',
      'currency_buy': 'GBP',
      'currency_sell': 'GBP',
      'current_rate': ''
    });
    this.rateCurrencyForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit({form, valid}: {form: any, valid: boolean}) {
    console.log(valid);
    let formValue = form.value;
    let rate = new Rate();

    rate.side          = formValue.buy === '' ? 'sell' : 'buy';
    rate.amount        = formValue[rate.side];
    rate.target_rate   = formValue.target_rate;
    rate.sell_currency = formValue.currency_sell;
    rate.buy_currency  = formValue.currency_buy;

    console.log('on Submit');
    console.log(rate);
    alert('here');
    this.rateAdded.emit(rate);
    this.submitted = true;
  }

  onNext() {
    console.log('next');
    this.next = true;
  }

  onValueChanged(data?: any) {
    if (!this.rateCurrencyForm) { return; }
    const form = this.rateCurrencyForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  get currencyBuyInputPlaceholder() {
    return 'e.g. 10,000 ' + this.currentBuyCurrency;
  }

  get currencySellInputPlaceholder() {
    return 'e.g. 10,000 ' + this.currentSellCurrency;
  }

  protected onCurrencyBuyChanged(currency: string) {
    this.currentBuyCurrency = currency;
  }

  protected onCurrencySellChanged(currency: string) {
    this.currentSellCurrency = currency;
  }

  formErrors = {
    'buy': '',
    'sell': '',
    'currency-buy': '',
    'currency-sell': '',
    'current-rate': ''
  };

  validationMessages = {
    'inputError': 'There is a problem setting a rate alert. Please, check your form input.'
  };

}
