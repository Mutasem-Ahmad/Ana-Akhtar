import { Component } from '@angular/core';

@Component({
  selector: '[platform-selection]',
  templateUrl: './platform-selection.component.html',
  styleUrls: ['./platform-selection.component.scss'],
})
export class PlatformSelectionComponent {
  portals = [
    {
      avatar:
        'https://www.gravatar.com/avatar/EMAIL_MD5?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/Teacher+Platform/64',
      text: 'Teacher Platform',
      placholder: 'School teacher can access their account',
      route: './login/teacher',
    },
    {
      avatar:
        'https://www.gravatar.com/avatar/EMAIL_MD5?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/Student+Platform/64',
      text: 'Student Platform',
      placholder: 'Student can access their account',
      route: './login/student',
    },
    {
      avatar:
        'https://www.gravatar.com/avatar/EMAIL_MD5?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/Parent+Platform/64',
      text: 'Parent Platform',
      placholder: 'Parent teacher can access their account',
      route: './login/parent',
    },
  ];
}
