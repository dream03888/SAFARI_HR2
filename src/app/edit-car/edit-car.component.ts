import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent {
  selectedLocation = '';
  selectedCar = '';

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

  cars = [
    { value: '1', label: 'Toyota Hilux Revo 2022 (3ขภ 9363)' },
    { value: '2', label: 'Isuzu D-Max 2016 (1ฒฮ 9363)' },
    { value: '3', label: 'Toyota Fortuner 2022 (4ขฐ 9363)' },
    { value: '5', label: 'Toyota Hilux Revo 2020 (3ฒฌ 9363)' },
    { value: '6', label: 'Toyota Corolla Cross 2021 (3ขถ 9363)' },
    { value: '7', label: 'Toyota Yaris Cross 2024 (ข-0464)' },
    { value: '8', label: 'Toyota Hilux Revo 2024 (ก-5361)' },
  ];
}
