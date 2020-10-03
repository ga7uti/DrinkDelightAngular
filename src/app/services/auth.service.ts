import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  jwtHelper = new JwtHelperService();
  
  constructor(private http: HttpClient,) {
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/signin`, loginRequest);
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/signup`, user);
  }

  forgetPassword(email: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    return this.http.post<any>(`${environment.apiUrl}/forgotpassword`, formData);
  }

  updatePassword(token: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('token', token);
    formData.append('password', password);
    return this.http.post<any>(`${environment.apiUrl}/resetpassword`, formData);
  }

  logout() {
    localStorage.clear()
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem("currentUser") === null) {
      return false;
    } else {
      return !this.jwtHelper.isTokenExpired(this.getUser().token);
    }
  }

  saveUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUser(): User {
    if (localStorage.getItem("currentUser") === null) {
      return null;
    } else {
      return new User(JSON.parse(localStorage.getItem('currentUser')));
    }
  }

  getRole() {
    return new User(JSON.parse(localStorage.getItem('currentUser'))).roles[0];
  }

  getUserId() {
    return new User(JSON.parse(localStorage.getItem('currentUser'))).userId;
  }

  getToken() {
    return new User(JSON.parse(localStorage.getItem('currentUser'))).token;
  }
}
