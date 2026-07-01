import {
  afterNextRender,
  computed,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Animates the host element's text from 0 up to a target number the first time
 * it scrolls into view (easeOutCubic). Honors `prefers-reduced-motion` by
 * jumping straight to the final value.
 *
 * Usage: <p [countUp]="25" prefix="+"></p>
 */
@Directive({
  selector: '[countUp]',
  host: { '[textContent]': 'display()' },
})
export class CountUp {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly target = input.required<number>({ alias: 'countUp' });
  readonly prefix = input('');
  readonly suffix = input('');
  readonly durationMs = input(1300);

  private readonly current = signal(0);
  protected readonly display = computed(() => `${this.prefix()}${this.current()}${this.suffix()}`);

  private readonly reduced =
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor() {
    afterNextRender(() => {
      if (this.reduced) {
        this.current.set(this.target());
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.animate();
              observer.disconnect();
            }
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(this.el.nativeElement);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  private animate(): void {
    const start = performance.now();
    const to = this.target();
    const duration = this.durationMs();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.current.set(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
