import { site } from '../data/site.js';

/** Woordmerk HIMAN: echt logobestand als het ingesteld is, anders tekstversie. */
export default function Logo({ className = '' }) {
  if (site.logoSrc) {
    return <img src={site.logoSrc} alt="HIMAN" className={`logo logo--img ${className}`} />;
  }
  return <span className={`logo ${className}`}>HIMAN</span>;
}
