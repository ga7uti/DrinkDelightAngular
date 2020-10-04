import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {ErrorResponse} from '../../../models/error-response';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  response: ErrorResponse = new ErrorResponse();
  isSuccess = false;
  loading: boolean =false;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.loading = true;
    this.authService.forgetPassword(this.email).subscribe(value => {
      this.loading = false;
      if (value.status) {
        this.isSuccess = true;
        this.response = {status: true, message: value.message};
      } else {
        this.isSuccess = false;
        this.response = {status: true, message: value.message};
      }
    });
  }
}
