import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
})
export class LeaveFormComponent {
  isDayPeriodVisible: boolean = true;
  isHourPeriodVisible: boolean = false;
  isWarningAlertVisible: boolean = false;
  isSuccessAlertVisible: boolean = false;
  isAnimating: boolean = false;
  alertMessage: string = '';

  leaveType: string = '';
  leavePeriod: string = '';
  leaveStart: string = '';
  leaveEnd: string = '';
  leaveReason: string = '';
  dateLeave: string = '';
  timeStart: string = '';
  timeEnd: string = '';

  constructor(private location: Location) {}

  onLeavePeriodChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    this.isDayPeriodVisible = selectedValue === 'day';
    this.isHourPeriodVisible = selectedValue === 'hour';
  }

  goBack() {
    this.location.back();
  }

  onAppClick(): void {
    if(this.leavePeriod !== ''){
      if (this.leavePeriod == 'day') {
        if (
          this.leaveType !== '' &&
          this.leaveStart !== '' &&
          this.leaveEnd !== '' &&
          this.leaveReason !== ''
        ) {
          this.alertMessage = 'Saved successfully';
          this.isSuccessAlertVisible = true;
          this.isAnimating = false;
        } else {
          this.alertMessage = 'Enter all information';
          this.isWarningAlertVisible = true;
          this.isAnimating = false;
        }
      }
  
      if (this.leavePeriod == 'hour') {
        if (
          this.leaveType !== '' &&
          this.dateLeave !== '' &&
          this.timeStart !== '' &&
          this.timeEnd !== '' &&
          this.leaveReason !== ''
        ) {
          this.alertMessage = 'Saved successfully';
          this.isSuccessAlertVisible = true;
          this.isAnimating = false;
        } else {
          this.alertMessage = 'Enter all information';
          this.isWarningAlertVisible = true;
          this.isAnimating = false;
        }
      }
    }else{
      this.alertMessage = 'Enter all information';
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
    }, 300);
  }
}
