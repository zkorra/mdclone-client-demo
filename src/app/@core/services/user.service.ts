import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

import { User } from '@core/models';
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

  register(registrationInfo: { email: string; password: string }) {
    return this.apiService.post('/user/register', registrationInfo);
  }

  login(userInfo: { email: string; password: string }) {
    return this.apiService.post('/user/login', userInfo).pipe(
      map((data) => {
        this.setUser(data);
        return data;
      }),
    );
  }
}
