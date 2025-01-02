import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LocationModalComponent } from './pages/pass-form/location-modal/location-modal.component';
import { WorkModalComponent } from './components/work-modal/work-modal.component';


@NgModule({
  declarations: [
    LocationModalComponent,
    WorkModalComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
