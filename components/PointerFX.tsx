"use client";

import { useEffect } from "react";

// Pointer-driven polish, applied by data attributes so components stay plain:
//   [data-glow]  gets --gx/--gy, the pointer position inside it, for a soft light
//   [data-tilt]  gets --rx/--ry, a few degrees of tilt toward the pointer
// Only runs for mouse-like pointers; tilt is skipped when motion is reduced.
export default function PointerFX() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const allowTilt = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let last: PointerEvent | null = null;
    let tilted: HTMLElement | null = null;

    const apply = () => {
      frame = 0;
      if (!last) return;
      const target = last.target as Element | null;

      const glow = target?.closest<HTMLElement>("[data-glow]");
      if (glow) {
        const r = glow.getBoundingClientRect();
        glow.style.setProperty("--gx", `${last.clientX - r.left}px`);
        glow.style.setProperty("--gy", `${last.clientY - r.top}px`);
      }

      const tilt = allowTilt ? target?.closest<HTMLElement>("[data-tilt]") : null;
      if (tilted && tilted !== tilt) reset(tilted);
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = (last.clientX - r.left) / r.width - 0.5;
        const y = (last.clientY - r.top) / r.height - 0.5;
        tilt.style.setProperty("--ry", `${(x * 6).toFixed(2)}deg`);
        tilt.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
        tilted = tilt;
      }
    };

    const reset = (el: HTMLElement) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      tilted = null;
    };

    const onMove = (event: PointerEvent) => {
      last = event;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      if (tilted) reset(tilted);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
