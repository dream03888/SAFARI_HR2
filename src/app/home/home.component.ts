import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isCarAlertVisible: boolean = false;
  isAnimating: boolean = false;
  isPassAlertVisible: boolean = false;

  appIn = [
    { 
      img:  "assets/user.png",
      name: "Proflie",
      path: "/profile"
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
    }
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
  ];

  onAppClick(app: any, event: MouseEvent): void {
    if (app.name === 'Car Request') {
      this.isCarAlertVisible = true;
      this.isAnimating = false;   
    }

    if (app.name === 'Employee Pass') {
      this.isPassAlertVisible = true;
      this.isAnimating = false;
    }
  }

  closePassAlert(): void {
    this.isPassAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300); 
  }

  closeCarAlert(): void {
    this.isCarAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300); 
  }
}
