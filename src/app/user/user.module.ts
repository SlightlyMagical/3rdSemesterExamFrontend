import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserLoginComponent } from '../user-login/user-login.component';



@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
