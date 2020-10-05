import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ErrorResponse } from '../../../models/error-response';
import { FormsModule } from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  loading: boolean = false;


  constructor(private authService: AuthService, private toastr: ToasterService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.loading = true;
    this.authService.forgetPassword(this.email).subscribe(value => {
      this.loading = false;
      if (value.status) {
        this.toastr.success(value.message);
      } else {
        this.toastr.error(value.message);
      }
    });
  }
}
