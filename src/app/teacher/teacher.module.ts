import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { SharedModule } from 'src/components/shared.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { NavComponent } from './layout/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JourneyComponent } from './journey/journey.component';
import { StudentsComponent } from './students/students.component';
import { SkillsComponent } from './skills/skills.component';
import { SurveyComponent } from './survey/survey.component';
import { CompareComponent } from './compare/compare.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [TeacherComponent, SidenavComponent, NavComponent, DashboardComponent, JourneyComponent, StudentsComponent, SkillsComponent, SurveyComponent, CompareComponent, CalendarComponent],
  imports: [CommonModule, TeacherRoutingModule, SharedModule],
})
export class TeacherModule {}
