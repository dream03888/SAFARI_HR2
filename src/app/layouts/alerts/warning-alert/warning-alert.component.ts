import { Component, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent {
  @Input() message: string = '';

  options: AnimationOptions = {
    path: 'assets/icon/warning.json',
    loop: false,
  };
}
