import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-pass',
  templateUrl: './edit-pass.component.html',
  styleUrls: ['./edit-pass.component.scss']
})
export class EditPassComponent {
  selectedLocation = '';
  isChecked = false;
  
  // Array of options
  locatoions = [
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

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
