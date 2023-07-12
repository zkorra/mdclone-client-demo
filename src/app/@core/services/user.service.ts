import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable, map, take } from 'rxjs';

import {
  LoginUserInfo,
  RegistrationUserInfo,
  User,
  UserInfoResponse,
} from '@core/models';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user$ = new BehaviorSubject<User | null>(null);
  private authenticated$ = new ReplaySubject<boolean>(1);

  constructor(private apiService: ApiService, private jwtToken: JwtService) {}

  getUser(): Observable<User | null> {
    return this.user$;
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticated$;
  }

  setUser(user: User): void {
    // Set user's token into localstorage
    this.jwtToken.setToken(user.token);
    this.user$.next(user);

    this.authenticated$.next(true);
  }

  purgeUser(): void {
    this.jwtToken.removeToken();
    this.user$.next(null);

    this.authenticated$.next(false);
  }

  populate() {
    if (this.jwtToken.getToken()) {
      this.apiService
        .get('/user')
        .pipe(take(1))
        .subscribe({
          next: (data) => this.setUser(data.user),
          error: (error) => this.purgeUser(),
        });
    } else {
      this.purgeUser();
    }
  }

  register(registrationInfo: RegistrationUserInfo): Observable<User> {
    const registrationInfoDto = { user: registrationInfo };

    return this.apiService.post('/users', registrationInfoDto).pipe(take(1));
  }

  login(userInfo: LoginUserInfo): Observable<User> {
    const userInfoDto = { user: userInfo };

    return this.apiService.post('/users/login', userInfoDto).pipe(
      take(1),
      map((data: UserInfoResponse) => {
        const { user } = data;
        this.setUser(user);
        return user;
      }),
    );
  }
}
