import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

import { AvailableTimesComponent} from "./available-times/available-times.component";


@NgModule({
  declarations: [
    AvailableTimesComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
