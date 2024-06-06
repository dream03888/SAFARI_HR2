import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts/layouts.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// ----------------------------------------------------------------------------------------

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LayoutsModule } from './layout/layouts.module';


// import { NavbarComponent } from './layout/components/navbar/navbar.component';
// import { HomeComponent } from './layout/pages/home/home.component';
// import { ProfileComponent } from './layout/pages/profile/profile.component';
// import { EditProfileComponent } from './layout/components/edit-profile/edit-profile.component';
// import { CarAlertComponent } from './layout/components/car-alert/car-alert.component';
// import { PassAlertComponent } from './layout/components/pass-alert/pass-alert.component';
// import { PassFormComponent } from './layout/pages/pass-form/pass-form.component';
// import { CarFormComponent } from './layout/pages/car-form/car-form.component';
// import { PassListComponent } from './layout/pages/pass-list/pass-list.component';
// import { CarListComponent } from './layout/pages/car-list/car-list.component';
// import { MultiSelectComponent } from './layout/components/multi-select/multi-select.component';
// import { DeleteAlertComponent } from './layout/components/delete-alert/delete-alert.component';
// import { EditPassComponent } from './layout/pages/edit-pass/edit-pass.component';
// import { EditCarComponent } from './layout/pages/edit-car/edit-car.component';
// import { ChangePassComponent } from './layout/components/change-pass/change-pass.component';
// import { PassViewComponent } from './layout/pages/pass-view/pass-view.component';
// import { CarViewComponent } from './layout/pages/car-view/car-view.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     HomeComponent,
//     ProfileComponent,
//     EditProfileComponent,
//     ChangePassComponent,
//     CarAlertComponent,
//     PassAlertComponent,
//     PassFormComponent,
//     CarFormComponent,
//     PassListComponent,
//     CarListComponent,
//     MultiSelectComponent,
//     DeleteAlertComponent,
//     EditPassComponent,
//     EditCarComponent,
//     PassViewComponent,
//     CarViewComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     LayoutsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



