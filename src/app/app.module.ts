import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { CarAlertComponent } from './car-alert/car-alert.component';
import { PassAlertComponent } from './pass-alert/pass-alert.component';
import { PassFormComponent } from './pass-form/pass-form.component';
import { CarFormComponent } from './car-form/car-form.component';
import { PassListComponent } from './pass-list/pass-list.component';
import { CarListComponent } from './car-list/car-list.component';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


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
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // NgMultiSelectDropDownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
