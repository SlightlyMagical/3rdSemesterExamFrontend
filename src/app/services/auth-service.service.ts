import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUserDto } from '../dtos/login-user-dto';
import { TokenDto } from '../dtos/token-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$ = new BehaviorSubject<string | null>(this.getToken());

  constructor(private _http: HttpClient) {
  }

  login(loginDto: LoginUserDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.getApiAddress() + "auth", loginDto)
      .pipe(
        tap(token => {
          if (token && token.token) {
            localStorage.setItem("token", token.token);
            this.isLoggedIn$.next(token.token);
          } else this.logout();
        })
      )
  }

  logout() {
    this.isLoggedIn$.next(null);
    localStorage.removeItem("token");
  }

  getToken() : string | null {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    return this.getToken();
  }
}
