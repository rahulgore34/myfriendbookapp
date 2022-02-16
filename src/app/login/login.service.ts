import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // broadCastLogin$ = new BehaviorSubject<boolean>(false);
  broadCastLogin$ = new Subject<boolean>();

  constructor() { }

  isLoggedIn() {
    return !!localStorage.getItem('loggedinuser');
  }

  setLogUser(username: string) {
    localStorage.setItem('loggedinuser', username);
    this.broadCastLogin$.next(true);
  }

  getLoggedUser(): string {
    return localStorage.getItem('loggedinuser')!;
  }

  logout() {
    localStorage.removeItem('loggedinuser');
    this.broadCastLogin$.next(false);
  }
}
