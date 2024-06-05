import { Component } from '@angular/core';

@Component({
  selector: 'app-pass-list',
  templateUrl: './pass-list.component.html',
  styleUrls: ['./pass-list.component.scss']
})
export class PassListComponent {
  tableData = Array.from({ length: 10 }, (_, index) => ({
    no: index + 1,
    departureDate: '04/01/2016',
    departureTime: '9:00',
    returnDate: '03/01/2016',
    returnTime: '9:00',
    location: 'xxxx',
    // status: '1',
    status: '2',
    // status: '3',
    print: '',
    choice: ''
  }));

  isDeleteAlertVisible: boolean = false;
  isAnimating: boolean = false;

  onAppClick(choice: string, event: MouseEvent): void {
    if (choice === 'delete') {
      this.isDeleteAlertVisible = true;
      this.isAnimating = false;   
    }
  }

  closeDeleteAlert(): void {
    this.isDeleteAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300); 
  }
}
