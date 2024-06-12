import { Component, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent {
  @Input() message: string = '';

  options: AnimationOptions = {
    path: 'assets/icon/success.json',
    loop: false,
  };
}
