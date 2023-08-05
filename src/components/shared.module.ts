import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { DrawerComponent } from './drawer/drawer.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { BadgeComponent } from './badge/badge.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MenuItemDirective } from './menu/directives/menu-item.directive';
import { MenuTriggerDirective } from './menu/directives/menu-trigger.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    DrawerComponent,
    CardComponent,
    TableComponent,
    TabsComponent,
    BadgeComponent,
    AvatarComponent,
    TimelineComponent,
    CalendarComponent,
    AccordionComponent,
    DropdownComponent,
    MenuComponent,
    MenuItemDirective,
    MenuTriggerDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    InputComponent,
    DrawerComponent,
    CardComponent,
    TableComponent,
    TabsComponent,
    BadgeComponent,
    AvatarComponent,
    TimelineComponent,
    CalendarComponent,
    AccordionComponent,
    DropdownComponent,
    MenuComponent,
    MenuItemDirective,
    MenuTriggerDirective,
  ],
})
export class SharedModule {}
