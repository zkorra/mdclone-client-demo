import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, ReplaySubject, Observable, map, take } from 'rxjs';

import type {
  UserLoginInfo,
  UserRegistrationInfo,
  User,
  UserInfoResponse,
  UserLoginDto,
  UserRegistrationDto,
} from '@core/models';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user$ = new BehaviorSubject<User | null>(null);
  private authenticated$ = new ReplaySubject<boolean>(1);

  constructor(
    private router: Router,
    private apiService: ApiService,
    private jwtToken: JwtService,
  ) {}

  getUser(): Observable<User | null> {
    return this.user$;
  }

  getUserValue(): User | null {
    return this.user$.value;
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

    this.router.navigateByUrl('/');
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

  register(registrationInfo: UserRegistrationInfo): Observable<User> {
    const userRegistrationDto: UserRegistrationDto = { user: registrationInfo };

    return this.apiService.post('/users', userRegistrationDto).pipe(take(1));
  }

  login(userInfo: UserLoginInfo): Observable<User> {
    const userLoginDto: UserLoginDto = { user: userInfo };

    return this.apiService.post('/users/login', userLoginDto).pipe(
      take(1),
      map((data: UserInfoResponse) => {
        this.setUser(data.user);
        return data.user;
      }),
    );
  }
}
