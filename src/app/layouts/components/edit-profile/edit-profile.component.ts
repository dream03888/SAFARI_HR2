import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  isWarningAlertVisible: boolean = false;
  isSuccessAlertVisible: boolean = false;
  isAnimating: boolean = false;
  alertMessage :string = ''

  @Output() cancel = new EventEmitter<void>();
  onCancel() {
    this.cancel.emit();
  }

  onAppClick(): void {
    const firstName = (
      document.getElementById('first-name') as HTMLInputElement
    ).value;
    const lastName = (
      document.getElementById('last-name') as HTMLInputElement
    ).value;
    const phone = (
      document.getElementById('phone') as HTMLInputElement
    ).value;
    const email = (
      document.getElementById('e-mail') as HTMLInputElement
    ).value;

    if (firstName !== '' && lastName !== '' && phone !== '' && email !== '') {
        this.alertMessage = 'Saved successfully';
        // this.alertMessage = 'บันทึกสำเร็จ';
        this.isSuccessAlertVisible = true;
        this.isAnimating = false;
        console.log('บันทึก');
        
    } else {
      this.alertMessage = 'Enter all information';
      // this.alertMessage = 'กรุณาใส่ข้อมูลให้ครบ';
      this.isWarningAlertVisible = true;
      this.isAnimating = false;
      console.log('dadasdas');
      
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
    }, 300);
  }
}


