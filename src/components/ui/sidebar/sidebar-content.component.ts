import { Component } from '@angular/core';

@Component({
  selector: 'salas-sidebar-content',
  standalone: true,
  imports: [],
  template: `<div class="salas-sidebar-content"><ng-content></ng-content></div>`,
  styles: [`
    :host {
      display: flex;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }
    .salas-sidebar-content {
      flex: 1;
      min-height: 120px;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0.5rem;
      color: var(--salas-text);
    }
  `],
})
export class SalasSidebarContentComponent {}
