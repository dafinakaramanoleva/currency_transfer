import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {
  private value: string;
  private parseError: boolean;
  private data: any;

  @Input()
  label:string;

  @Input()
  placeholder: string;

  constructor() { }

  onNotify(message:string):void {
    console.log('here');
    alert(message);
  }

  private onChange(event) {
    let newValue = event.target.value;
    try {
      this.data = JSON.parse(newValue);
      this.parseError = false;
      this.propagateChange(this.data);
    } catch (ex) {
      this.parseError = true;
    }
  }

  private propagateChange = (_: any) => { };

  public writeValue(obj: any) {
    if (obj) {
      this.data = obj;
      this.value =
          JSON.stringify(this.data, undefined, 4);
    }
  }

  public registerOnTouched() { }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  private onlyDecimalNumberKey(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57));

  }
}
