import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dd';
  constructor(public authService: AuthService,public router:Router){
  }
  logOut(){
    this.authService.logout();
  }
}
