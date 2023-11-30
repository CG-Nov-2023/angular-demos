import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {

  baseUrl: string = "http://localhost:6868/api/books";

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<any[]>{
    // here we should consume the endpoint http://localhost:6868/api/books
    // to consume endpoint in angular we should use HttpClient api
    // so inject HttpClient in the constructor
    // also make sure to add HttpClientModule in app.module.ts
    // next use get method to consume the get endpoint

    return this.httpClient.get<any[]>(this.baseUrl);
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
  
  addBook(newBook: any){
  }
}
