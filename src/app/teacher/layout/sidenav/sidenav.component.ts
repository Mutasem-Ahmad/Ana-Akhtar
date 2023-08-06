import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() open: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();

  links = [
    {
      route: './dashboard',
      title: 'Dashboard',
      icon: '',
    },
    {
      route: './journey',
      title: 'Journey',
      icon: '',
    },
    {
      route: './students',
      title: 'Students',
      icon: '',
    },
    {
      route: './skills',
      title: 'Skills',
      icon: '',
    },
    {
      route: './survey',
      title: 'Survey',
      icon: '',
    },
    {
      route: './compare',
      title: 'Compare',
      icon: '',
    },
    {
      route: './calendar',
      title: 'Calendar',
      icon: '',
    },
  ];
}
