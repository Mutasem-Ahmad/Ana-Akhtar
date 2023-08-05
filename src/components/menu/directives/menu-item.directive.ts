import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[menuItem]',
})
export class MenuItemDirective {
  protected _elementClass: string[] = [
    'px-4',
    'py-1',
    'border-b',
    'hover:bg-gray-200',
    'w-full',
    'flex',
    'justify-start',
    'mt-2',
  ];

  @Input('class')
  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }
  set(val: string) {
    this._elementClass = val.split(' ');
  }
}
