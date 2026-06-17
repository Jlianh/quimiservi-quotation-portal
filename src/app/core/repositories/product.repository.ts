import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

/**
 * Abstraction over the product data source (Dependency Inversion Principle).
 *
 * Components and services depend on this abstract class — never on a concrete
 * implementation. Today it is fulfilled by an in-memory repository; swapping in
 * an `HttpProductRepository` for an e-commerce backend requires changing only
 * the provider in `app.config.ts`.
 */
export abstract class ProductRepository {
  /** Stream of the full catalogue. */
  abstract list(): Observable<readonly Product[]>;

  /** Stream of a single product, or `undefined` when not found. */
  abstract getById(id: string): Observable<Product | undefined>;
}
