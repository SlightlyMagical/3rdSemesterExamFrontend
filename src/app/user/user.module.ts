import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileViewComponent } from './components/user-profile-view/user-profile-view.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { CoachViewComponent } from './coach/components/coach-view/coach-view.component';
import { CoachesViewComponent } from './coach/components/coaches-view/coaches-view.component';



@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent,
    UserProfileViewComponent,
    UserProfileEditComponent,
    CoachViewComponent,
    CoachesViewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
