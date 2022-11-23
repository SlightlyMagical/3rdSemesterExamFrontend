import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterUserDto } from '../dtos/registeruserdto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {
  }


  createUser(input : RegisterUserDto) {
    return this._http.post<RegisterUserDto>(environment.api + '/user', input);
  }
}
