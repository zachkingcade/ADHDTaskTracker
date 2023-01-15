import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean = false;
  @ViewChild('menuItems') menuItemsDiv!: ElementRef;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuItemsDiv.nativeElement.style.display = this.menuOpen? 'block' : 'none';
  }
}
