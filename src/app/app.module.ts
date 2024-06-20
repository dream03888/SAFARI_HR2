import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts/layouts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { HomeComponent } from './layouts/pages/home/home.component';
import { ProfileComponent } from './layouts/pages/profile/profile.component';
import { EditProfileComponent } from './layouts/components/edit-profile/edit-profile.component';
import { CarAlertComponent } from './layouts/alerts/car-alert/car-alert.component';
import { ChangePassComponent } from './layouts/components/change-pass/change-pass.component';
import { DeleteAlertComponent } from './layouts/alerts/delete-alert/delete-alert.component';
import { MultiSelectComponent } from './layouts/components/multi-select/multi-select.component';
import { PassAlertComponent } from './layouts/alerts/pass-alert/pass-alert.component';
import { CarFormComponent } from './layouts/pages/car-form/car-form.component';
import { CarListComponent } from './layouts/pages/car-list/car-list.component';
import { CarViewComponent } from './layouts/pages/car-view/car-view.component';
import { EditCarComponent } from './layouts/pages/edit-car/edit-car.component';
import { EditPassComponent } from './layouts/pages/edit-pass/edit-pass.component';
import { PassFormComponent } from './layouts/pages/pass-form/pass-form.component';
import { PassListComponent } from './layouts/pages/pass-list/pass-list.component';
import { PassViewComponent } from './layouts/pages/pass-view/pass-view.component';
import { BottomBarComponent } from './layouts/components/bottom-bar/bottom-bar.component';
import { WarningAlertComponent } from './layouts/alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './layouts/alerts/success-alert/success-alert.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SickLeaveDataComponent } from './layouts/pages/sick-leave-data/sick-leave-data.component';
import { PersonalLeaveDataComponent } from './layouts/pages/personal-leave-data/personal-leave-data.component';
import { VacationLeaveDataComponent } from './layouts/pages/vacation-leave-data/vacation-leave-data.component';

export function playerFactory() {
  return player;
}


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
    WarningAlertComponent,
    SuccessAlertComponent,
    SickLeaveDataComponent,
    PersonalLeaveDataComponent,
    VacationLeaveDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



