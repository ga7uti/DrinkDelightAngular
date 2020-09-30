import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ErrorResponse} from '../../../models/error-response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  response: ErrorResponse = new ErrorResponse();


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        re_password: new FormControl('', [Validators.required, Validators.minLength(8)])
      }),
      userPhone: new FormControl('', Validators.required)
    });
  }

  submit() {
    const formData = this.registerForm.value;
    if (!formData.passwordGroup.password.localeCompare(formData.passwordGroup.re_password)) {
      const user = new User(formData);

      this.authService.register(user).subscribe(value => {
        if (value.status) {
          this.router.navigate(['/']);
          console.log(value.message);
        } else {
          this.response = {status: true, message: value.message};
        }
      });
    }else {
      this.response = {status: true, message: 'Password does not match.'};

    }
  }
}
