import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isEditProfileVisible: boolean = false;
  isChangePassVisible: boolean = false;
  isAnimatingEdit: boolean = false;
  isAnimatingChange: boolean = false;
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
    this.isAnimatingEdit = false;
  }

  showChangePass() {
    this.isChangePassVisible = true;
    this.isAnimatingChange = false;
  }

  closeEditProfile() {
    this.isEditProfileVisible = false;
    this.isAnimatingEdit = true;
    setTimeout(() => {
      this.isAnimatingEdit = false;
    },300); 
  }

  closeChangePass() {
    this.isChangePassVisible = false;
    this.isAnimatingChange = true;
    setTimeout(() => {
      this.isAnimatingChange = false;
    },300); 
  }
}
