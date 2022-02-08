import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoggedIn() {
    return !!localStorage.getItem('loggedinuser');
  }

  setLogUser(username: string) {
    localStorage.setItem('loggedinuser', username);
  }
}
