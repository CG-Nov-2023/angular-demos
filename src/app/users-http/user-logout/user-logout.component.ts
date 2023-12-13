import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrl: './user-logout.component.css'
})
export class UserLogoutComponent {
  constructor(private authService: AuthService,
              private router: Router){}
  ngOnInit(){
    // remove user object from session storage
    this.authService.removeUser();
    // set isLoggedIn to false in authService
    this.authService.isLoggedIn = false;
    // navigate to login
    this.router.navigate(['login']);


  }
}
