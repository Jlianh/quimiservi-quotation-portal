import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LucideAngularModule, Search } from 'lucide-angular';
import { ProductService } from '../../../core/services/product.service';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { ProductCategory } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [LucideAngularModule, ProductCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list.html',
})
export class ProductList {
  private readonly productService = inject(ProductService);

  protected readonly products = toSignal(this.productService.list(), { initialValue: [] });
  protected readonly categories = toSignal(this.productService.categories(), {
    initialValue: ['Todos'] as const,
  });

  protected readonly category = signal<ProductCategory | 'Todos'>('Todos');
  protected readonly term = signal('');

  protected readonly filtered = computed(() =>
    this.productService.filter(this.products(), {
      category: this.category(),
      term: this.term(),
    }),
  );

  protected readonly Search = Search;

  protected onSearch(event: Event): void {
    this.term.set((event.target as HTMLInputElement).value);
  }
}
