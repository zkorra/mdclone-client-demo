import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '@core/models';
import { JwtService } from './jwt.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public userData = this.userSubject.asObservable();

  constructor(private jwtToken: JwtService) {}

  setUser(user: User): void {
    // Set user's token into localstorage
    this.jwtToken.setToken(user.token);

    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.value;
  }
}
