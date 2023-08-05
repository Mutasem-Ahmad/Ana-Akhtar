import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() isOpen: boolean = false;
  @Output() menuClosed: EventEmitter<void> = new EventEmitter<void>();

  closeMenu() {
    this.isOpen = false;
    this.menuClosed.emit();
  }
}
