import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  LucideAngularModule,
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Leaf,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Headset,
} from 'lucide-angular';
import { ProductService } from '../../core/services/product.service';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { BENEFITS, COMPANY, TRUST_BADGES } from '../../core/data/company.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, LucideAngularModule, ProductCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  private readonly productService = inject(ProductService);

  private readonly productTrack =
    viewChild<ElementRef<HTMLDivElement>>('productTrack');

  protected readonly company = COMPANY;
  protected readonly benefits = BENEFITS;
  protected readonly trustBadges = TRUST_BADGES;

  protected readonly products = toSignal(this.productService.list(), { initialValue: [] });

  /** First four products used for the hero 2×2 montage. */
  protected readonly featured = computed(() => this.products().slice(0, 4));

  protected readonly stats = [
    { value: '12', label: 'Productos' },
    { value: `${COMPANY.yearsOfExperience}+`, label: 'Años' },
    { value: 'INVIMA', label: 'Certificado' },
  ];

  protected readonly values = [
    'Mejor calidad',
    'Procesos innovadores',
    'Producción sostenible',
    'Excelencia continua',
  ];

  protected readonly ArrowRight = ArrowRight;
  protected readonly BadgeCheck = BadgeCheck;
  protected readonly ChevronLeft = ChevronLeft;
  protected readonly ChevronRight = ChevronRight;
  protected readonly Leaf = Leaf;

  /** Scrolls the featured-products carousel by ~one viewport in `dir` direction. */
  protected scrollProducts(dir: 1 | -1): void {
    const el = this.productTrack()?.nativeElement;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  }

  private readonly benefitIcons = {
    quality: ShieldCheck,
    performance: TrendingUp,
    savings: Wallet,
    support: Headset,
  } as const;

  protected iconFor(key: string) {
    return this.benefitIcons[key as keyof typeof this.benefitIcons] ?? ShieldCheck;
  }
}
