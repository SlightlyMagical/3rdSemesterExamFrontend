import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  { path: "login", component: UserLoginComponent},
  { path: "login1", component: UserLoginComponent, canActivate: [AuthGuardGuard]},
  { path: "register", component: UserRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
  