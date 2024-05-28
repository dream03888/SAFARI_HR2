import { Component, HostListener, ElementRef } from '@angular/core';

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

  constructor(private elementRef: ElementRef) {}

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.menuActive && !this.elementRef.nativeElement.querySelector('.hamberger').contains(event.target as Node) && 
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
}
