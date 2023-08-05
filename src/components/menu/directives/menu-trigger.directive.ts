import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MenuComponent } from '../menu.component';

@Directive({
  selector: '[menuTrigger]',
})
export class MenuTriggerDirective {
  @Input('menuTrigger') menu: MenuComponent = new MenuComponent();

  constructor(private menuElement: ElementRef) {}

  @HostListener('click') toggleMenu() {
    if (this.menu) {
      this.menu.isOpen = !this.menu.isOpen;
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.menu.isOpen) return;
    const targetElement = event.target as HTMLElement;
    const isInsideMenu = this.menuElement.nativeElement.contains(targetElement);
    if (!isInsideMenu) {
      this.menu.closeMenu();
    }
  }
}
