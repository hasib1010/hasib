/* Pre-sized webp. Natural ratio matters more than the image optimizer. */
/* eslint-disable @next/next/no-img-element */
export default function GameStage({
  poster,
  icon,
  phones,
}: {
  poster: string;
  icon?: string;
  phones: { src: string; alt: string }[];
}) {
  return (
    <div className="game-stage" style={{ backgroundImage: `url(${poster})` }}>
      {icon ? <img className="game-stage__icon" src={icon} alt="" /> : null}
      <div className="game-stage__phones">
        {phones.map((phone) => (
          <div className="phone" key={phone.src}>
            <img src={phone.src} alt={phone.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
