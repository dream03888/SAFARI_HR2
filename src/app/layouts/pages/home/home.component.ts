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
      type: "routing",
      img:  "assets/icon/user.svg",
      name: "Proflie",
      path: "/profile",
    },{ 
      type: "alert",
      img: "assets/icon/portfolio.svg", 
      name: 'Employee Pass',
      path: "",
    },{ 
      type: "alert",
      img: "assets/icon/car.svg", 
      name: 'Car Request',
      path: ""
    },{ 
      type: "link", 
      img: "assets/icon/customer-support.svg", 
      name: 'Service',
      path: "http://app.dms-isolutions.com:9600/helpdesk"
    },
    { 
      type: "routing", 
      img: "assets/icon/leave.svg", 
      name: 'Leave',
      path: ""
    },
  ];

  appOut = [
    {
      type: "link", 
      img:  "assets/icon/database.svg",
      name: "NAS",
      path: "https://dms-isolutions.sg3.quickconnect.to/?launchApp=SYNO.SDS.Drive.Application#/signin"
    },{ 
      type: "link", 
      img: "assets/icon/mail.svg", 
      name: 'Mail',
      path: "https://starter1.hosting.bangmod.cloud/roundcube/"
    },{ 
      type: "link", 
      img: "assets/icon/grocery-store.svg", 
      name: 'DMS Purchase',
      path: "http://app.dms-isolutions.com:8090/sign-in?id="
    },{ 
      type: "link", 
      img: "assets/icon/grocery-store.svg", 
      name: 'AERO Purchase',
      path: "http://app.dms-isolutions.com:8060/aero/purchase/login"
    },{ 
      type: "link", 
      img: "assets/icon/github.svg", 
      name: 'Github',
      path: "https://github.com/orgs/DMS-Programmer-Team"
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
