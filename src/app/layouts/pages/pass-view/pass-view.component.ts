import { Component } from '@angular/core';

@Component({
  selector: 'app-pass-view',
  templateUrl: './pass-view.component.html',
  styleUrls: ['./pass-view.component.scss']
})
export class PassViewComponent {
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
