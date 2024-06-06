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
      img:  "assets/icon/user.svg",
      name: "Proflie",
      path: "/profile"
    },{ 
      img: "assets/icon/portfolio.svg", 
      name: 'Employee Pass',
      path: ""
    },{ 
      img: "assets/icon/car.svg", 
      name: 'Car Request',
      path: ""
    },{ 
      img: "assets/icon/customer-support.svg", 
      name: 'Service',
      path: ""
    }
  ];

  appOut = [
    {
      img:  "assets/icon/database.svg",
      name: "NAS",
      path: ""
    },{ 
      img: "assets/icon/mail.svg", 
      name: 'Mail',
      path: ""
    },{ 
      img: "assets/icon/grocery-store.svg", 
      name: 'DMS Purchase',
      path: ""
    },{ 
      img: "assets/icon/grocery-store.svg", 
      name: 'AERO Purchase',
      path: ""
    },{ 
      img: "assets/icon/github.svg", 
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
