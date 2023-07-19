import { Component, OnInit, Optional, Self } from '@angular/core';
import {
  FormControlDirective,
  FormControlName,
  NgControl,
  NgModel,
} from '@angular/forms';
import { ControlValueAccessorDirective } from '@shared/directives/control-value-accessor.directive';

@Component({
  selector: 'auth-password-field',
  templateUrl: './password-field.component.html',
  hostDirectives: [ControlValueAccessorDirective],
})
export class PasswordFieldComponent implements OnInit {
  control!: FormControlDirective | FormControlName | NgModel;

  hide = true;

  constructor(@Self() @Optional() private ngControl: NgControl) {}

  ngOnInit() {
    if (!this.ngControl) throw new Error('...');

    if (
      this.ngControl instanceof FormControlDirective ||
      this.ngControl instanceof FormControlName ||
      this.ngControl instanceof NgModel
    ) {
      this.control = this.ngControl;
    }
  }
}
