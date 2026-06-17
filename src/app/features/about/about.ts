import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  ArrowRight,
  BadgeCheck,
  Globe,
  Handshake,
  Heart,
  LayoutGrid,
  Leaf,
  RefreshCw,
  ShieldCheck,
} from 'lucide-angular';
import { COMPANY } from '../../core/data/company.data';

@Component({
  selector: 'app-about',
  imports: [RouterLink, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
})
export class About {
  protected readonly company = COMPANY;

  protected readonly about = [
    { icon: LayoutGrid, title: '25+ años de experiencia', description: 'Empresa consolidada en el sector.' },
    { icon: Handshake, title: 'Alianzas estratégicas', description: 'Fabricantes, proveedores y maquiladores.' },
    { icon: Globe, title: 'Desarrollo nacional', description: 'Crecimiento responsable del país.' },
    { icon: Leaf, title: 'Compromiso ambiental', description: 'Respeto por el medio ambiente.' },
  ];

  protected readonly vision = [
    { icon: Heart, title: 'Mejor calidad', description: 'Ofrecer siempre la mejor calidad.' },
    { icon: LayoutGrid, title: 'Procesos innovadores', description: 'Implementar procesos responsables.' },
    { icon: ShieldCheck, title: 'Producción sostenible', description: 'Respeto al medio ambiente.' },
    { icon: RefreshCw, title: 'Excelencia continua', description: 'Monitoreo constante para la vanguardia.' },
  ];

  protected readonly ArrowRight = ArrowRight;
  protected readonly BadgeCheck = BadgeCheck;
}
