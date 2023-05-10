import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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
      this.authService.register(this.registerForm.value);
    }

    this.submitted = false;
  }
}
