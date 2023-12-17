import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../users-http/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export const loginGuard: CanActivateFn = (route, state) => {
//   // we need authService to access isLoggenId
//   let isLoggedIn: boolean = true;

//   return isLoggedIn;
// };
@Injectable({
  providedIn: 'root'
})
export class LoginGuard{
  constructor(private authService: AuthService,
              private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if(this.authService.isLoggedIn){
      return true;
    }else{
      this.router.navigate(['login']);
    }
    return this.authService.isLoggedIn;
  }
  // canActivate(): boolean{
  //  
  // }
}