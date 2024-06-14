import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss'],
})
export class ChangePassComponent {
  @Output() cancel = new EventEmitter<void>();
  isWarningAlertVisible: boolean = false;
  isSuccessAlertVisible: boolean = false;
  isAnimating: boolean = false;
  alertMessage: string = '';

  onCancel() {
    this.cancel.emit();
  }

  onAppClick(): void {
    const newPassword = (
      document.getElementById('new-pass') as HTMLInputElement
    ).value;
    const confirmPassword = (
      document.getElementById('confirm-pass') as HTMLInputElement
    ).value;

    if (newPassword !== '' && confirmPassword !== '') {
      if (newPassword !== confirmPassword) {
        this.alertMessage = 'Passwords do not match';
        this.isWarningAlertVisible = true;
        this.isAnimating = false;
      } else {
        this.alertMessage = 'Saved successfully';
        this.isSuccessAlertVisible = true;
        this.isAnimating = false;
      }
    } else {
      this.alertMessage = 'Enter both passwords';
      this.isWarningAlertVisible = true;
      this.isAnimating = false;
    }
  }

  closeWarningAlert(): void {
    this.isWarningAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }

  closeSuccessAlert(): void {
    this.isSuccessAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
      this.onCancel();
    }, 300);
  }
}
