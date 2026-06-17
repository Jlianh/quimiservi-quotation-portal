import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductRepository } from '../repositories/product.repository';
import { Product, ProductCategory } from '../models/product.model';

/** Criteria for narrowing the catalogue. */
export interface ProductQuery {
  readonly category: ProductCategory | 'Todos';
  readonly term: string;
}

/**
 * Application-facing facade for product data.
 *
 * Components depend on this service, not on the repository, so UI code stays
 * free of data-source details. Pure query/derivation logic lives here (Single
 * Responsibility) and is trivially unit-testable.
 */
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly repository = inject(ProductRepository);

  list(): Observable<readonly Product[]> {
    return this.repository.list();
  }

  getById(id: string): Observable<Product | undefined> {
    return this.repository.getById(id);
  }

  /** Distinct categories present in the catalogue, prefixed with "Todos". */
  categories(): Observable<readonly (ProductCategory | 'Todos')[]> {
    return this.repository.list().pipe(
      map((products) => {
        const unique = [...new Set(products.map((product) => product.category))];
        return ['Todos', ...unique] as const;
      }),
    );
  }

  /** Pure filter used by the catalogue page; safe to call on any product list. */
  filter(products: readonly Product[], query: ProductQuery): readonly Product[] {
    const term = query.term.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = query.category === 'Todos' || product.category === query.category;
      const matchesTerm =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term) ||
        product.tagline.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  }
}
