import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface App {
  type: string
  img: string;
  name: string;
  path: string;
}

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('300ms ease-out', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class BottomBarComponent implements OnInit {
  isSelectAppVisible: boolean = false;
  isCarAlertVisible: boolean = false;
  isPassAlertVisible: boolean = false;
  isAnimating: boolean = false;
  isAnimatingSelect: boolean = false;

  appsSelect: App[] = [
    { 
      type: "routing",
      img: 'assets/icon/user.svg', 
      name: 'Profile', 
      path: '/profile' 
    },
    { 
      type: "alert",
      img: 'assets/icon/portfolio.svg', 
      name: 'Employee Pass', 
      path: '' 
    },
    { 
      type: "alert",
      img: 'assets/icon/car.svg', 
      name: 'Car Request', 
      path: '' 
    },
    { 
      type: "link",
      img: 'assets/icon/customer-support.svg', 
      name: 'Service', 
      path: 'http://app.dms-isolutions.com:9600/helpdesk' 
    },
    { 
      type: "link",
      img: 'assets/icon/database.svg', 
      name: 'NAS', 
      path: 'https://dms-isolutions.sg3.quickconnect.to/?launchApp=SYNO.SDS.Drive.Application#/signin' 
    },
    { 
      type: "link",
      img: 'assets/icon/mail.svg', 
      name: 'Mail', 
      path: 'https://starter1.hosting.bangmod.cloud/roundcube/' 
    },
    { 
      type: "link",
      img: 'assets/icon/grocery-store.svg', 
      name: 'DMS Purchase', 
      path: 'http://app.dms-isolutions.com:8090/sign-in?id=' 
    },
    { 
      type: "link",
      img: 'assets/icon/grocery-store.svg', 
      name: 'AERO Purchase', 
      path: 'http://app.dms-isolutions.com:8060/aero/purchase/login' 
    },
    { 
      type: "link",
      img: 'assets/icon/github.svg', 
      name: 'Github', 
      path: 'https://github.com/orgs/DMS-Programmer-Team' 
    },
  ];

  appShow: App[] = [];

  ngOnInit() {
    this.loadAppShow();
  }

  toggleAppSelection(app: App) {
    const index = this.appShow.findIndex((item) => item.name === app.name);
    if (index === -1) {
      this.appShow.push(app);
    } else {
      this.appShow.splice(index, 1);
    }
    this.saveAppShow();
  }

  isSelected(app: App): boolean {
    return this.appShow.some((item) => item.name === app.name);
  }

  saveAppShow() {
    localStorage.setItem('appShow', JSON.stringify(this.appShow));
  }

  loadAppShow() {
    const data = localStorage.getItem('appShow');
    if (data) {
      this.appShow = JSON.parse(data);
    }
  }

  toggleAlert(): void {
    if (this.isSelectAppVisible) {
      this.closeDeleteAlert();
    } else {
      this.isSelectAppVisible = true;
      this.isAnimating = false;
    }
  }

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

  closeDeleteAlert(): void {
    this.isSelectAppVisible = false;
    this.isAnimatingSelect = true;
    setTimeout(() => {
      this.isAnimatingSelect = false;
    }, 300);
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
