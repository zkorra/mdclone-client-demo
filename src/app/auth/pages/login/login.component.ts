import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoaderService, UserService } from '@core/services';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly destroyed$: Subject<void> = new Subject();

  loginForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private loaderService: LoaderService,
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

    this.userService.login(this.loginForm.value).subscribe({
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
