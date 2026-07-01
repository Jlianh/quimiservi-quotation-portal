/** Static company information shown across the site. */
export interface CompanyInfo {
  readonly name: string;
  readonly tagline: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly email: string;
  readonly address: string;
  readonly yearsOfExperience: number;
  /** wa.me deep link for the floating WhatsApp button. */
  readonly whatsappHref: string;
}

/** A primary navigation entry. */
export interface NavLink {
  readonly path: string;
  readonly label: string;
}

/** A benefit/badge backed by one of the rendered brand icons. */
export interface Benefit {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}
