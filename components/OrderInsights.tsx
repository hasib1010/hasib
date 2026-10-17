import CountUp from "@/components/CountUp";
import { mentions, orderStats, sampleSize } from "@/data/insights";

// "The pattern in recent orders": numbers and recurring praise computed from
// the Fiverr reviews themselves, so nothing here is a self-reported claim.
export default function OrderInsights() {
  const top = mentions[0]?.count ?? 1;

  return (
    <section className="insights" id="proof" aria-labelledby="insights-title">
      <div className="container">
        <header className="section-head">
          <h2 id="insights-title">The pattern in {sampleSize} recent orders</h2>
          <p>
            Counted straight from the Fiverr reviews above, not written by me.
            This is what buyers keep bringing up without being asked.
          </p>
        </header>

        <div className="insights__grid">
          <dl className="insights__stats">
            {orderStats.map((stat) => (
              <div key={stat.label} data-glow>
                <dt>{stat.label}</dt>
                <dd>
                  <CountUp value={stat.value} />
                  <span>{stat.unit}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="insights__mentions">
            <h3>What clients mention most</h3>
            <ul>
              {mentions.map((m) => (
                <li key={m.label}>
                  <span className="insights__label">{m.label}</span>
                  <span className="insights__bar" aria-hidden="true">
                    <i style={{ width: `${(m.count / top) * 100}%` }} />
                  </span>
                  <span className="insights__count">
                    {m.count} of {sampleSize}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
