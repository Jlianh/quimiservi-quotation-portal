import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Scroll-reveal: fades + slides the host element in when it first enters the
 * viewport. Dependency-free (IntersectionObserver), reveals only once, and
 * fully respects `prefers-reduced-motion` (reduced users see content instantly,
 * no transform).
 *
 * Usage:
 *   <div appReveal>…</div>           reveal with no delay
 *   <div [appReveal]="120">…</div>   reveal staggered by 120 ms
 */
@Directive({
  selector: '[appReveal]',
  host: {
    '[style.transition]':
      'reduced ? "" : "opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1)"',
    '[style.transition-delay.ms]': 'delay()',
    '[style.opacity]': 'shown() ? "1" : "0"',
    '[style.transform]': 'shown() ? "none" : "translateY(20px)"',
  },
})
export class Reveal {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  /** Stagger delay in milliseconds. */
  readonly delay = input(0, {
    alias: 'appReveal',
    transform: (value: number | string) => Number(value) || 0,
  });

  protected readonly reduced =
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /** Whether the element is in its revealed (visible) state. */
  protected readonly shown = signal(this.reduced);

  constructor() {
    if (this.reduced) return;
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.shown.set(true);
              observer.disconnect();
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(this.el.nativeElement);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
