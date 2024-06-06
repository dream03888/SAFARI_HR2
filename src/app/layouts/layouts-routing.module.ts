import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CarFormComponent } from './pages/car-form/car-form.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarViewComponent } from './pages/car-view/car-view.component';
import { EditCarComponent } from './pages/edit-car/edit-car.component';
import { EditPassComponent } from './pages/edit-pass/edit-pass.component';
import { PassFormComponent } from './pages/pass-form/pass-form.component';
import { PassListComponent } from './pages/pass-list/pass-list.component';
import { PassViewComponent } from './pages/pass-view/pass-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'car-form',
    component: CarFormComponent,
  },
  {
    path: 'car-list',
    component: CarListComponent,
  },
  {
    path: 'car-view',
    component: CarViewComponent,
  },
  {
    path: 'edit-car',
    component: EditCarComponent,
  },
  {
    path: 'edit-pass',
    component: EditPassComponent,
  },
  {
    path: 'pass-form',
    component: PassFormComponent,
  },
  {
    path: 'pass-list',
    component: PassListComponent,
  },
  {
    path: 'pass-view',
    component: PassViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule { }
