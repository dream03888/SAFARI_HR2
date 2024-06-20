import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-leave-data',
  templateUrl: './personal-leave-data.component.html',
  styleUrls: ['./personal-leave-data.component.scss']
})
export class PersonalLeaveDataComponent {

  tableData = Array.from({ length: 9 }, (_, index) => ({
    dateTime: '03/01/2016 09:00 - 18.00',
    hours: '8',
    reason: 'Lorem ipsum dolor sit amet'
  }));
  
}
