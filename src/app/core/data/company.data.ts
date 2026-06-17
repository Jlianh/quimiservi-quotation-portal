import { Benefit, CompanyInfo, NavLink } from '../models/company.model';

export const COMPANY: CompanyInfo = {
  name: 'Quimiservi',
  tagline: 'Mantenimiento Industrial e Institucional',
  phone: '+57 311 558 8584',
  phoneHref: 'tel:+573115588584',
  email: 'info@quimiservi.com',
  address: 'Bogotá, Colombia',
  yearsOfExperience: 25,
};

export const NAV_LINKS: readonly NavLink[] = [
  { path: '/', label: 'Inicio' },
  { path: '/productos', label: 'Productos' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/cotizacion', label: 'Cotización' },
];

/**
 * "¿Por qué elegirnos?" cards. `icon` is a semantic key (not a framework type),
 * mapped to a Lucide icon in the Home component — keeps this data layer free of
 * any UI-library dependency.
 */
export const BENEFITS: readonly Benefit[] = [
  {
    icon: 'quality',
    title: 'Calidad garantizada',
    description: 'Productos certificados INVIMA, formulados bajo estrictos controles.',
  },
  {
    icon: 'performance',
    title: 'Alto rendimiento',
    description: 'Fórmulas concentradas que rinden más por carga de lavado.',
  },
  {
    icon: 'savings',
    title: 'Ahorro de costos',
    description: 'Mayor eficiencia por litro, menor consumo en cada proceso.',
  },
  {
    icon: 'support',
    title: 'Soporte técnico',
    description: 'Asesoría especializada para cada aplicación industrial.',
  },
];

/**
 * Rendered brand icon lockups (horizontal, navy-on-white) used in the home
 * "trust ribbon". These four share a consistent format.
 */
export const TRUST_BADGES: readonly { icon: string; alt: string }[] = [
  { icon: 'icons/soluciones-profesionales.png', alt: 'Soluciones profesionales' },
  { icon: 'icons/calidad-garantizada.png', alt: 'Calidad garantizada' },
  { icon: 'icons/alto-rendimiento.png', alt: 'Alto rendimiento' },
  { icon: 'icons/soporte-tecnico.png', alt: 'Soporte técnico' },
];
