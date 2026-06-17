import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  readonly id: number;
  readonly type: ToastType;
  readonly title: string;
  readonly description?: string;
}

/**
 * Minimal, dependency-free toast notifications (replaces `sonner` from the
 * React build). Toasts auto-dismiss; the `ToastContainer` component renders
 * whatever is in `toasts`.
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 0;
  private readonly _toasts = signal<Toast[]>([]);
  readonly toasts = this._toasts.asReadonly();

  success(title: string, description?: string): void {
    this.show('success', title, description);
  }

  error(title: string, description?: string): void {
    this.show('error', title, description);
  }

  info(title: string, description?: string): void {
    this.show('info', title, description);
  }

  dismiss(id: number): void {
    this._toasts.update((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  private show(type: ToastType, title: string, description?: string): void {
    const id = this.nextId++;
    this._toasts.update((toasts) => [...toasts, { id, type, title, description }]);
    setTimeout(() => this.dismiss(id), 4500);
  }
}
