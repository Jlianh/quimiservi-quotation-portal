import { Injectable } from '@angular/core';
import { StoragePort } from './storage.port';

/**
 * `localStorage`-backed implementation of {@link StoragePort}.
 *
 * Every access is guarded so the app degrades gracefully when storage is
 * unavailable (private mode, SSR, quota errors) instead of throwing.
 */
@Injectable()
export class LocalStorageAdapter extends StoragePort {
  private get available(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  read<T>(key: string): T | null {
    if (!this.available) return null;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  }

  write<T>(key: string, value: T): void {
    if (!this.available) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore quota / serialization errors */
    }
  }

  remove(key: string): void {
    if (!this.available) return;
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
  }
}
