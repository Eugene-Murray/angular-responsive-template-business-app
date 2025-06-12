import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  protected isMobileMenuOpen = false;
  onToggleMobileMenu() {
    console.warn('toggle');
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
