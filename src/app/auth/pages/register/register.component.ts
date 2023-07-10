import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '@core/services';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        username: ['abc', [Validators.required]],
        email: ['abc@abc.com', [Validators.required, Validators.email]],
        password: ['124412', [Validators.required, Validators.minLength(6)]],
      },
      { updateOn: 'submit' },
    );
  }

  get usernameControl() {
    return this.registerForm.controls['username'];
  }

  get passwordControl() {
    return this.registerForm.controls['password'];
  }

  get emailControl() {
    return this.registerForm.controls['email'];
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    if (this.registerForm.invalid) {
      /*
       *  Change updateOn from 'submit' to default
       *  Allow form to validate on value change for second or more attempt
       */
      this.registerForm = this.changeFormGroupMode(this.registerForm);
      this.loading = false;

      return;
    }

    this.userService
      .register({ user: this.registerForm.value })
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: (data) => {
          console.log('next?');
        },
      });
  }

  changeFormGroupMode(form: FormGroup) {
    return this.fb.group(form.controls, { updateOn: 'change' });
  }
}
