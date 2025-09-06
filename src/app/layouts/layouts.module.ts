import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LocationModalComponent } from './pages/pass-form/location-modal/location-modal.component';
import { WorkModalComponent } from './components/work-modal/work-modal.component';
import { EmployeeComponent } from './pages/employee/employee.component';


@NgModule({
  declarations: [
   
  
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
