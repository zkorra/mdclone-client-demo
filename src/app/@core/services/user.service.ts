import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { LoginUserInfo, RegistrationUserInfo, User } from '@core/models';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user$ = new BehaviorSubject<User | null>(null);

  constructor(private apiService: ApiService, private jwtToken: JwtService) {}

  setUser(user: User): void {
    // Set user's token into localstorage
    this.jwtToken.setToken(user.token);

    this.user$.next(user);
  }

  purgeUser(): void {
    this.jwtToken.removeToken();
    this.user$.next(null);
  }

  getUser(): Observable<User | null> {
    return this.user$;
  }

  register(registrationInfo: RegistrationUserInfo): Observable<User> {
    return this.apiService.post('/users', registrationInfo);
  }

  login(userInfo: LoginUserInfo): Observable<User> {
    const userInfoDto = { user: userInfo };

    return this.apiService.post('/users/login', userInfoDto).pipe(
      map((data) => {
        const { user } = data;
        this.setUser(user);
        return user;
      }),
    );
  }
}
