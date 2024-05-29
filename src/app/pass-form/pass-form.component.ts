import { Component } from '@angular/core';

@Component({
  selector: 'app-pass-form',
  templateUrl: './pass-form.component.html',
  styleUrls: ['./pass-form.component.scss']
})
export class PassFormComponent {
  // Array of options
  options = [
    { value: '1', label: 'รพ.พระนั่งเกล้า : PNK' },
    { value: '2', label: 'รพ.อุดรธานี : UDH' },
    { value: '3', label: 'รพ.สุโขทัย : SKTH' },
    { value: '5', label: 'รพ.พหลพลพยุหเสนา : PHOL' },
    { value: '6', label: 'รพ.กระบี่ : KRAB' },
    { value: '7', label: 'รพ.พระนารายณ์มหาราช : KING' },
    { value: '8', label: 'รพ.มะการักษ์ : MAKR' },
    { value: '9', label: 'รพ.พัทลุง : PTLO' },
    { value: '-1', label: 'อื่นๆ' },
  ];

  // Property to hold the selected option value
  selectedOption = '';
}
