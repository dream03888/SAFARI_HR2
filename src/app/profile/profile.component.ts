import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  users = [
    { 
      title:  "Name:",
      info: "Proflie",
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
}
