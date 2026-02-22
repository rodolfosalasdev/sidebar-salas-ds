import { Component, Input } from '@angular/core';
import { cn } from '../utils';

@Component({
  selector: 'salas-sidebar-menu-button',
  standalone: true,
  imports: [],
  template: `
    @if (href) {
      <a
        [class]="buttonClasses"
        [href]="href"
        [attr.aria-current]="isActive ? 'page' : null"
        [attr.title]="tooltipLabel"
      >
        <ng-content></ng-content>
      </a>
    } @else {
      <button
        type="button"
        [class]="buttonClasses"
        [attr.aria-current]="isActive ? 'page' : null"
        [attr.title]="tooltipLabel"
      >
        <ng-content></ng-content>
      </button>
    }
  `,
  styles: [`
    :host {
      display: block;
    }

    .salas-sidebar-menu-button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      color: var(--salas-text);
      text-decoration: none;
      transition: background-color 0.2s, color 0.2s, padding 0.2s, gap 0.2s;
      cursor: pointer;
      border: none;
      background: none;
      font-family: inherit;
      overflow: hidden;
    }

    .salas-sidebar-menu-button:hover {
      background-color: var(--salas-gray-100);
      color: var(--salas-text);
    }

    .salas-sidebar-menu-button--active {
      background-color: var(--salas-primary-600);
      color: #fff;
      font-weight: 500;
    }
  `],
})
export class SalasSidebarMenuButtonComponent {
  @Input() isActive = false;
  @Input() href?: string;
  @Input() tooltipLabel?: string;

  get buttonClasses(): string {
    return cn(
      'salas-sidebar-menu-button',
      this.isActive && 'salas-sidebar-menu-button--active'
    );
  }
}
