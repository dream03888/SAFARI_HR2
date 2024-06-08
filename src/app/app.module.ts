import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts/layouts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { HomeComponent } from './layouts/pages/home/home.component';
import { ProfileComponent } from './layouts/pages/profile/profile.component';
import { EditProfileComponent } from './layouts/components/edit-profile/edit-profile.component';
import { CarAlertComponent } from './layouts/components/car-alert/car-alert.component';
import { ChangePassComponent } from './layouts/components/change-pass/change-pass.component';
import { DeleteAlertComponent } from './layouts/components/delete-alert/delete-alert.component';
import { MultiSelectComponent } from './layouts/components/multi-select/multi-select.component';
import { PassAlertComponent } from './layouts/components/pass-alert/pass-alert.component';
import { CarFormComponent } from './layouts/pages/car-form/car-form.component';
import { CarListComponent } from './layouts/pages/car-list/car-list.component';
import { CarViewComponent } from './layouts/pages/car-view/car-view.component';
import { EditCarComponent } from './layouts/pages/edit-car/edit-car.component';
import { EditPassComponent } from './layouts/pages/edit-pass/edit-pass.component';
import { PassFormComponent } from './layouts/pages/pass-form/pass-form.component';
import { PassListComponent } from './layouts/pages/pass-list/pass-list.component';
import { PassViewComponent } from './layouts/pages/pass-view/pass-view.component';
import { BottomBarComponent } from './layouts/components/bottom-bar/bottom-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
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
    EditCarComponent,
    PassViewComponent,
    CarViewComponent,
    BottomBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



