import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  appIn = [
    { 
      img:  "assets/user.png",
      name: "Proflie",
      path: ""
    },{ 
      img: "assets/portfolio.png", 
      name: 'Employee Pass',
      path: ""
    },{ 
      img: "assets/car.png", 
      name: 'Car Request',
      path: ""
    },{ 
      img: "assets/customer-support.png", 
      name: 'Service',
      path: ""
    },{ 
      img: "assets/customer-support.png", 
      name: 'Service',
      path: ""
    },{ 
      img: "assets/customer-support.png", 
      name: 'Service',
      path: ""
    },
  ];
  appOut = [
    {
      img:  "assets/database.png",
      name: "NAS",
      path: ""
    },{ 
      img: "assets/mail.png", 
      name: 'Mail',
      path: ""
    },{ 
      img: "assets/grocery-store.png", 
      name: 'DMS Purchase',
      path: ""
    },{ 
      img: "assets/grocery-store.png", 
      name: 'AERO Purchase',
      path: ""
    },{ 
      img: "assets/github.png", 
      name: 'Github',
      path: ""
    },
  ]
}
