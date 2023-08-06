import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CompareComponent } from './compare/compare.component';
import { SurveyComponent } from './survey/survey.component';
import { StudentsComponent } from './students/students.component';
import { SkillsComponent } from './skills/skills.component';
import { JourneyComponent } from './journey/journey.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'journey',
        component: JourneyComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'survey',
        component: SurveyComponent,
      },
      {
        path: 'compare',
        component: CompareComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
