import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-three-step-button',
  templateUrl: './three-step-button.component.html',
  styleUrls: ['./three-step-button.component.scss']
})
export class ThreeStepButtonComponent {
  private isBooked: boolean = false;

  constructor() { }

  onClick() {
    this.isBooked = true;
  }
}
