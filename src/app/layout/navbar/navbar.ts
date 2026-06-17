import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Droplet, Menu, X, ShoppingCart } from 'lucide-angular';
import { QuoteStore } from '../../core/services/quote-store';
import { COMPANY, NAV_LINKS } from '../../core/data/company.data';
import { BrandWordmark } from '../../shared/components/brand-wordmark/brand-wordmark';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, BrandWordmark],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
})
export class Navbar {
  private readonly quote = inject(QuoteStore);

  protected readonly company = COMPANY;
  protected readonly navLinks = NAV_LINKS;
  protected readonly count = this.quote.count;
  protected readonly open = signal(false);

  protected readonly Droplet = Droplet;
  protected readonly Menu = Menu;
  protected readonly X = X;
  protected readonly ShoppingCart = ShoppingCart;

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }
}
