import {
  afterNextRender,
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
  ShieldCheck,
  TrendingUp,
  Wallet,
  Headset,
} from 'lucide-angular';
import { ProductService } from '../../core/services/product.service';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { Reveal } from '../../shared/directives/reveal';
import { CountUp } from '../../shared/directives/count-up';
import { BENEFITS, COMPANY } from '../../core/data/company.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, LucideAngularModule, ProductCard, Reveal, CountUp],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  private readonly productService = inject(ProductService);

  private readonly productTrack =
    viewChild<ElementRef<HTMLDivElement>>('productTrack');

  private readonly heroVideo = viewChild<ElementRef<HTMLVideoElement>>('heroVideo');

  constructor() {
    // Angular renders `<video muted>` as an *attribute*, which only sets
    // `defaultMuted` — not the live `muted` property the autoplay policy checks.
    // Set the property explicitly so the background video autoplays in real
    // browsers (Chrome/Firefox/Safari block autoplay of non-muted video).
    afterNextRender(() => {
      const video = this.heroVideo()?.nativeElement;
      if (!video) return;
      video.muted = true;
      void video.play().catch(() => {
        /* ignore: some browsers reject programmatic play() until interaction */
      });
    });
  }

  protected readonly company = COMPANY;
  protected readonly benefits = BENEFITS;

  protected readonly products = toSignal(this.productService.list(), { initialValue: [] });

  protected readonly productCount = computed(() => this.products().length);

  /** Hero "lead" product shown in the large showcase card. */
  protected readonly featuredMain = computed(() =>
    this.products().find((product) => product.id === 'deterlav'),
  );
  /** Secondary product shown in the smaller showcase card. */
  protected readonly featuredSide = computed(() =>
    this.products().find((product) => product.id === 'desengrasante-industrial'),
  );

  /** Compact stats for the hero. */
  protected readonly heroStats = [
    { value: `+${COMPANY.yearsOfExperience}`, label: 'años' },
    { value: 'INVIMA', label: 'certificado' },
    { value: 'Cobertura', label: 'Nacional' },
  ];

  /** Expanded stats for the trust band lower on the page. */
  protected readonly bandStats = [
    { value: `+${COMPANY.yearsOfExperience}`, label: 'años' },
    { value: 'INVIMA', label: 'certificado' },
    { value: 'Cobertura', label: 'Nacional' },
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
