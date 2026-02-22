import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SidebarService } from './sidebar.service';

const MOBILE_BREAKPOINT = 768;

@Component({
  selector: 'salas-sidebar-provider',
  standalone: true,
  imports: [],
  providers: [SidebarService],
  template: `<div class="salas-sidebar-provider"><ng-content></ng-content></div>`,
  styles: [`
    :host {
      display: block;
      height: 100%;
      min-height: 100vh;
      overflow: visible;
    }
    .salas-sidebar-provider {
      display: flex;
      flex-direction: row;
      min-height: 100vh;
      height: 100%;
      width: 100%;
      position: relative;
      overflow: visible;
    }
  `],
})
export class SalasSidebarProviderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() defaultOpen = true;
  @Input() open?: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  private mediaQuery?: MediaQueryList;
  private listener = () => this.updateMobile();

  constructor(
    public sidebar: SidebarService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['open'] && !changes['open'].firstChange && this.open !== undefined) {
      this.sidebar.setOpen(this.open);
    }
  }

  ngOnInit(): void {
    this.sidebar.init(this.defaultOpen, this.open, (open) => this.openChange.emit(open));
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined' && window.matchMedia) {
      this.mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      this.sidebar.isMobile = this.mediaQuery.matches;
      this.mediaQuery.addEventListener('change', this.listener);
    }
  }

  ngOnDestroy(): void {
    this.mediaQuery?.removeEventListener('change', this.listener);
  }

  private updateMobile(): void {
    this.sidebar.isMobile = this.mediaQuery?.matches ?? false;
  }
}
