import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LucideAngularModule, CheckCircle2, XCircle, Info, X } from 'lucide-angular';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast-container',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toast-container.html',
})
export class ToastContainer {
  private readonly service = inject(ToastService);
  protected readonly toasts = this.service.toasts;

  protected readonly X = X;

  protected iconFor(type: 'success' | 'error' | 'info') {
    return type === 'success' ? CheckCircle2 : type === 'error' ? XCircle : Info;
  }

  protected dismiss(id: number): void {
    this.service.dismiss(id);
  }
}
