import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuActive = false;

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

}
