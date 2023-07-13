import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Input() formControl!: FormControl;
  @Input() invalid: boolean = false;
}
