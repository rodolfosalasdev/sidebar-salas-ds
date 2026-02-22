import { Component, Input, Optional, OnInit, ViewEncapsulation } from '@angular/core';
import { cn } from '../utils';
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


@Component({
  selector: 'salas-sidebar',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <aside
      [class]="sidebarClasses"
      [attr.data-side]="side"
      [attr.data-state]="effectiveState"
      [attr.data-collapsible]="collapsible"
      [attr.data-variant]="variant"
      [attr.data-mobile]="sidebar?.isMobile ?? false"
    >
      <ng-content></ng-content>
    </aside>
  `,
  styles: [`
    :host {
      display: block;
      flex-shrink: 0;
      width: 0;
      min-width: 0;
    }

    .salas-sidebar {
      --salas-sidebar-width: 16rem;
      --salas-sidebar-width-icon: 3rem;
      box-sizing: border-box;
      background-color: var(--salas-bg-elevated);
      color: var(--salas-text);
      border-right: 1px solid var(--salas-gray-200);
      display: flex;
      flex-direction: column;
      height: 100vh;
      min-height: 100vh;
      position: fixed;
      top: 0;
      z-index: 10;
      transition: width 0.2s ease, transform 0.2s ease, left 0.2s ease, right 0.2s ease;
      width: var(--salas-sidebar-width);
    }

    /* Layout dos filhos: header e content participam do flex */
    .salas-sidebar > salas-sidebar-header {
      flex-shrink: 0;
      display: block;
    }
    .salas-sidebar > salas-sidebar-content {
      flex: 1 1 0;
      min-height: 0;
      display: flex;
      overflow: hidden;
    }
    .salas-sidebar > salas-sidebar-content > .salas-sidebar-content {
      flex: 1;
      min-height: 0;
      display: block;
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
      padding: 0.5rem;
    }
    .salas-sidebar salas-sidebar-menu,
    .salas-sidebar .salas-sidebar-menu {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
      width: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .salas-sidebar salas-sidebar-menu-item,
    .salas-sidebar .salas-sidebar-menu-item {
      display: block;
      width: 100%;
    }

    /* Plain HTML menu (ul/li/a with classes) */
    .salas-sidebar .salas-sidebar-menu-button,
    .salas-sidebar salas-sidebar-menu-button {
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
      box-sizing: border-box;
    }
    .salas-sidebar .salas-sidebar-menu-button:hover,
    .salas-sidebar salas-sidebar-menu-button:hover {
      background-color: var(--salas-gray-100);
      color: var(--salas-text);
    }
    .salas-sidebar .salas-sidebar-menu-button--active,
    .salas-sidebar .salas-sidebar-menu-button[aria-current="page"],
    .salas-sidebar salas-sidebar-menu-button.salas-sidebar-menu-button--active {
      background-color: var(--salas-primary-600);
      color: #fff;
      font-weight: 500;
    }
    .salas-sidebar .salas-sidebar-menu-icon,
    .salas-sidebar .salas-sidebar-menu-button .salas-sidebar-menu-icon {
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .salas-sidebar[data-side="left"] {
      left: 0;
    }

    .salas-sidebar[data-side="right"] {
      right: 0;
      border-right: none;
      border-left: 1px solid var(--salas-gray-200);
    }

    .salas-sidebar[data-collapsible="offcanvas"][data-mobile="true"][data-state="collapsed"] {
      transform: translateX(-100%);
    }

    .salas-sidebar[data-side="right"][data-collapsible="offcanvas"][data-mobile="true"][data-state="collapsed"] {
      transform: translateX(100%);
    }

    .salas-sidebar[data-collapsible="offcanvas"][data-mobile="false"][data-state="collapsed"] {
      transform: translateX(-100%);
    }

    .salas-sidebar[data-side="right"][data-collapsible="offcanvas"][data-mobile="false"][data-state="collapsed"] {
      transform: translateX(100%);
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] {
      width: var(--salas-sidebar-width-icon);
      overflow: hidden;
    }

    .salas-sidebar[data-variant="floating"] {
      margin: 0.5rem;
      border-radius: 0.5rem;
      height: calc(100vh - 1rem);
      border: 1px solid var(--salas-gray-200);
    }

    .salas-sidebar[data-variant="inset"] {
      position: relative;
      height: 100%;
      border-radius: 0.5rem;
    }

    /* Collapsed state: hide everything except icons */
    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] salas-sidebar-header {
      display: none !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] salas-sidebar-footer {
      display: none !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] salas-sidebar-group-label {
      display: none !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] salas-sidebar-content {
      padding-inline: 3px !important;
      box-sizing: border-box !important;
    }
    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] .salas-sidebar-content {
      padding: 0.25rem 0 !important;
      box-sizing: border-box !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] .salas-sidebar-group {
      margin-bottom: 0 !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] .salas-sidebar-group-content {
      gap: 0.25rem !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] .salas-sidebar-menu {
      padding: 0 !important;
      align-items: center !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] salas-sidebar-menu-button {
      display: flex !important;
      justify-content: center !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] .salas-sidebar-menu-button {
      justify-content: center !important;
      padding: 0.5rem !important;
      gap: 0 !important;
      overflow: hidden !important;
      width: auto !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] .salas-sidebar-menu-button > *:not(.salas-sidebar-menu-icon) {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
    }

    .salas-sidebar[data-collapsible="icon"][data-state="collapsed"] .salas-sidebar-menu-icon {
      flex-shrink: 0 !important;
    }
  `],
})
export class SalasSidebarComponent implements SidebarProps, OnInit {
  @Input() side: SidebarSide = 'left';
  @Input() variant: SidebarVariant = 'sidebar';
  @Input() collapsible: SidebarCollapsible = 'icon';

  constructor(@Optional() public sidebar: SidebarService | null) {}

  ngOnInit(): void {
    if (this.sidebar) {
      this.sidebar.collapsible = this.collapsible;
      this.sidebar.side = this.side;
    }
  }

  get effectiveState(): string {
    if (!this.sidebar) return 'expanded';
    if (this.sidebar.isMobile) {
      return this.sidebar.openMobile ? 'expanded' : 'collapsed';
    }
    if (this.collapsible === 'offcanvas') {
      return this.sidebar.open ? 'expanded' : 'collapsed';
    }
    return this.sidebar.state;
  }

  get sidebarClasses(): string {
    return cn(
      'salas-sidebar',
      `salas-sidebar--${this.side}`,
      this.variant !== 'sidebar' && `salas-sidebar--${this.variant}`,
      `salas-sidebar--collapsible-${this.collapsible}`
    );
  }
}
