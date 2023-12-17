import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../users-http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {

  baseUrl: string = "http://localhost:6868/api/books";

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getAllBooks(): Observable<any[]>{
    // here we should consume the endpoint http://localhost:6868/api/books
    // to consume endpoint in angular we should use HttpClient api
    // so inject HttpClient in the constructor
    // also make sure to add HttpClientModule in app.module.ts
    // next use get method to consume the get endpoint

    // take the token from sessionStorage
    let token: any = this.authService.retrieveToken();
    // create a header with the key as Authorization and value is Bearer token
    let header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token 
      })
    }
    return this.httpClient.get<any[]>(this.baseUrl, header);
    //return this.httpClient.get<any[]>(this.baseUrl);
    // get method returns an observable of response
    // we return the observable to whoever is asking for the response

  }

  getABook(bid: any): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"/"+bid);
  }

  removeBook(bId: number): Observable<void>{
   return this.httpClient.delete<void>(this.baseUrl+"/"+bId);
  }

  updateBook(changedBook: any){
    
  }
  
  addBook(newBook: any): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl, newBook);
  }
}
