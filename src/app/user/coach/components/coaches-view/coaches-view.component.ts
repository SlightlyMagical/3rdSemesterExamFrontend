import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/dtos/user-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-coaches-view',
  templateUrl: './coaches-view.component.html',
  styleUrls: ['./coaches-view.component.css']
})
export class CoachesViewComponent implements OnInit {
  coaches: UserDto[] = [];
  errorMessage : string = "Loading...";

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(
      {
        next: (users) => {
          for(let i = 0; i < users.length;i++) {
              let user = users[i];

              // Only add user type of "Coach".
              if(user.usertype == "Coach") {
                this.coaches.push(user);
              }
          }
        },
        complete: () => {
          if(this.coaches.length == 0)
            this.errorMessage = "No coaches available.";
        },
        error: (e) => {
          this.errorMessage = "Error :(";
        },
      });
  }

}
