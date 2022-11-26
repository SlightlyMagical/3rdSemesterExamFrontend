import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice.service';
import { RegisterUserDto } from '../../../dtos/register-user-dto';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {  

  registerForm = new FormGroup({
    usertype: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(private _userService : UserService, private _router : Router) { }

  ngOnInit(): void {

  }

  registerUser() {
    var input = this.registerForm.value as RegisterUserDto;

    // TODO: Make call to the api.
    this._userService.createUser(input).subscribe(
      success => {
        alert("Registration complete! Welcome onbard, " + success.username + "!");
        this._router.navigateByUrl("login");
      },
      err => {
        alert(err["error"]);
      });
  }

}
