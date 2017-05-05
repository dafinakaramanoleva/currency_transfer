import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RatesSectionComponent } from './rates-section/rates-section.component';
import { RateFormComponent } from './rate-form/rate-form.component';
import { CurrencyComponent } from './currency/currency.component';
import { InputComponent } from './input/input.component';

import 'hammerjs';
import { CurrentRateComponent } from './current-rate/current-rate.component';
import { ThreeStepButtonComponent } from './three-step-button/three-step-button.component';
import { RateAlertComponent } from './rate-alert/rate-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    RatesSectionComponent,
    RateFormComponent,
    CurrencyComponent,
    InputComponent,
    CurrentRateComponent,
    ThreeStepButtonComponent,
    RateAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent, RateFormComponent]
})

export class AppModule { }
