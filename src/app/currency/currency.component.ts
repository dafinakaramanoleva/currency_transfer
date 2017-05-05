import {Component, EventEmitter, Output} from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})

export class CurrencyComponent implements ControlValueAccessor {
  private currency: string;
  private parseError: boolean;
  private data: any;

  stateCtrl: FormControl;
  filteredCurrencies: any;

  private onChange = (_: any) => {};
  private onTouched = (_: any) => {};
  @Output('onCurrencyChange') notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredCurrencies = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterCurrencies(name));
  }

  filterCurrencies(val: string) {
    return val ? this.currencies.filter(s => new RegExp(`^${val}`, 'gi').test(s))
        : this.currencies;
  }

  public writeValue(obj: any) {
    if (obj) {
      this.data = obj;
      this.currency =
          JSON.stringify(this.data, undefined, 4);
    }
  }

  public registerOnTouched(fn) {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public select(event) {
    this.notify.emit(event.target.value);
  }

  currencies = [
    'GBP',
    'EUR',
    'BGN',
    'USD'
  ];

  currencyDependencies = [
    {'GBP': ['EUR', 'BGN', 'USD']},
    {'EUR': ['GBP', 'BGN', 'USD']},
    {'BGN': 'GBP'},
    {'USD': 'GBP'}
  ];
}
