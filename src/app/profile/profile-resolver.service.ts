import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import type { Profile } from '@core/models';
import { ProfileService } from '@core/services';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Observable<Profile>> {
  constructor(private router: Router, private profileService: ProfileService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Profile> {
    let username = route.params['username'];

    return this.profileService.getProfile(username).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.router.navigateByUrl('/404');
        }

        return EMPTY;
      }),
    );
  }
}
