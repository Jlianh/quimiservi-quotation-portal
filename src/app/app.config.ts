import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { ProductRepository } from './core/repositories/product.repository';
import { InMemoryProductRepository } from './core/data/in-memory-product.repository';
import { StoragePort } from './core/storage/storage.port';
import { LocalStorageAdapter } from './core/storage/local-storage.adapter';
import { QuoteGateway } from './core/gateways/quote.gateway';
import { DemoQuoteGateway } from './core/gateways/demo-quote.gateway';

/**
 * Composition root.
 *
 * Each abstraction (left) is bound to a concrete implementation (right). To move
 * the catalogue to a real backend, or to send quotations over HTTP, swap the
 * `useClass` here — no other file changes.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),

    { provide: ProductRepository, useClass: InMemoryProductRepository },
    { provide: StoragePort, useClass: LocalStorageAdapter },
    { provide: QuoteGateway, useClass: DemoQuoteGateway },
  ],
};
