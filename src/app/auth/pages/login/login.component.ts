import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { UserService } from '@core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['abc@abc.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required],
    });
  }

  get emailControl() {
    return this.loginForm.controls['email'];
  }

  get passwordControl() {
    return this.loginForm.controls['password'];
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: (data) => {
          console.log('form', data);
          this.router.navigateByUrl('/');
        },
      });
    }

    this.submitted = false;
  }
}
