import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import { RoutingsService } from 'src/app/services/routings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  loggedUser = '';
  sub!: Subscription;
  constructor(private authService: LoginService, private routerS: RoutingsService) { }

  ngOnInit(): void {
    // this behaviour subject tells user is log in or logout
    this.sub = this.authService.broadCastLogin$.asObservable().subscribe(value => {
    console.log('IN BSUBJECT '+value);
      if(value) {
        this.getLoggedUserName();
      } else {
        this.loggedUser = '';
        this.routerS.goToPath('login');
      }
    })

    // Initially check logged username
    this.getLoggedUserName();
  }

  getLoggedUserName() {
      this.loggedUser = this.authService.getLoggedUser();
  }

  ngOnDestroy(): void {
      if(this.sub) {
        this.sub.unsubscribe();
      }
  }
  logout() {
    this.authService.logout();
  }
}
