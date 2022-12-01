import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { CoachViewComponent } from './coach/components/coach-view/coach-view.component';
import { CoachesViewComponent } from './coach/components/coaches-view/coaches-view.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { UserProfileViewComponent } from './components/user-profile-view/user-profile-view.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  { path: "login", component: UserLoginComponent},
  { path: "profile/view", component: UserProfileViewComponent, canActivate: [AuthGuardGuard]},
  { path: "profile/edit", component: UserProfileEditComponent, canActivate: [AuthGuardGuard]},
  { path: "coaches", component: CoachesViewComponent },
  { path: "coach/view/:id", component: CoachViewComponent },
  { path: "register", component: UserRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
  