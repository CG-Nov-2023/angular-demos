import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// this service is not going to consume endpoint
// this service is meant to store and retriev user object from session storage
// also to keep track if user has logged in or logged out
  constructor() { }
  isLoggedIn: boolean = false;

  storeUser(user: User){
    // store the user object in the session storage
    sessionStorage.setItem("userInfo", JSON.stringify(user));
  }

  retrieveUser(){
      let userString: any = sessionStorage.getItem("userInfo");
      let user = JSON.parse(userString);      
      return user;
  }

  removeUser(){
    sessionStorage.removeItem("userInfo");
  }

  storeToken(token: string){
    // store the user object in the session storage
    sessionStorage.setItem("tokenInfo", token);
  }

  retrieveToken(){
      let token: any = sessionStorage.getItem("tokenInfo");
      return token;
  }

  removeToken(){
    sessionStorage.removeItem("tokenInfo");
  }


}
