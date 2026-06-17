import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { Product } from '../../../core/models/product.model';

/** Presentational catalogue card linking to the product detail page. */
@Component({
  selector: 'app-product-card',
  imports: [RouterLink, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.html',
})
export class ProductCard {
  readonly product = input.required<Product>();
  protected readonly ArrowRight = ArrowRight;
}
