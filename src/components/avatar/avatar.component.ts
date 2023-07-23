import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() src: string = '';
  @Input() rounded: boolean = true;
  @Input() indicator: boolean = false;
  @Input() indicatorColor: string = '';
  @Input() size: string = 'middle';
}
