import { ArrowUpRight, Star } from "lucide-react";
import PlatformIcon from "@/components/PlatformIcon";
import { fiverrGigUrl, fiverrReviews, fiverrSummary, type FiverrReview } from "@/data/reviews";

const monthYear = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

function Stars({ value, label }: { value: number; label?: string }) {
  return (
    <span className="stars" role="img" aria-label={label ?? `${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} aria-hidden="true" className={n <= Math.round(value) ? "is-on" : ""} />
      ))}
    </span>
  );
}

function ReviewCard({ review, spotlight = false }: { review: FiverrReview; spotlight?: boolean }) {
  return (
    <figure className={`review${spotlight ? " review--spot" : ""}`}>
      <div className="review__top">
        <Stars value={review.rating} />
        {review.repeatClient ? <span className="review__tag">Repeat client</span> : null}
      </div>
      <blockquote>{review.text}</blockquote>
      <figcaption>
        <span className="review__avatar" aria-hidden="true">
          {review.reviewer.charAt(0).toUpperCase()}
        </span>
        <span>
          <strong>{review.reviewer}</strong>
          <small>
            {review.country}, {monthYear(review.date)}
          </small>
        </span>
      </figcaption>
    </figure>
  );
}

// The three most detailed reviews get room to breathe; the rest scroll past
// in two rows. The first copy of each row is readable by screen readers; the
// duplicate that makes the loop seamless is hidden.
const spotlight = fiverrReviews.slice(0, 3);
const rest = fiverrReviews.slice(3);
const rows = [rest.filter((_, i) => i % 2 === 0), rest.filter((_, i) => i % 2 === 1)];

export default function FiverrReviews() {
  const { rating, reviewCount, level, breakdown } = fiverrSummary;
  const hasReviews = fiverrReviews.length > 0;

  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className="reviews__head">
          <div>
            <p className="reviews__source">
              <PlatformIcon name="fiverr" />
              Verified buyer reviews
            </p>
            <h2 id="reviews-title">What clients said after the work was done.</h2>
          </div>

          <div className="reviews__score">
            {rating ? (
              <div className="reviews__rating">
                <strong>{rating.toFixed(1)}</strong>
                <span>
                  <Stars value={rating} label={`Rated ${rating.toFixed(1)} out of 5 on Fiverr`} />
                  {reviewCount ? `${reviewCount} reviews on Fiverr` : "on Fiverr"}
                  {level ? `, ${level}` : ""}
                </span>
              </div>
            ) : null}
            {breakdown.length ? (
              <dl className="reviews__breakdown">
                {breakdown.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>
                      <span className="meter" aria-hidden="true">
                        <i style={{ width: `${(item.value / 5) * 100}%` }} />
                      </span>
                      {item.value.toFixed(1)}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </div>

        {hasReviews ? (
          <div className="reviews__spot">
            {spotlight.map((review, i) => (
              <ReviewCard key={`spot-${i}`} review={review} spotlight />
            ))}
          </div>
        ) : (
          <div className="reviews__empty">
            <p>
              Every review on my Fiverr profile comes from a completed, paid
              order. Fiverr doesn&apos;t allow anything else. Read them there,
              unedited, before you decide.
            </p>
          </div>
        )}
      </div>

      {hasReviews ? (
        <div className="review-rows" aria-label="More Fiverr reviews">
          {rows.map((row, r) => (
            <div className={`review-row review-row--${r + 1}`} key={r}>
              <div className="review-row__track">
                {[0, 1].map((copy) => (
                  <div
                    className="review-row__group"
                    key={copy}
                    aria-hidden={copy === 1 || undefined}
                  >
                    {row.map((review, i) => (
                      <ReviewCard key={`${r}-${copy}-${i}`} review={review} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="container reviews__cta">
        <a className="btn btn--fiverr btn--lg" href={fiverrGigUrl} target="_blank" rel="noreferrer">
          Read all {reviewCount ?? ""} reviews on Fiverr
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
