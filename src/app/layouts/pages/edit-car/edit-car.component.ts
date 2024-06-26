import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent {
  selectedLocation = '';
  selectedCar = '';
  selectedItems: string[] = [];
  isWarningAlertVisible: boolean = false;
  isSuccessAlertVisible: boolean = false;
  isAnimating: boolean = false;
  alertMessage: string = '';
  purpose: string = '';
  other: string = '';
  startMaileage: string = '';
  endMaileage: string = '';
  departureDate: string = '';
  departureTime: string = '';
  returnDate: string = '';
  returnTime: string = '';
  easyPass: string = '';

  handleSelectedItemsChange(selectedItems: string[]) {
    this.selectedItems = selectedItems;
  }

  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }

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

  onAppClick(): void {
    // const car = (document.getElementById('car') as HTMLInputElement).value;
    // const location = (document.getElementById('location') as HTMLInputElement).value;
    // const other = this.selectedLocation === '-1' ? (document.getElementById('other') as HTMLInputElement).value : '';
    // const purpose = (document.getElementById('purpose') as HTMLInputElement).value;
    // const startMaileage = (document.getElementById('st-maileage') as HTMLInputElement).value;
    // const endMaileage = (document.getElementById('end-maileage') as HTMLInputElement).value;
    // const departureDate = (document.getElementById('departure-date') as HTMLInputElement).value;
    // const departureTime = (document.getElementById('departure-time') as HTMLInputElement).value;
    // const returnDate = (document.getElementById('return-date') as HTMLInputElement).value;
    // const returnTime = (document.getElementById('return-time') as HTMLInputElement).value;
    // const easyPass = (document.getElementById('easy-pass') as HTMLInputElement).value;

    if(
      this.selectedCar !== '' &&
      this.purpose !== '' &&
      this.departureDate !== '' &&
      this.departureTime !== '' &&
      this.returnDate !== '' &&
      this.returnTime !== ''
    ){
      if(this.selectedLocation !== '' ){
        if(this.selectedLocation == '-1'){
          if (this.other !== ''){
            this.alertMessage = 'Saved successfully';
            this.isSuccessAlertVisible = true;
            this.isAnimating = false;
          }else{
            this.alertMessage = 'Enter all information';
            this.isWarningAlertVisible = true;
            this.isAnimating = false;
          }
        }else {
          this.alertMessage = 'Saved successfully';
          this.isSuccessAlertVisible = true;
          this.isAnimating = false;
        }
      }else{
        this.alertMessage = 'Enter all information';
        this.isWarningAlertVisible = true;
        this.isAnimating = false;
      }
    }else{
      this.alertMessage = 'Enter all information';
      this.isWarningAlertVisible = true;
      this.isAnimating = false;
    }
    

    // console.log('car:',car);
    // console.log('location:',location);
    // console.log('other:',other);
    // console.log('st:',startMaileage);
    // console.log('end:',endMaileage);
    // console.log('departureDate:',departureDate);
    // console.log('departureTime:',departureTime);
    // console.log('returnDate:',returnDate);
    // console.log('returnTime:',returnTime);
    // console.log('easyPass',easyPass)
    
    console.log('Passenger updated:', this.selectedItems);
  }

  closeWarningAlert(): void {
    this.isWarningAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }

  closeSuccessAlert(): void {
    this.isSuccessAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }
}
