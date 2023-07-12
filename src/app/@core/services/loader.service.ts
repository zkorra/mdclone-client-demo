import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private loading$ = new BehaviorSubject<boolean>(false);

  isLoading(): Observable<boolean> {
    return this.loading$;
  }

  setStatus(status: boolean) {
    this.loading$.next(status);
  }
}
