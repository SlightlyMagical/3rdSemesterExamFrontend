import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AvailableTimesComponent} from "./available-times/available-times.component";
import {AuthGuardGuard} from "../guards/auth-guard.guard";

const routes: Routes = [
  {path: "available-times", component: AvailableTimesComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
