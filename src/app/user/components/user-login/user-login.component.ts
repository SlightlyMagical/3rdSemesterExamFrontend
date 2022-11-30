import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUserDto } from 'src/app/dtos/login-user-dto';
import { AuthService } from 'src/app/services/auth.service';

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
    let loginDto = this.loginForm.value as LoginUserDto;

    this._authService.login(loginDto).subscribe({
      complete: () => alert("You have been successfully logged in, " + loginDto.username + "!"),
      error: (e) => alert(e["error"]),
    });
  }
}
