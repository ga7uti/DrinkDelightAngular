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
    const formData = this.registerForm.value;
    if (!formData.passwordGroup.password.localeCompare(formData.passwordGroup.re_password)) {
      const user = new User(formData); 
      console.log(JSON.stringify(user))    
      this.authService.register(user).subscribe(value => {
        if (value.status) {
          this.router.navigate(['/']);
        } else {
          this.response = {status: true, message: value.message};
        }
      });
    }else {
      this.response = {status: true, message: 'Password does not match.'};

    }
  }
}
