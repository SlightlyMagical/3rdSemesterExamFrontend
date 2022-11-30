import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UpdateUserDto } from 'src/app/dtos/update-user-dto';
import { HasherHelper } from 'src/app/helpers/hasher-helper';
import { UserHelper } from 'src/app/helpers/user-helper';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  updateForm = new FormGroup({
    //username: new FormControl("", [Validators.required]),
    //email: new FormControl("", [Validators.required]),
    oldPassword: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
  }

  update() {
    let dto = this.updateForm.value as UpdateUserDto;
    dto.id = UserHelper.getUserId();
    this._userService.updateUser(dto).subscribe({
      error: (e) => {
        alert(e["error"]);
      },
      complete: () => {
        alert("Profile updated successfully!");
      }
    });
  }
}
