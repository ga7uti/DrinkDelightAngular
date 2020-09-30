import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from './component/login/_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dd';
  isLogged:boolean;
  constructor(private authService: AuthService,private router:Router){
    this.isLogged=authService.isLoggedIn;
  }
  get isLoggedIn():boolean{
    return false;
  }
  login(){
    this.isLogged=this.authService.isLoggedIn;
  }
  logOut(){
    this.authService.logout();
    this.authService.isLoggedIn=false;
    this.isLogged=false;
  }
}
