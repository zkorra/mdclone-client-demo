import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { LoginUserInfo, RegistrationUserInfo, User } from '@core/models';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    {} as User,
  );
  public user$ = this.userSubject.asObservable();

  constructor(private apiService: ApiService, private jwtToken: JwtService) {}

  setUser(user: User): void {
    // Set user's token into localstorage
    this.jwtToken.setToken(user.token);

    this.userSubject.next(user);
  }

  purgeUser(): void {
    this.jwtToken.removeToken();
    this.userSubject.next({} as User);
  }

  getUser(): User {
    return this.userSubject.getValue();
  }

  register(registrationInfo: RegistrationUserInfo): Observable<User> {
    return this.apiService.post('/users', registrationInfo);
  }

  login(userInfo: LoginUserInfo): Observable<User> {
    return this.apiService.post('/users/login', userInfo).pipe(
      map((data) => {
        const { user } = data;
        this.setUser(user);
        return user;
      }),
    );
  }
}
