import { Component, Optional } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'salas-sidebar-trigger',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <button type="button" class="salas-sidebar-trigger" [class.salas-sidebar-trigger--right]="isRight" (click)="onClick()" aria-label="Toggle sidebar">
      @if (isRight) {
        <lucide-icon name="panel-right" [size]="20" />
      } @else {
        <lucide-icon name="panel-left" [size]="20" />
      }
    </button>
  `,
  styles: [`
    .salas-sidebar-trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.375rem;
      border: none;
      background-color: transparent;
      color: var(--salas-text);
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;
    }

    .salas-sidebar-trigger:hover {
      background-color: var(--salas-gray-100);
      color: var(--salas-text);
    }

    .salas-sidebar-trigger svg {
      display: block;
    }
  `],
})
export class SalasSidebarTriggerComponent {
  constructor(@Optional() private sidebar: SidebarService | null) {}

  get isRight(): boolean {
    return this.sidebar?.side === 'right';
  }

  onClick(): void {
    this.sidebar?.toggleSidebar();
  }
}
