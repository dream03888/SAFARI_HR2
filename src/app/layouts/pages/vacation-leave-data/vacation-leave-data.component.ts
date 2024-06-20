import { Component } from '@angular/core';

@Component({
  selector: 'app-vacation-leave-data',
  templateUrl: './vacation-leave-data.component.html',
  styleUrls: ['./vacation-leave-data.component.scss']
})
export class VacationLeaveDataComponent {
  tableData = Array.from({ length: 9 }, (_, index) => ({
    dateTime: '03/01/2016 09:00 - 18.00',
    hours: '8',
    reason: 'Lorem ipsum dolor sit amet'
  }));
}
