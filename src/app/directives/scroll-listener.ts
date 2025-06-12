import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListener {
  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    console.log('Scroll event detected!', event);

    console.warn('nav: ', this.el.nativeElement.querySelector('nav'));

    const navbar = this.el.nativeElement.querySelector('nav');

    if (window.scrollY > 0) {
      navbar.classList.add('navbar--scroll');
    } else {
      navbar.classList.remove('navbar--scroll');
    }
  }
}
