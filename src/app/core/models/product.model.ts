/**
 * Domain model for a Quimiservi product.
 *
 * The catalogue ships the real Quimiservi product line. The shape is
 * intentionally richer than the demo needs so the same model can back an
 * e-commerce variant later (pricing, stock, etc.) without breaking callers.
 */
export type ProductCategory =
  | 'Detergentes'
  | 'Blanqueadores'
  | 'Desengrasantes'
  | 'Suavizantes'
  | 'Desincrustantes'
  | 'Desinfectantes'
  | 'Cuidado de pisos'
  | 'Cuidado automotriz';

/** A single selling point shown on the product detail page. */
export interface ProductFeature {
  readonly title: string;
  readonly description: string;
}

export interface Product {
  /** URL slug, e.g. "oxi-whitex". */
  readonly id: string;
  /** Full commercial name. */
  readonly name: string;
  /** Brand / line name as printed on the label, e.g. "OXI-WHITEX". */
  readonly brand: string;
  readonly category: ProductCategory;
  /** One-line summary used on cards. */
  readonly tagline: string;
  readonly description: string;
  readonly uses: readonly string[];
  readonly presentations: readonly string[];
  readonly features: readonly ProductFeature[];
  /** Path to the clean product photo shown on cards/previews (served from /public). */
  readonly image: string;
  readonly imageAlt: string;
  /**
   * Optional wide marketing graphic shown on the product detail page. When
   * absent the detail page falls back to {@link image}.
   */
  readonly banner?: string;
  /** Per-line accent colour taken from the printed label. */
  readonly accentColor: string;
  readonly certifications: readonly string[];
}
