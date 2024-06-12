import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-match-alert',
  templateUrl: './match-alert.component.html',
  styleUrls: ['./match-alert.component.scss']
})
export class MatchAlertComponent {
@Input() message: string = '';

}
