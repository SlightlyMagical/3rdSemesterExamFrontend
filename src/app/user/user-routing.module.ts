import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { UserProfileViewComponent } from './components/user-profile-view/user-profile-view.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  { path: "login", component: UserLoginComponent},
  { path: "profile/view", component: UserProfileViewComponent, canActivate: [AuthGuardGuard]},
  { path: "profile/edit", component: UserProfileEditComponent, canActivate: [AuthGuardGuard]},
  { path: "register", component: UserRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
  