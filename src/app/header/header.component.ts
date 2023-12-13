import { Component } from '@angular/core';
import { AuthService } from '../users-http/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private authService: AuthService){}

  isLoggedIn(){
    return this.authService.isLoggedIn;
  }

  getRole(){
    let user = this.authService.retrieveUser();
    let role = user.allRolesPojo[0];
    //console.log(role);
    return role.rolesName;
  }

}
