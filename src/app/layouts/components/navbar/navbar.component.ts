import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd } from '@angular/router';
import { Component, HostListener, ElementRef } from '@angular/core';
import { WorkModalComponent } from '../work-modal/work-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuActive = false;
  isCarAlertVisible: boolean = false;
  isAnimating: boolean = false;
  isPassAlertVisible: boolean = false;

  constructor(private elementRef: ElementRef, 
    private router: Router,
    private modalSrv: NgbModal) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.menuActive = false;
      }
    });
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.menuActive && 
        !this.elementRef.nativeElement.querySelector('.hamberger').contains(event.target as Node) && 
        !this.elementRef.nativeElement.querySelector('.menu').contains(event.target as Node)) {
      this.menuActive = false;
    }
  }

  showCarAlert() {
    this.isCarAlertVisible = true;
    this.isAnimating = false;
  }

  showPassAlert() {
    this.isPassAlertVisible = true;
    this.isAnimating = false;
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

  workTime(){
    const modalRef = this.modalSrv.open(WorkModalComponent)
    // modalRef.componentInstance.itemData = data
    console.log("hi")
  }

}
