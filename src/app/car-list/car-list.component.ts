import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  tableData = Array.from({ length: 10 }, (_, index) => ({
    no: index + 1,
    departureDate: '04/01/2016',
    departureTime: '9:00',
    returnDate: '03/01/2016',
    returnTime: '9:00',
    car: 'Toyota Hilux Revo 2022 (3ขภ 9363)',
    location: 'xxxx',
    // status: '1',
    // status: '2',
    status: '3',
    print: '',
    choice: ''
  }));  
}
