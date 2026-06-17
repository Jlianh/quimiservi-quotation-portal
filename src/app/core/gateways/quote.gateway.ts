import { Observable } from 'rxjs';
import { QuoteRequest, QuoteSubmissionResult } from '../models/quote.model';

/**
 * Abstraction over "what happens when a quotation is submitted".
 *
 * The demo implementation simply logs and resolves; a real implementation would
 * POST to the Quimiservi sales backend or an email service. Callers depend only
 * on this contract (Open/Closed Principle).
 */
export abstract class QuoteGateway {
  abstract submit(request: QuoteRequest): Observable<QuoteSubmissionResult>;
}
