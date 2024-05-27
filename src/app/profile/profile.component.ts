import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isEditProfileVisible: boolean = false;
  isChangePassVisible: boolean = false;
  isAnimating_1: boolean = false;
  isAnimating_2: boolean = false;
  users = [
    { 
      title:  "Name:",
      info: "Julia Roberts",
    },{ 
      title: "ID:", 
      info: 'DMS.12345',
    },{ 
      title: "Position:", 
      info: 'Marketing',
    },
    { 
      title: "Phone:", 
      info: '081-234567',
    },
    { 
      title: "E-mail:", 
      info: 'Julia@dms-isolutions.com',
    },
  ];

  showEditProfile() {
    this.isEditProfileVisible = true;
    this.isAnimating_1 = false;
  }

  showChangePass() {
    this.isChangePassVisible = true;
    this.isAnimating_2 = false;
  }


  closeEditProfile() {
    this.isEditProfileVisible = false;
    this.isAnimating_1 = true;
    setTimeout(() => {
      this.isAnimating_1 = false;
    },300); 
    
  }

  closeChangePass() {
    this.isChangePassVisible = false;
    this.isAnimating_2 = true;
    setTimeout(() => {
      this.isAnimating_2 = false;
    },300); 
    
  }
}
