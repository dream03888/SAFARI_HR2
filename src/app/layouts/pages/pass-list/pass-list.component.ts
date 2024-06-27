import { Component } from '@angular/core';

@Component({
  selector: 'app-pass-list',
  templateUrl: './pass-list.component.html',
  styleUrls: ['./pass-list.component.scss']
})
export class PassListComponent {
  tableData = Array.from({ length: 5 }, (_, index) => ({
    no: index + 1,
    departureDate: '04/01/2016 09:00',
    returnDate: '03/01/2016 09:00',
    location: 'xxxx',
    status: '2'
  }));

  isDeleteAlertVisible: boolean = false;
  isAnimating: boolean = false;
  rowToDelete: any = null;

  onAppClick(choice: string, row: any): void {
    if (choice === 'delete') {
      this.isDeleteAlertVisible = true;
      this.isAnimating = false;   
      this.rowToDelete = row;
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
