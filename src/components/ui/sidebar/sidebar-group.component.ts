import { Component } from '@angular/core';

@Component({
  selector: 'salas-sidebar-group',
  standalone: true,
  imports: [],
  template: `<div class="salas-sidebar-group"><ng-content></ng-content></div>`,
  styles: [`
    .salas-sidebar-group {
      margin-bottom: 0.5rem;
    }
  `],
})
export class SalasSidebarGroupComponent {}
