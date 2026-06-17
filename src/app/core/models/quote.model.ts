/** A product + presentation the user wants quoted, with a desired quantity. */
export interface QuoteItem {
  readonly productId: string;
  readonly name: string;
  readonly brand: string;
  readonly image: string;
  readonly presentation: string;
  readonly quantity: number;
  readonly accentColor: string;
}

/** Contact details captured on the quotation form. */
export interface QuoteContact {
  readonly name: string;
  readonly company: string;
  readonly email: string;
  readonly phone: string;
  readonly city: string;
  readonly notes: string;
}

/** A complete quotation request handed to the submission gateway. */
export interface QuoteRequest {
  readonly contact: QuoteContact;
  readonly items: readonly QuoteItem[];
  readonly createdAt: string;
}

export interface QuoteSubmissionResult {
  readonly ok: boolean;
  /** Human-friendly reference the user can quote back to the sales team. */
  readonly reference: string;
}
