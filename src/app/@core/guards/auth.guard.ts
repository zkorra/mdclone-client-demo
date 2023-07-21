import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, take, map } from 'rxjs';

import { UserService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.userService.isAuthenticated().pipe(
      take(1),
      map((authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/');
        }

        return authenticated;
      }),
    );
  }
}
