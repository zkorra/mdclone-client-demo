import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService, NotificationService } from '@core/services';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      },
      { updateOn: 'submit' },
    );
  }

  get usernameControl() {
    return this.registerForm.controls['username'];
  }

  get emailControl() {
    return this.registerForm.controls['email'];
  }

  get passwordControl() {
    return this.registerForm.controls['password'];
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    if (this.registerForm.invalid) {
      /*
       *  Change updateOn from 'submit' to default
       *  Allow form to validate on value change for second or more attempt
       */
      this.registerForm = this.cloneFormGroup(this.registerForm);
      this.loading = false;

      return;
    }

    this.userService
      .register(this.registerForm.value)
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: (user) => {
          this.notificationService.displaySuccess('Register Successfully');
          this.router.navigateByUrl('/login');
        },
      });
  }

  cloneFormGroup(form: FormGroup) {
    return this.fb.group(form.controls, { updateOn: 'change' });
  }
}
