import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Droplet, Mail, MapPin, Phone } from 'lucide-angular';
import { COMPANY } from '../../core/data/company.data';
import { BrandWordmark } from '../../shared/components/brand-wordmark/brand-wordmark';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, LucideAngularModule, BrandWordmark],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly company = COMPANY;
  protected readonly year = new Date().getFullYear();

  protected readonly Droplet = Droplet;
  protected readonly Mail = Mail;
  protected readonly MapPin = MapPin;
  protected readonly Phone = Phone;
}
