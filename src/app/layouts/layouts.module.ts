import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LocationModalComponent } from './pages/pass-form/location-modal/location-modal.component';


@NgModule({
  declarations: [
    LocationModalComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
