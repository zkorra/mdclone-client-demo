import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '@core/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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

    if (this.registerForm.valid) {
      this.userService
        .register({ user: this.registerForm.value })
        .subscribe((data) => {});
    }

    this.submitted = false;
  }
}
