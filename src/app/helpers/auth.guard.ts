import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const currentUser =this.authService.getUser();

    // console.log(next.data, currentUser);
    // if (this.authService.isAuthenticated()) {
    //   // check if route is restricted by role
    //   if (next.data.roles && next.data.roles.indexOf(currentUser.roles[0]) === -1) {
    //     // role not authorised so redirect to home page
    //     this.router.navigate(['/']);
    //     return false;
    //   }
    //   return true;
    // }

    // // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login']);
    return true;
  }

}
