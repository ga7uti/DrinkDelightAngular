import { Address } from './address';
import {Role} from './role.enum';

export class User {
  userId: number
  name: string;
  userName: string;
  email: string;
  token: string;
  type: string;
  phone: string;
  roles: Role[];
  password: string;
  address: Address

  constructor(user) {
    this.name = user.name;
    this.userName = user.userName;
    this.email = user.email;
    if (user.hasOwnProperty('passwordGroup')) {
      this.password = user.passwordGroup.password;
    }
    this.phone = user.phone;
    if (user.hasOwnProperty('token')) {
      this.token = user.token;
    }
    if (user.hasOwnProperty('roles')) {
      this.roles = user.roles;
    }
    this.address = user.address
  }
}
