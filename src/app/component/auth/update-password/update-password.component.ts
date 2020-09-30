import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {ErrorResponse} from '../../../models/error-response';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  password: string;
  re_password: string;
  response: ErrorResponse = new ErrorResponse();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const url_str = window.location.href;
    const url = new URL(url_str);
    const token = url.searchParams.get('token');
    if (!this.password.localeCompare(this.re_password)) {
      this.authService.updatePassword(token, this.password).subscribe(value => {
        if (value.status) {
          console.log(value.message);
          this.router.navigate(['/']);
        } else {
          this.response = {status: true, message: value.message};
        }
      });
    } else {
      this.response = {status: true, message: 'Password does not match'};
    }

  }
}
