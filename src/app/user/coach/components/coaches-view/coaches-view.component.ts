import { Component, OnInit } from '@angular/core';
import { map, Observable, pipe, tap } from 'rxjs';
import { UserDto } from 'src/app/dtos/user-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-coaches-view',
  templateUrl: './coaches-view.component.html',
  styleUrls: ['./coaches-view.component.css']
})
export class CoachesViewComponent implements OnInit {
  coaches: UserDto[] = [];
  error : boolean = false;

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
        error: (e) => {
          this.error = true;
        alert(e["error"]);
        },
      });
  }

}
