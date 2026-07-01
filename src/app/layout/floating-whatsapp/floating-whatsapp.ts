import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMPANY } from '../../core/data/company.data';

/** Persistent floating WhatsApp contact button, shown on every page. */
@Component({
  selector: 'app-floating-whatsapp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './floating-whatsapp.html',
})
export class FloatingWhatsapp {
  protected readonly company = COMPANY;
}
