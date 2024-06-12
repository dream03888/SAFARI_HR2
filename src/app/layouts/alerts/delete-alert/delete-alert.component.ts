import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.scss']
})
export class DeleteAlertComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();    
  }

  options: AnimationOptions = {
    path: 'assets/icon/delete.json',
    loop: false,
  };
}
