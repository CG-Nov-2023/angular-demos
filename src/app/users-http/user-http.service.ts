import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  baseUrl: string = "http://localhost:6868/api/login";
  constructor(private httpClient: HttpClient) { }

  validate(newUser: User): Observable<Auth>{
    return this.httpClient.post<Auth>(this.baseUrl, newUser);
  }
}
