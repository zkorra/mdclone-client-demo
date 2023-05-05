import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';

@Injectable()
export class AuthService {
  constructor(private apiService: ApiService) {}

  register(registrationInfo: { email: string; password: string }) {
    const response = this.apiService
      .post('/user/register', registrationInfo)
      .subscribe((data) => {
        console.log(data);
      });
  }

  login() {
    return;
  }
}
