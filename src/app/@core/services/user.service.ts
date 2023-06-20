import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

import { LoginUserInfo, RegistrationUserInfo, User } from '@core/models';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private apiService: ApiService, private jwtToken: JwtService) {}

  setUser(user: User): void {
    // Set user's token into localstorage
    this.jwtToken.setToken(user.token);

    this.userSubject.next(user);
  }

  purgeUser(): void {
    this.jwtToken.removeToken();
    this.userSubject.next(null);
  }

  getUser() {
    return this.userSubject.getValue();
  }

  register(registrationInfo: RegistrationUserInfo) {
    return this.apiService.post('/user', registrationInfo);
  }

  login(userInfo: LoginUserInfo) {
    return this.apiService.post('/user/login', userInfo).pipe(
      map((data) => {
        this.setUser(data);
        return data;
      }),
    );
  }
}
