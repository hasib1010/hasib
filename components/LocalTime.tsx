"use client";

import { useEffect, useState } from "react";

const ZONE = "Asia/Dhaka";
const DHAKA_OFFSET_MIN = 6 * 60;

// My current time in Dhaka, plus how far ahead or behind the visitor is.
// Renders nothing on the server so the time is never stale or mismatched.
export default function LocalTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = window.setTimeout(tick, 0);
    const timer = window.setInterval(tick, 30_000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(timer);
    };
  }, []);

  if (!now) return null;

  const time = now.toLocaleTimeString("en-US", {
    timeZone: ZONE,
    hour: "numeric",
    minute: "2-digit",
  });
  const visitorOffset = -now.getTimezoneOffset();
  const diff = (DHAKA_OFFSET_MIN - visitorOffset) / 60;
  const hours = Math.abs(diff);
  const gap =
    diff === 0
      ? "Same time zone as you"
      : `${hours} hour${hours === 1 ? "" : "s"} ${diff > 0 ? "ahead of" : "behind"} you`;

  return (
    <p className="local-time">
      <span className="local-time__clock" aria-hidden="true" />
      <span>
        <strong>{time}</strong> in Dhaka now, {gap.charAt(0).toLowerCase() + gap.slice(1)}
      </span>
    </p>
  );
}
