import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { CarAlertComponent } from './car-alert/car-alert.component';
import { PassAlertComponent } from './pass-alert/pass-alert.component';
import { PassFormComponent } from './pass-form/pass-form.component';
import { CarFormComponent } from './car-form/car-form.component';
import { PassListComponent } from './pass-list/pass-list.component';
import { CarListComponent } from './car-list/car-list.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';
import { EditPassComponent } from './edit-pass/edit-pass.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { ChangePassComponent } from './change-pass/change-pass.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    EditProfileComponent,
    ChangePassComponent,
    CarAlertComponent,
    PassAlertComponent,
    PassFormComponent,
    CarFormComponent,
    PassListComponent,
    CarListComponent,
    MultiSelectComponent,
    DeleteAlertComponent,
    EditPassComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
