import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SalasSidebarComponent } from '../components/ui/sidebar/sidebar.component';
import { SalasSidebarProviderComponent } from '../components/ui/sidebar/sidebar-provider.component';
import { SalasSidebarHeaderComponent } from '../components/ui/sidebar/sidebar-header.component';
import { SalasSidebarContentComponent } from '../components/ui/sidebar/sidebar-content.component';
import { SalasSidebarFooterComponent } from '../components/ui/sidebar/sidebar-footer.component';
import { SalasSidebarGroupLabelComponent } from '../components/ui/sidebar/sidebar-group-label.component';
import { SalasSidebarInsetComponent } from '../components/ui/sidebar/sidebar-inset.component';
import { SalasSidebarTriggerComponent } from '../components/ui/sidebar/sidebar-trigger.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    SalasSidebarComponent,
    SalasSidebarProviderComponent,
    SalasSidebarHeaderComponent,
    SalasSidebarContentComponent,
    SalasSidebarFooterComponent,
    SalasSidebarGroupLabelComponent,
    SalasSidebarInsetComponent,
    SalasSidebarTriggerComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}