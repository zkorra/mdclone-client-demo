import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { UserService } from '@core/services';
import { take, finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.fb.group(
      {
        email: ['', Validators.required],
        password: ['123456c', Validators.required],
      },
      // { updateOn: 'submit' },
    );
  }

  get emailControl() {
    return this.loginForm.controls['email'];
  }

  get passwordControl() {
    return this.loginForm.controls['password'];
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService
      .login(this.loginForm.value)
      .pipe(
        take(1),
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: (data) => {
          console.log('form', data);
          this.router.navigateByUrl('/');
        },
        // error: (error) => {
        //   console.error('myerror', error);
        // },
      });
  }
}
