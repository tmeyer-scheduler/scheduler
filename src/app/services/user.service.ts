import { Injectable } from '@angular/core';

import { CurrentUser } from '../classes/currentUser';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  tempEmail: String = 'testemail@gmail.com';
  tempPassword: String = 'TestPassword0!';

  constructor(activeUser: CurrentUser) { 
    activeUser = activeUser;
  }

  logIn(email: string, password: string) {
    if (email === this.tempEmail && password === this.tempPassword) {

    } else {
      
    }
  }
}
