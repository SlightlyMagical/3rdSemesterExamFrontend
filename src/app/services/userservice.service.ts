import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterUserDto } from '../dtos/registeruserdto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {
  }

  createUser(input : RegisterUserDto) : Observable<RegisterUserDto> {
    return this._http.post<RegisterUserDto>(environment.getApiAddress() + 'register', input);
  }
}
