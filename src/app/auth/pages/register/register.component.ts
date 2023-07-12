import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject, takeUntil } from 'rxjs';

import {
  UserService,
  NotificationService,
  LoaderService,
} from '@core/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private readonly destroyed$: Subject<void> = new Subject();

  registerForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private loaderService: LoaderService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.buildForm();

    this.loaderService
      .isLoading()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((status) => {
        this.loading = status;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
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

    if (this.registerForm.invalid) {
      /*
       *  Change updateOn from 'submit' to default
       *  Allow form to validate on value change for second or more attempt
       */
      this.registerForm = this.cloneFormGroup(this.registerForm);

      return;
    }

    this.userService.register(this.registerForm.value).subscribe({
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
