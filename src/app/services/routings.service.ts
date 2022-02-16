import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingsService {

  constructor(private router: Router) { }

  goToPath(url: string) {
    this.router.navigate([`/${url}`]);
  }
}
