import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  LucideAngularModule,
  ArrowRight,
  BadgeCheck,
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

  protected readonly company = COMPANY;
  protected readonly benefits = BENEFITS;
  protected readonly trustBadges = TRUST_BADGES;

  protected readonly products = toSignal(this.productService.list(), { initialValue: [] });

  protected readonly stats = [
    { value: '4', label: 'Productos' },
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
  protected readonly Leaf = Leaf;

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
