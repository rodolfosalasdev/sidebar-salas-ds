import { Component } from '@angular/core';

@Component({
  selector: 'salas-sidebar-group-content',
  standalone: true,
  imports: [],
  template: `<div class="salas-sidebar-group-content"><ng-content></ng-content></div>`,
  styles: [`
    .salas-sidebar-group-content {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }
  `],
})
export class SalasSidebarGroupContentComponent {}
