import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { BookingCreateComponent } from './booking/components/booking-create/booking-create.component';
import { ChangeAvailibleTimesComponent } from './booking/components/change-availible-times/change-availible-times.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingCreateComponent,
    ChangeAvailibleTimesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
