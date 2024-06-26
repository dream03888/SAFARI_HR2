import { Component } from '@angular/core';

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
      title:  'Name:',
      info: "Julia Roberts",
    },{ 
      title: 'ID:', 
      info: 'DMS.12345',
    },{ 
      title: 'Position:', 
      info: 'Marketing',
    },
    { 
      title: 'Phone:', 
      info: '081-234567',
    },
    { 
      title: 'E-mail:', 
      info: 'Julia@dms-isolutions.com',
    },
  ];

  profilePicUrl: string = 'assets/avatar-profile/avatar.jpg';

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

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
