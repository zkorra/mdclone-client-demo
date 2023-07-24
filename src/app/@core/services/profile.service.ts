import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';

import type { Profile, ProfileResponse } from '@core/models';

import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private apiService: ApiService) {}

  getProfile(username: string): Observable<Profile> {
    return this.apiService.get(`/profiles/${username}`).pipe(
      take(1),
      map((data: ProfileResponse) => data.profile),
    );
  }
}
