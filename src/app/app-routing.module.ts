import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PassFormComponent } from './pass-form/pass-form.component';
import { CarFormComponent } from './car-form/car-form.component';
import { PassListComponent } from './pass-list/pass-list.component';
import { CarListComponent } from './car-list/car-list.component';
import { EditPassComponent } from './edit-pass/edit-pass.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { PassViewComponent } from './pass-view/pass-view.component';
import { CarViewComponent } from './car-view/car-view.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'pass-form',component:PassFormComponent},
  {path:'car-form',component:CarFormComponent},
  {path:'pass-list',component:PassListComponent},
  {path:'car-list',component:CarListComponent},
  {path:'edit-pass' ,component:EditPassComponent},
  {path:'edit-car' ,component:EditCarComponent},
  {path:'pass-view' ,component:PassViewComponent},
  {path:'car-view' ,component:CarViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
