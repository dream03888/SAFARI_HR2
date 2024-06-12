import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss'],
})
export class ChangePassComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

  isMatchAlertVisible: boolean = false;
  isAnimating: boolean = false;

  onAppClick(): void {
    const newPassword = (
      document.getElementById('new-pass') as HTMLInputElement
    ).value;
    const confirmPassword = (
      document.getElementById('confirm-pass') as HTMLInputElement
    ).value;

    if (newPassword !== '' && confirmPassword !== '') {
      if (newPassword !== confirmPassword) {
        this.isMatchAlertVisible = true;
        this.isAnimating = false;
        return;
      } else {
        console.log('สำเร็จ');
      }
    } else {
      console.log('กรุณาใส่ password');
    }
  }

  closeMatchAlert(): void {
    this.isMatchAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }
}
