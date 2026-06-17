/**
 * Abstraction over key/value persistence.
 *
 * Keeps stores (e.g. the quotation cart) decoupled from `localStorage`, which
 * makes them testable and safe under server-side rendering. Implemented by
 * `LocalStorageAdapter`.
 */
export abstract class StoragePort {
  abstract read<T>(key: string): T | null;
  abstract write<T>(key: string, value: T): void;
  abstract remove(key: string): void;
}
