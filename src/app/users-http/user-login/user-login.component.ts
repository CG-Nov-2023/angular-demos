import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserHttpService } from '../user-http.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  newUser: User = {
    userId: 0,
    userName: "",
    userPassword: "",
    allRolesPojo: []
  }

  errorMessage: string = '';

  constructor(private userHttpService: UserHttpService,
              private authService: AuthService,
              private router: Router){}
  login(){
    // validate the username password by 
    // consuming endpoint in service layer 
    this
      .userHttpService
      .validate(this.newUser)
      .subscribe((response)=>{
        // means user name and password is correct
        console.log(response);
        // store the response (user object) in sessionStorage
        this.authService.storeUser(response);
        this.authService.isLoggedIn = true;
        this.router.navigate(['display']);
      },
      (error)=>{
        console.log(error);
        this.errorMessage = error.error.errorMessage
      });
    }
  }