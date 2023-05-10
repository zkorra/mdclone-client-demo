import { Injectable } from '@angular/core';
import { ApiService, UserService } from '@core/services';
import { map } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private apiService: ApiService,
    private userService: UserService,
  ) {}

  register(registrationInfo: { email: string; password: string }) {
    const response = this.apiService
      .post('/user/register', registrationInfo)
      .subscribe((data) => {
        console.log(data);
      });
  }

  login(userInfo: { email: string; password: string }) {
    const response = this.apiService
      .post('/user/login', userInfo)
      .pipe(
        map((data) => {
          this.userService.setUser(data);
          return data;
        }),
      )
      .subscribe((data) => {
        console.log(this.userService.getUser());
      });
  }
}
