import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    const { message } = error.error;

    return throwError(
      () =>
        new Error(
          message ? message : 'Something bad happened; please try again later.',
        ),
    );
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${this.API_URL}${path}`, { params })
      .pipe(catchError(this.handleError));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${this.API_URL}${path}`, JSON.stringify(body))
      .pipe(catchError(this.handleError));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${this.API_URL}${path}`, JSON.stringify(body))
      .pipe(catchError(this.handleError));
  }
}
