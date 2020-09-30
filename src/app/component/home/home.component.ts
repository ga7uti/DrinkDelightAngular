import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
