import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.API_URL}${path}`, { params });
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.API_URL}${path}`, JSON.stringify(body));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${this.API_URL}${path}`, JSON.stringify(body));
  }
}
