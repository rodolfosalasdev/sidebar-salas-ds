import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { LucideAngularModule, Home, Search, Settings, PanelLeft, PanelRight } from 'lucide-angular';
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(LucideAngularModule.pick({ Home, Search, Settings, PanelLeft, PanelRight })),provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};
