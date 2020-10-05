import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {ErrorResponse} from '../../../models/error-response';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  password: string;
  re_password: string;
  loading: boolean = false;
  constructor(private authService: AuthService, private router: Router,private toastr:ToasterService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.loading = true;
    const url_str = window.location.href;
    const url = new URL(url_str);
    const token = url.searchParams.get('token');
    if (!this.password.localeCompare(this.re_password)) {
      this.authService.updatePassword(token, this.password).subscribe(value => {
        this.loading = false;
        if (value.status) {
          this.router.navigate(['/']);
          this.toastr.success("Password updated successfully.");
        } else {
          this.toastr.error(value.message);
        }
      });
    } else {
      this.loading = false;
      this.toastr.error('Password does not match');
    }

  }
}
