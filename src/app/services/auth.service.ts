import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUserDto } from '../dtos/login-user-dto';
import { TokenDto } from '../dtos/token-dto';
import { UserHelper } from '../helpers/user-helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$ = new BehaviorSubject<any | null>(this.getToken());

  constructor(private _http: HttpClient) {
  }

  login(loginDto: LoginUserDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.getApiAddress() + "auth", loginDto)
      .pipe(
        tap(token => {
          if (token && token.token) {
            UserHelper.setUserToken(token.token);
            UserHelper.setUserId(token.userId);
            this.isLoggedIn$.next(token);
          } else this.logOut();
        })
      )
  }

  logOut() {
    this.isLoggedIn$.next(null);
    UserHelper.setUserToken(null);
  }

  getToken() : string | null {
    return UserHelper.getUserToken();
  }

  isLoggedIn() {
    return this.getToken();
  }
}
