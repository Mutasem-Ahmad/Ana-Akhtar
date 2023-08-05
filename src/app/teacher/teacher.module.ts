import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { SharedModule } from 'src/components/shared.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  declarations: [TeacherComponent, SidenavComponent, NavComponent],
  imports: [CommonModule, TeacherRoutingModule, SharedModule],
})
export class TeacherModule {}
