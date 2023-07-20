import { Component, Input } from '@angular/core';

interface PortalCard {
  avatar: string;
  text: string;
  placholder: string;
  route: string;
}

@Component({
  selector: 'app-portal-card',
  templateUrl: './portal-card.component.html',
  styleUrls: ['./portal-card.component.scss'],
})
export class PortalCardComponent {
  @Input() portal: PortalCard | undefined;
}
