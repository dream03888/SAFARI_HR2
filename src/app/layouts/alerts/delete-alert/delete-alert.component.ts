import { Component, EventEmitter, Output } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.scss']
})
export class DeleteAlertComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();    
  }

  onConfirm() {
    this.confirm.emit();
  }

  options: AnimationOptions = {
    path: 'assets/icon/delete.json',
    loop: false,
  };
}
