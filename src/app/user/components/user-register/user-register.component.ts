import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice.service';
import { RegisterUserDto } from '../../../dtos/registeruserdto';

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

  constructor(private _userService : UserService) { }

  ngOnInit(): void {

  }

  registerUser() {
    var input = this.registerForm.value as RegisterUserDto;

    // TODO: Make call to the api.
    this._userService.createUser(input).subscribe(
      success => {
        //this._router.navigateByUrl("tournaments/details/" + success.id);
        alert("Registration complete! Welcome onbard, " + success.username + "!");
      },
      err => {
        alert(err["error"]);
      });
  }

}
