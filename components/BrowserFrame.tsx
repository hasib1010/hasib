import Image from "next/image";
import { shotRatios } from "@/data/shots";

const DEFAULT_RATIO = 1.6;
const MAX_RATIO = 2.1;

// A product screenshot presented in a minimal browser window, so pages with
// different crops and sizes read as one consistent body of work.
// `fit` widens the window for wide screenshots so their sides aren't cropped;
// grids leave it off to keep every tile the same height.
// `fullPage` is a full-length capture of the live site; hovering the
// surrounding .stage scrolls through it.
export default function BrowserFrame({
  src,
  alt,
  label,
  fit = false,
  fullPage,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 60vw",
}: {
  src: string;
  alt: string;
  label?: string;
  fit?: boolean;
  fullPage?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const natural = shotRatios[src] ?? DEFAULT_RATIO;
  const ratio =
    !fullPage && fit && natural > DEFAULT_RATIO ? Math.min(natural, MAX_RATIO) : DEFAULT_RATIO;

  return (
    <div className="browser">
      <div className="browser__bar" aria-hidden="true">
        <span className="browser__dots">
          <i />
          <i />
          <i />
        </span>
        {label ? <span className="browser__url">{label}</span> : null}
      </div>
      <div
        className={`browser__screen${fullPage ? " browser__screen--long" : ""}`}
        style={{ aspectRatio: ratio }}
      >
        {fullPage ? (
          // eslint-disable-next-line @next/next/no-img-element -- natural height is needed for the scroll
          <img className="browser__long" src={fullPage} alt={alt} loading={priority ? "eager" : "lazy"} />
        ) : (
          <Image src={src} alt={alt} fill priority={priority} unoptimized sizes={sizes} />
        )}
      </div>
    </div>
  );
}
