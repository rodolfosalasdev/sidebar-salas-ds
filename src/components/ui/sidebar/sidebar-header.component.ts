import { Component } from '@angular/core';

@Component({
  selector: 'salas-sidebar-header',
  standalone: true,
  imports: [],
  template: `<header class="salas-sidebar-header"><ng-content></ng-content></header>`,
  styles: [`
    :host {
      display: block;
    }
    .salas-sidebar-header {
      flex-shrink: 0;
      padding: 1rem 1.25rem;
      border-bottom: 1px solid var(--salas-gray-200);
      color: var(--salas-text);
      overflow: hidden;
      white-space: nowrap;
      transition: padding 0.2s ease, height 0.2s ease, opacity 0.2s ease;
      font-weight: 600;
      font-size: 1rem;
    }
  `],
})
export class SalasSidebarHeaderComponent {}
