import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideAngularModule, Minus, Plus } from 'lucide-angular';

/**
 * Reusable +/- quantity control. Purely presentational: it renders the current
 * value and emits the requested new value, leaving state to the parent (Single
 * Responsibility / reusable across the detail page and the quote cart).
 */
@Component({
  selector: 'app-quantity-stepper',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quantity-stepper.html',
})
export class QuantityStepper {
  readonly value = input.required<number>();
  readonly min = input(1);
  readonly size = input(40);
  readonly valueChange = output<number>();

  protected readonly Minus = Minus;
  protected readonly Plus = Plus;

  protected change(next: number): void {
    this.valueChange.emit(Math.max(this.min(), next));
  }
}
