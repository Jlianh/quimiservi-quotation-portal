import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductRepository } from '../repositories/product.repository';
import { Product } from '../models/product.model';
import { PRODUCTS } from './products.data';

/**
 * {@link ProductRepository} backed by the bundled static catalogue.
 *
 * Returns observables (rather than plain arrays) so the public contract is
 * identical to a future HTTP-backed repository — callers never change.
 */
@Injectable()
export class InMemoryProductRepository extends ProductRepository {
  list(): Observable<readonly Product[]> {
    return of(PRODUCTS);
  }

  getById(id: string): Observable<Product | undefined> {
    return of(PRODUCTS.find((product) => product.id === id));
  }
}
