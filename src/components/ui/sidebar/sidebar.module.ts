import { NgModule } from '@angular/core';
import { SalasSidebarProviderComponent } from './sidebar-provider.component';
import { SalasSidebarComponent } from './sidebar.component';
import { SalasSidebarHeaderComponent } from './sidebar-header.component';
import { SalasSidebarFooterComponent } from './sidebar-footer.component';
import { SalasSidebarContentComponent } from './sidebar-content.component';
import { SalasSidebarGroupComponent } from './sidebar-group.component';
import { SalasSidebarGroupLabelComponent } from './sidebar-group-label.component';
import { SalasSidebarGroupContentComponent } from './sidebar-group-content.component';
import { SalasSidebarTriggerComponent } from './sidebar-trigger.component';
import { SalasSidebarMenuComponent } from './sidebar-menu.component';
import { SalasSidebarMenuItemComponent } from './sidebar-menu-item.component';
import { SalasSidebarMenuButtonComponent } from './sidebar-menu-button.component';
import { SalasSidebarInsetComponent } from './sidebar-inset.component';

@NgModule({
  imports: [
    SalasSidebarProviderComponent,
    SalasSidebarComponent,
    SalasSidebarHeaderComponent,
    SalasSidebarFooterComponent,
    SalasSidebarContentComponent,
    SalasSidebarGroupComponent,
    SalasSidebarGroupLabelComponent,
    SalasSidebarGroupContentComponent,
    SalasSidebarTriggerComponent,
    SalasSidebarMenuComponent,
    SalasSidebarMenuItemComponent,
    SalasSidebarMenuButtonComponent,
    SalasSidebarInsetComponent,
  ],
  exports: [
    SalasSidebarProviderComponent,
    SalasSidebarComponent,
    SalasSidebarHeaderComponent,
    SalasSidebarFooterComponent,
    SalasSidebarContentComponent,
    SalasSidebarGroupComponent,
    SalasSidebarGroupLabelComponent,
    SalasSidebarGroupContentComponent,
    SalasSidebarTriggerComponent,
    SalasSidebarMenuComponent,
    SalasSidebarMenuItemComponent,
    SalasSidebarMenuButtonComponent,
    SalasSidebarInsetComponent,
  ],
})
export class SalasSidebarModule {}
