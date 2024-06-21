import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent {
  isDayPeriodVisible: boolean = true;
  isHourPeriodVisible: boolean = false;
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
}
