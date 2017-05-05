import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rate-alert',
  templateUrl: './rate-alert.component.html',
  styleUrls: ['./rate-alert.component.scss']
})
export class RateAlertComponent {
  @ViewChild('rateSection') rateSection;

  constructor() { }

  protected addRateHandler(event) {
    alert('fcu');
    // console.log(event);
    // this.rateSection.addRate(event);
  }

}
