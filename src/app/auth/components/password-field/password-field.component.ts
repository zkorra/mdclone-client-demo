import { Component, Input, OnInit, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  NgControl,
  NgModel,
} from '@angular/forms';

import { NoopValueAccessorDirective } from '@shared/directives/noop-value-accessor.directive';

@Component({
  selector: 'auth-password-field',
  templateUrl: './password-field.component.html',
  hostDirectives: [NoopValueAccessorDirective],
})
export class PasswordFieldComponent implements OnInit {
  // ngControl = injectNgControl();
  test!: FormControlDirective | FormControlName | NgModel;

  hide = true;

  constructor(private ngControl: NgControl) {}

  ngOnInit() {
    if (!this.ngControl) throw new Error('...');

    if (
      this.ngControl instanceof FormControlDirective ||
      this.ngControl instanceof FormControlName ||
      this.ngControl instanceof NgModel
    ) {
      this.test = this.ngControl;
    }

    throw new Error('...');
    // throw new Error('Method not implemented.');
  }
}
