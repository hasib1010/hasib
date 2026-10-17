import { caseStudies } from "@/data/case-studies";

// The signature moment of the homepage: real shipped work on a tilted wall,
// three columns drifting in opposite directions. Purely decorative — every
// project is also listed, with text, further down the page.
// Login screens and very wide crops read poorly at this size.
const skip = new Set(["/work/lab.webp"]);
const shots = caseStudies
  .map((study) => study.image)
  .filter((src) => src && !skip.has(src));
const columns = [0, 1, 2].map((col) => shots.filter((_, index) => index % 3 === col));

export default function HeroWall() {
  return (
    <div className="wall" aria-hidden="true">
      <div className="wall__plane">
        {columns.map((column, index) => (
          <div className={`wall__col wall__col--${index + 1}`} key={index}>
            <div className="wall__track">
              {[...column, ...column].map((src, i) => (
                <div className="wall__shot" key={`${src}-${i}`}>
                  <span className="wall__bar">
                    <i />
                    <i />
                    <i />
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element -- decorative, many small tiles */}
                  <img src={src} alt="" loading={i < 3 ? "eager" : "lazy"} decoding="async" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
