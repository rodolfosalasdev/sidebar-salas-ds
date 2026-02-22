import { Component, Input, Optional } from '@angular/core';
import { SidebarService } from './sidebar.service';

/**
 * Sidebar component types (shadcn-style)
 */

export type SidebarSide = 'left' | 'right';
export type SidebarVariant = 'sidebar' | 'floating' | 'inset';
export type SidebarCollapsible = 'offcanvas' | 'icon' | 'none';

export interface SidebarProps {
  side?: SidebarSide;
  variant?: SidebarVariant;
  collapsible?: SidebarCollapsible;
}

export interface SidebarProviderProps {
  defaultOpen?: boolean;
  open?: boolean;
}


const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_ICON = '3rem';

@Component({
  selector: 'salas-sidebar-inset',
  standalone: true,
  imports: [],
  template: `<main class="salas-sidebar-inset" [class.salas-sidebar-inset--side-right]="effectiveSide === 'right'" [style.margin-left]="marginLeft" [style.margin-right]="marginRight"><ng-content></ng-content></main>`,
  styles: [`
    .salas-sidebar-inset {
      flex: 1;
      min-width: 0;
      min-height: 100vh;
      padding: 1rem;
      background-color: var(--salas-bg);
      color: var(--salas-text);
      transition: margin 0.2s ease, align-items 0.2s ease, text-align 0.2s ease;
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .salas-sidebar-inset--side-right {
      align-items: flex-end;
      text-align: right;
    }
  `],
})
export class SalasSidebarInsetComponent {
  @Input() side?: SidebarSide;

  constructor(@Optional() public sidebar: SidebarService | null) {}

  get effectiveSide(): SidebarSide {
    return this.side ?? this.sidebar?.side ?? 'left';
  }

  get marginLeft(): string | null {
    if (this.effectiveSide !== 'left') return null;
    if (this.sidebar?.isMobile && this.sidebar.collapsible === 'offcanvas') {
      return '0';
    }
    if (this.sidebar?.collapsible === 'offcanvas' && !this.sidebar.open) return '0';
    if (this.sidebar?.collapsible === 'icon' && this.sidebar.state === 'collapsed') {
      return SIDEBAR_WIDTH_ICON;
    }
    return SIDEBAR_WIDTH;
  }

  get marginRight(): string | null {
    if (this.effectiveSide !== 'right') return null;
    if (this.sidebar?.isMobile && this.sidebar.collapsible === 'offcanvas') {
      return '0';
    }
    if (this.sidebar?.collapsible === 'offcanvas' && !this.sidebar.open) return '0';
    if (this.sidebar?.collapsible === 'icon' && this.sidebar.state === 'collapsed') {
      return SIDEBAR_WIDTH_ICON;
    }
    return SIDEBAR_WIDTH;
  }
}
