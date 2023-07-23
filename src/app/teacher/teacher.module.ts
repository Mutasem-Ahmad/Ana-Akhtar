import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { SharedModule } from 'src/components/shared.module';

@NgModule({
  declarations: [TeacherComponent],
  imports: [CommonModule, TeacherRoutingModule, SharedModule],
})
export class TeacherModule {}
