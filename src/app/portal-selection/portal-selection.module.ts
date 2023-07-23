import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalSelectionRoutingModule } from './portal-selection-routing.module';
import { PortalSelectionComponent } from './portal-selection.component';
import { PortalCardComponent } from './portal-card/portal-card.component';
import { LoginComponent } from './login/login.component';
import { PlatformSelectionComponent } from './platform-selection/platform-selection.component';
import { SharedModule } from 'src/components/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PortalSelectionComponent,
    PortalCardComponent,
    LoginComponent,
    PlatformSelectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortalSelectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PortalSelectionModule {}
