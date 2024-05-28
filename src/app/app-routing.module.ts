import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PassFormComponent } from './pass-form/pass-form.component';
import { CarFormComponent } from './car-form/car-form.component';
import { PassListComponent } from './pass-list/pass-list.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'pass-form',component:PassFormComponent},
  {path:'car-form',component:CarFormComponent},
  {path:'pass-list',component:PassListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
