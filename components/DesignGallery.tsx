"use client";
/* Pre-sized concept boards. Natural ratio matters more than the image optimizer. */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { DesignConcept } from "@/data/designs";

export default function DesignGallery({ items }: { items: readonly DesignConcept[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = items.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    }
  }, [active]);

  return (
    <>
      <ul className="design-grid">
        {items.map((item) => (
          <li key={item.id}>
            <button type="button" className="design-card" onClick={() => setActiveId(item.id)}>
              <img src={item.image} alt="" />
              <span className="design-card__meta">
                <span>{item.kind}</span>
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="design-dialog"
        aria-labelledby="design-dialog-title"
        onClose={() => setActiveId(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        {active ? (
          <figure>
            <button
              ref={closeRef}
              type="button"
              className="design-dialog__close"
              aria-label="Close design preview"
              onClick={() => dialogRef.current?.close()}
            >
              <X aria-hidden="true" />
            </button>
            <img src={active.image} alt={`${active.title} UI concept board`} />
            <figcaption>
              <span>{active.kind}</span>
              <strong id="design-dialog-title">{active.title}</strong>
              <p>{active.summary}</p>
            </figcaption>
          </figure>
        ) : null}
      </dialog>
    </>
  );
}
