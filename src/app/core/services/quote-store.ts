import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { StoragePort } from '../storage/storage.port';
import { QuoteItem } from '../models/quote.model';

const STORAGE_KEY = 'quimiservi.quote.v1';

/**
 * Signal-based store for the quotation "cart".
 *
 * Single responsibility: hold and mutate the list of items the user wants
 * quoted, and mirror it to persistent storage. Persistence is delegated to
 * {@link StoragePort}, so this store knows nothing about `localStorage`.
 */
@Injectable({ providedIn: 'root' })
export class QuoteStore {
  private readonly storage = inject(StoragePort);

  private readonly _items = signal<QuoteItem[]>(
    this.storage.read<QuoteItem[]>(STORAGE_KEY) ?? [],
  );

  /** Read-only view of the current items. */
  readonly items = this._items.asReadonly();

  /** Total units across all items (used for the navbar badge). */
  readonly count = computed(() => this._items().reduce((sum, item) => sum + item.quantity, 0));

  readonly isEmpty = computed(() => this._items().length === 0);

  constructor() {
    // Keep storage in sync with state.
    effect(() => this.storage.write(STORAGE_KEY, this._items()));
  }

  /** Add an item, merging quantities when the same product+presentation exists. */
  add(item: QuoteItem): void {
    this._items.update((items) => {
      const index = items.findIndex(
        (existing) =>
          existing.productId === item.productId && existing.presentation === item.presentation,
      );
      if (index === -1) {
        return [...items, item];
      }
      const next = [...items];
      next[index] = { ...next[index], quantity: next[index].quantity + item.quantity };
      return next;
    });
  }

  remove(productId: string, presentation: string): void {
    this._items.update((items) =>
      items.filter(
        (item) => !(item.productId === productId && item.presentation === presentation),
      ),
    );
  }

  updateQuantity(productId: string, presentation: string, quantity: number): void {
    this._items.update((items) =>
      items.map((item) =>
        item.productId === productId && item.presentation === presentation
          ? { ...item, quantity: Math.max(1, quantity) }
          : item,
      ),
    );
  }

  clear(): void {
    this._items.set([]);
  }
}
