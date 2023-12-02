import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorHttpService {
  baseUrl: string = "http://localhost:6868/api/authors";

  constructor(private httpClient: HttpClient) { }
  
  getAllAuthors(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl);
  }
}
