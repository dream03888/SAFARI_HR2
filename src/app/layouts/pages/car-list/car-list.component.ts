import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  isDeleteAlertVisible: boolean = false;
  isAnimating: boolean = false;
  rowToDelete: any = null;

  tableData = Array.from({ length: 5 }, (_, index) => ({
    no: index + 1,
    departureDate: '03/01/2016 09:00',
    returnDate: '03/01/2016 09:00',
    car: 'Toyota Hilux Revo 2022 (3ขภ 9363)',
    location: 'xxxx',
    status: '3',
  }));

  onAppClick(choice: string, row: any): void {
    if (choice === 'delete') {
      this.rowToDelete = row;
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

  deleteRow(): void {
    this.tableData = this.tableData.filter(row => row !== this.rowToDelete);
    this.closeDeleteAlert();
  }
}
