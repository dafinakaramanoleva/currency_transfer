import { Component, OnInit } from '@angular/core';
import { RateCurrencyService } from '../rateCurrencyService';
import { Rate } from "../rate";


@Component({
  selector: 'app-rates-section',
  templateUrl: './rates-section.component.html',
  styleUrls: ['./rates-section.component.scss'],
  providers: [RateCurrencyService]
})
export class RatesSectionComponent implements OnInit {
  rates: Rate[];
  errorMessage: string;

  constructor(private service: RateCurrencyService) {}

  ngOnInit() {
    this.getRates();
  }

  getRates() {
    this.service.getAllRates()
        .subscribe(
            rates => this.rates = rates,
            error => this.errorMessage = <any>error
        );
  }

  addRate(rate: Rate) {
    console.log('add rate in child component');
    if (!rate) {
      return;
    }
    this.service.create(rate)
        .subscribe(
            rate => this.rates.push(rate),
            error => this.errorMessage = <any>error
        );
  }

  deleteRate(id: string) {
    console.log(id);
    this.service.deleterateById(id)
        .subscribe(
            result => {
              // console.log(this.rates[0].uuid);
              // this.rates = this.rates.filter(rate => result.data.uuid !== rate.uuid)
            },
            error => this.errorMessage = <any>error
        )
  }
}
