import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, retry, throwError } from 'rxjs';

import { LoaderService } from '@core/services';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    this.loaderService.setStatus(true);

    return next.handle(request).pipe(
      // retry(1),
      finalize(() => {
        this.loaderService.setStatus(false);
      }),
    );
  }
}
