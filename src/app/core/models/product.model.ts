/**
 * Domain model for a Quimiservi product.
 *
 * The catalogue currently ships four real products (laundry line). The shape is
 * intentionally richer than the demo needs so the same model can back an
 * e-commerce variant later (pricing, stock, etc.) without breaking callers.
 */
export type ProductCategory =
  | 'Detergentes'
  | 'Blanqueadores'
  | 'Desengrasantes'
  | 'Suavizantes';

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
  /** Path to the in-context product photo (served from /public). */
  readonly image: string;
  readonly imageAlt: string;
  /** Per-line accent colour taken from the printed label. */
  readonly accentColor: string;
  readonly certifications: readonly string[];
}
