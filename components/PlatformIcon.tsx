import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiFiverr, SiToptal, SiUpwork } from "react-icons/si";
import type { PlatformKey } from "@/data/profile";

const icons = {
  fiverr: SiFiverr,
  upwork: SiUpwork,
  toptal: SiToptal,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
};

export default function PlatformIcon({
  name,
  className,
}: {
  name: PlatformKey | "whatsapp";
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={className} />;
}
