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
  loading: boolean = false;



  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(4)]),
      userName: new FormControl('',[Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        re_password: new FormControl('', [Validators.required, Validators.minLength(8)])
      }),
      phone: new FormControl('')
    });
  }

  submit() {
    this.loading = true;
    const formData = this.registerForm.value;
    if (!formData.passwordGroup.password.localeCompare(formData.passwordGroup.re_password)) {
      const user = new User(formData);
      this.authService.register(user).subscribe(value => {
        this.loading = false;
        if (value.status) {
          this.router.navigate(['/']);
          console.log(value.message);
        } else {
          this.response = {status: true, message: value.message};
        }
      });
    }else {
      this.loading = false;
      this.response = {status: true, message: 'Password does not match.'};
    }
  }
}
