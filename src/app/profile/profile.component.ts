import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isEditProfileVisible: boolean = false;
  isChangePassVisible: boolean = false;
  isAnimating: boolean = false;
  users = [
    { 
      title:  "Name:",
      info: "Julia Roberts",
    },{ 
      title: "ID:", 
      info: 'DMS.12345',
    },{ 
      title: "Position:", 
      info: 'Programmer',
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

  showEditProfile(event: MouseEvent) {
    this.isEditProfileVisible = true;
    this.isAnimating = false;
    event.stopPropagation();
  }

  showChangePass(event: MouseEvent) {
    this.isChangePassVisible = true;
    this.isAnimating = false;
    event.stopPropagation();
  }


  closeEditProfile() {
    this.isEditProfileVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    },25); 
  }

  closeChangePass() {
    this.isChangePassVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    },25); 
  }
}
