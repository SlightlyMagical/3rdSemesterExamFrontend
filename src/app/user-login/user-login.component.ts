import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUserDto } from '../dtos/login-user-dto';
import { AuthServiceService as AuthService } from '../services/auth-service.service';
import { UserService } from '../services/userservice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });


  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
  }

  login() {
    // TODO: Handle authentication.
    let loginDto = this.loginForm.value as LoginUserDto;

    this._authService.login(loginDto).subscribe(
      success => {
        alert(success.token);
      },
      err => alert(err)
    );
  }

}
