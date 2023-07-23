import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalSelectionComponent } from './portal-selection.component';
import { LoginComponent } from './login/login.component';
import { PlatformSelectionComponent } from './platform-selection/platform-selection.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'portal',
  },
  {
    path: 'portal',
    component: PortalSelectionComponent,
    children: [
      {
        path: '',
        component: PlatformSelectionComponent,
      },
      {
        path: 'login/:id',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'portal/teacher',
    loadChildren: () =>
      import('../teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'portal/student',
    loadChildren: () =>
      import('../student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'portal/parent',
    loadChildren: () =>
      import('../guardian/guardian.module').then((m) => m.GuardianModule),
  },
  // {
  //   path: '**',
  //   redirectTo: '/portal',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalSelectionRoutingModule {}
