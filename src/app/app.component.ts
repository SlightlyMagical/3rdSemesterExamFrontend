import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AC Game Coaching';
  navbarCollapsed = true;

  constructor(private _authService: AuthService, private _router: Router) { 
  }

  isLoggedIn() {
    return this._authService.isLoggedIn();
  }

  logOut() {
  this._authService.logOut();
  this._router.navigateByUrl("/login");
  }

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
