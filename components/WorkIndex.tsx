"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import BrowserFrame from "@/components/BrowserFrame";

export interface WorkItem {
  id: string;
  client: string;
  category: string;
  image: string;
  group: string;
  stage: string;
  fullPage?: string;
}

export default function WorkIndex({ items }: { items: WorkItem[] }) {
  const groups = useMemo(() => {
    const counts = new Map<string, number>();
    items.forEach((item) => counts.set(item.group, (counts.get(item.group) ?? 0) + 1));
    return [["All", items.length] as const, ...counts.entries()];
  }, [items]);
  const [active, setActive] = useState("All");
  const shown = active === "All" ? items : items.filter((item) => item.group === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {groups.map(([name, count]) => (
          <button
            key={name}
            type="button"
            aria-pressed={active === name}
            onClick={() => setActive(name)}
          >
            {name}
            <span>{count}</span>
          </button>
        ))}
      </div>

      <ul className="tiles">
        {shown.map((item, index) => (
          <li key={item.id}>
            <Link href={`/case-studies/${item.id}`} className="tile">
              <div
                className="stage stage--sm"
                style={{ "--stage": item.stage } as React.CSSProperties}
              >
                <BrowserFrame
                  src={item.image}
                  alt=""
                  fullPage={item.fullPage}
                  priority={index < 3}
                  sizes="(max-width: 600px) 92vw, (max-width: 960px) 46vw, 400px"
                />
              </div>
              <span className="tile__kind">{item.category}</span>
              <strong>{item.client}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
