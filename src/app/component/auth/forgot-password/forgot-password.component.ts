import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {ErrorResponse} from '../../../models/error-response';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  response: ErrorResponse = new ErrorResponse();


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.forgetPassword(this.email).subscribe(value => {
      if (value.status) {
        console.log(value.message);
      } else {
        this.response = {status: true, message: value.message};
      }
    });
  }
}
