import { Component } from '@angular/core';

@Component({
  selector: 'salas-sidebar-menu-item',
  standalone: true,
  imports: [],
  template: `<li class="salas-sidebar-menu-item" role="none"><ng-content></ng-content></li>`,
  styles: [`
    .salas-sidebar-menu-item {
      display: block;
      width: 100%;
    }
  `],
})
export class SalasSidebarMenuItemComponent {}
