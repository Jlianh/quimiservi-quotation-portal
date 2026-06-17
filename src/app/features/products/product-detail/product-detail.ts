import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs/operators';
import {
  LucideAngularModule,
  ArrowLeft,
  BadgeCheck,
  Beaker,
  Check,
  ShoppingCart,
  Truck,
} from 'lucide-angular';
import { ProductService } from '../../../core/services/product.service';
import { QuoteStore } from '../../../core/services/quote-store';
import { ToastService } from '../../../core/services/toast.service';
import { QuantityStepper } from '../../../shared/components/quantity-stepper/quantity-stepper';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, LucideAngularModule, QuantityStepper],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  private readonly quote = inject(QuoteStore);
  private readonly toast = inject(ToastService);

  protected readonly product = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id') ?? ''),
      switchMap((id) => this.productService.getById(id)),
    ),
    { initialValue: undefined },
  );

  /** Explicit user choice; falls back to the first presentation until set. */
  protected readonly selectedPresentation = signal<string | null>(null);
  protected readonly presentation = computed(
    () => this.selectedPresentation() ?? this.product()?.presentations[0] ?? '',
  );
  protected readonly quantity = signal(1);

  protected readonly badges = [
    { icon: BadgeCheck, label: 'Certificado INVIMA' },
    { icon: Truck, label: 'Envío 24–48 h' },
    { icon: Beaker, label: 'Soporte técnico' },
  ];

  protected readonly ArrowLeft = ArrowLeft;
  protected readonly Check = Check;
  protected readonly ShoppingCart = ShoppingCart;

  protected addToQuote(): void {
    const item = this.product();
    if (!item) return;

    this.quote.add({
      productId: item.id,
      name: item.name,
      brand: item.brand,
      image: item.image,
      presentation: this.presentation(),
      quantity: this.quantity(),
      accentColor: item.accentColor,
    });

    this.toast.success(
      'Agregado a tu cotización',
      `${item.brand} · ${this.presentation()} × ${this.quantity()}`,
    );
  }
}
