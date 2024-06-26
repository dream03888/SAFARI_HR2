import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pass-form',
  templateUrl: './pass-form.component.html',
  styleUrls: ['./pass-form.component.scss']
})
export class PassFormComponent {
  selectedLocation = '';
  selectedCar = '';
  isChecked = false;
  isWarningAlertVisible: boolean = false;
  isSuccessAlertVisible: boolean = false;
  isAnimating: boolean = false;
  alertMessage: string = '';
  departureDate: string = '';
  departureTime: string = '';
  returnDate: string = '';
  returnTime: string ='';
  purpose: string ='';
  other: string ='';
  
  
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }

  // Array of options
  locations = [
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
  
  

  onAppClick(): void {    
    if (
      this.departureDate !== '' && 
      this.departureTime !== '' &&
      this.returnDate !== '' && 
      this.returnTime !== '' &&
      this.purpose !== '' ) {
        if (this.selectedLocation !== ''){
          if (this.selectedLocation =='-1'){
            if (this.other !==''){
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
        }
        else{
          this.alertMessage = 'Enter all information';
          this.isWarningAlertVisible = true;
          this.isAnimating = false;
        }
    } else{
      this.alertMessage = 'Enter all information';
      this.isWarningAlertVisible = true;
      this.isAnimating = false;
    }
    
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
