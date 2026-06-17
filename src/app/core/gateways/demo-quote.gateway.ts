import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { QuoteGateway } from './quote.gateway';
import { QuoteRequest, QuoteSubmissionResult } from '../models/quote.model';

/**
 * Demo {@link QuoteGateway}: logs the request and returns a fake reference
 * after a short delay to mimic a network round-trip. Replace with an HTTP-based
 * gateway to wire the form to the real sales inbox.
 */
@Injectable()
export class DemoQuoteGateway extends QuoteGateway {
  submit(request: QuoteRequest): Observable<QuoteSubmissionResult> {
    const reference = `QS-${Date.now().toString(36).toUpperCase()}`;
    console.info('[DemoQuoteGateway] Quotation submitted', { reference, request });
    return of<QuoteSubmissionResult>({ ok: true, reference }).pipe(delay(700));
  }
}
