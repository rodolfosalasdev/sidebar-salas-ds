import { Component } from '@angular/core';

@Component({
  selector: 'salas-sidebar-group-label',
  standalone: true,
  imports: [],
  template: `<div class="salas-sidebar-group-label"><ng-content></ng-content></div>`,
  styles: [`
    .salas-sidebar-group-label {
      padding: 0.5rem 0.75rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--salas-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: padding 0.2s ease, height 0.2s ease, opacity 0.2s ease;
    }
  `],
})
export class SalasSidebarGroupLabelComponent {}
