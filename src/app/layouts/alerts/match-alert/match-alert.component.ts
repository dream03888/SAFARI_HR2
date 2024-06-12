import { Component, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-match-alert',
  templateUrl: './match-alert.component.html',
  styleUrls: ['./match-alert.component.scss']
})
export class MatchAlertComponent {
@Input() message: string = '';

options: AnimationOptions = {
  path: 'assets/icon/warning.json',
  loop: false,
};
}
