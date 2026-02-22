import { Injectable } from '@angular/core';

export type SidebarState = 'expanded' | 'collapsed';

@Injectable()
export class SidebarService {
  private _open = true;
  private _openMobile = false;
  private _isMobile = false;
  private _state: SidebarState = 'expanded';
  private _collapsible: 'offcanvas' | 'icon' | 'none' = 'icon';
  private _side: 'left' | 'right' = 'left';
  private onOpenChangeCallback: ((open: boolean) => void) | null = null;

  get open(): boolean {
    return this._open;
  }
  set open(value: boolean) {
    this._open = value;
    this.onOpenChangeCallback?.(value);
  }

  get openMobile(): boolean {
    return this._openMobile;
  }
  set openMobile(value: boolean) {
    this._openMobile = value;
  }

  get isMobile(): boolean {
    return this._isMobile;
  }
  set isMobile(value: boolean) {
    this._isMobile = value;
  }

  get state(): SidebarState {
    return this._state;
  }

  get collapsible(): 'offcanvas' | 'icon' | 'none' {
    return this._collapsible;
  }
  set collapsible(value: 'offcanvas' | 'icon' | 'none') {
    this._collapsible = value;
  }

  get side(): 'left' | 'right' {
    return this._side;
  }
  set side(value: 'left' | 'right') {
    this._side = value;
  }

  setOpen(value: boolean): void {
    this.open = value;
  }

  setOpenMobile(value: boolean): void {
    this._openMobile = value;
  }

  setState(state: SidebarState): void {
    this._state = state;
  }

  toggleSidebar(): void {
    if (this._isMobile) {
      this._openMobile = !this._openMobile;
    } else {
      if (this._collapsible === 'icon') {
        this._state = this._state === 'expanded' ? 'collapsed' : 'expanded';
      } else {
        this.open = !this.open;
      }
    }
  }

  setOpenChange(callback: (open: boolean) => void): void {
    this.onOpenChangeCallback = callback;
  }

  init(defaultOpen: boolean, open?: boolean, onOpenChange?: (open: boolean) => void): void {
    if (open !== undefined) {
      this._open = open;
    } else {
      this._open = defaultOpen;
    }
    if (onOpenChange) {
      this.onOpenChangeCallback = onOpenChange;
    }
  }
}
