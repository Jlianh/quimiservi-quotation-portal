import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * "QUIMISERVI" wordmark set in Ethnocentric (Typodermic Fonts).
 *
 * The glyphs are baked to SVG outline paths — the .otf is NOT shipped to the
 * browser. This keeps us within Ethnocentric's free desktop license, which
 * permits using the font for a "logo" / "web page (not embedded)" but forbids
 * webfont embedding. Regenerate the path with `scripts/build-wordmark` if the
 * text ever changes. Colour follows `currentColor`.
 */
@Component({
  selector: 'app-brand-wordmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brand-wordmark.html',
})
export class BrandWordmark {
  /** Rendered height in px; width scales to keep aspect ratio. */
  readonly height = input(18);
}
