import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtService {
  getToken() {
    return localStorage.getItem('jwtToken');
  }

  setToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  removeToken() {
    localStorage.removeItem('jwtToken');
  }
}
