import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../core/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) { }

  login(payload: ILogin): Observable<any> {
    return this.httpClient.post('/api/auth/login', payload);
  }

  signout() {
    localStorage.clear();
    sessionStorage.clear();

    return Promise.resolve(true);
  }
}
