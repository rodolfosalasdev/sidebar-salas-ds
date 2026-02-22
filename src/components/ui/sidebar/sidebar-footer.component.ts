import { Component } from '@angular/core';

@Component({
  selector: 'salas-sidebar-footer',
  standalone: true,
  imports: [],
  template: `<footer class="salas-sidebar-footer"><ng-content></ng-content></footer>`,
  styles: [`
    .salas-sidebar-footer {
      flex-shrink: 0;
      padding: 1rem 1.25rem;
      border-top: 1px solid var(--salas-gray-200);
      color: var(--salas-text);
      overflow: hidden;
      white-space: nowrap;
      transition: padding 0.2s ease, height 0.2s ease, opacity 0.2s ease;
    }
  `],
})
export class SalasSidebarFooterComponent {}
