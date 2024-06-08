import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface App {
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
  isAnimating: boolean = false;

  appsSelect: App[] = [
    { 
      img: 'assets/icon/user.svg', 
      name: 'Profile', 
      path: '/profile' 
    },
    { 
      img: 'assets/icon/portfolio.svg', 
      name: 'Employee Pass', 
      path: '' 
    },
    { 
      img: 'assets/icon/car.svg', 
      name: 'Car Request', 
      path: '' 
    },
    { 
      img: 'assets/icon/customer-support.svg', 
      name: 'Service', 
      path: '' 
    },
    { 
      img: 'assets/icon/database.svg', 
      name: 'NAS', 
      path: '' 
    },
    { 
      img: 'assets/icon/mail.svg', 
      name: 'Mail', 
      path: '' 
    },
    { 
      img: 'assets/icon/grocery-store.svg', 
      name: 'DMS Purchase', 
      path: '' 
    },
    { 
      img: 'assets/icon/grocery-store.svg', 
      name: 'AERO Purchase', 
      path: '' 
    },
    { 
      img: 'assets/icon/github.svg', 
      name: 'Github', 
      path: '' 
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

  closeDeleteAlert(): void {
    this.isSelectAppVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }
}
