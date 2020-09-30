import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../../../models/login-request';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {ErrorResponse} from '../../../models/error-response';
import {User} from '../../../models/user';
import {Role} from '../../../models/role.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();
  response: ErrorResponse = new ErrorResponse();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.redirectTo(this.authService.getUser());
  }

  submit() {
    this.authService.login(this.loginRequest).subscribe(value => {
      if (value.status) {
        const user = new User(value.data);
        this.authService.saveUser(user);
        this.authService.isLoggedIn=true;
        this.redirectTo(user);
      } else {
        this.response = {status: true, message: value.message};
      }
    });
    console.log(this.authService.isLoggedIn);
  }

  redirectTo(user) {
    if (user.roles[0] === Role.User) {
      this.router.navigate(['home']);
    } else if (user.roles[0] === Role.Admin) {
      this.router.navigate(['home']);
    }
  }
}
