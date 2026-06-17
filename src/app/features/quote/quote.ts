import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule, ArrowRight, ShoppingCart, Trash2 } from 'lucide-angular';
import { QuoteStore } from '../../core/services/quote-store';
import { QuoteGateway } from '../../core/gateways/quote.gateway';
import { ToastService } from '../../core/services/toast.service';
import { QuantityStepper } from '../../shared/components/quantity-stepper/quantity-stepper';
import { QuoteRequest } from '../../core/models/quote.model';

@Component({
  selector: 'app-quote',
  imports: [RouterLink, ReactiveFormsModule, LucideAngularModule, QuantityStepper],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quote.html',
})
export class Quote {
  private readonly fb = inject(FormBuilder);
  private readonly quote = inject(QuoteStore);
  private readonly gateway = inject(QuoteGateway);
  private readonly toast = inject(ToastService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly items = this.quote.items;
  protected readonly count = this.quote.count;
  protected readonly isEmpty = this.quote.isEmpty;
  protected readonly submitting = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    city: [''],
    notes: [''],
  });

  protected readonly fields = [
    { key: 'name', label: 'Nombre completo *', type: 'text' },
    { key: 'company', label: 'Empresa', type: 'text' },
    { key: 'email', label: 'Correo electrónico *', type: 'email' },
    { key: 'phone', label: 'Teléfono', type: 'tel' },
    { key: 'city', label: 'Ciudad', type: 'text' },
  ] as const;

  protected readonly ArrowRight = ArrowRight;
  protected readonly ShoppingCart = ShoppingCart;
  protected readonly Trash2 = Trash2;

  protected remove(productId: string, presentation: string): void {
    this.quote.remove(productId, presentation);
  }

  protected updateQuantity(productId: string, presentation: string, quantity: number): void {
    this.quote.updateQuantity(productId, presentation, quantity);
  }

  protected clear(): void {
    this.quote.clear();
  }

  protected submit(): void {
    if (this.isEmpty()) {
      this.toast.error('Tu cotización está vacía', 'Agrega productos antes de enviar.');
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.error('Faltan datos', 'Completa al menos nombre y correo.');
      return;
    }

    const request: QuoteRequest = {
      contact: this.form.getRawValue(),
      items: this.quote.items(),
      createdAt: new Date().toISOString(),
    };

    this.submitting.set(true);
    this.gateway
      .submit(request)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        this.submitting.set(false);
        if (result.ok) {
          this.toast.success(
            'Solicitud enviada',
            `Referencia ${result.reference}. Te contactaremos pronto.`,
          );
          this.quote.clear();
          this.form.reset();
        }
      });
  }
}
