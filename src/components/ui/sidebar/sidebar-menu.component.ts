import { Component } from '@angular/core';

@Component({
  selector: 'salas-sidebar-menu',
  standalone: true,
  imports: [],
  template: `<ul class="salas-sidebar-menu" role="menu"><ng-content></ng-content></ul>`,
  styles: [`
    .salas-sidebar-menu {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
      width: 100%;
    }
  `],
})
export class SalasSidebarMenuComponent {}
