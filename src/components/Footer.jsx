import Reveal from './Reveal.jsx';
import Logo from './Logo.jsx';
import { site, hoursSummary } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <Reveal className="footer__grid">
          <div className="footer__brand">
            <Logo className="logo--footer" />
            <p className="footer__slogan">{site.slogan}.</p>
          </div>

          <div>
            <h2 className="footer__title">Adres</h2>
            <p>
              {site.street}
              <br />
              {site.city}
              <br />
              Tel: {site.phone}
            </p>
            <a href={site.instagramUrl} className="footer__link" target="_blank" rel="noopener noreferrer">
              {site.instagramHandle}
            </a>
          </div>

          <div>
            <h2 className="footer__title">Open</h2>
            <dl className="footer__hours">
              {hoursSummary.map((h) => (
                <div key={h.label}>
                  <dt>{h.label}</dt>
                  <dd>{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <p className="footer__copy">© {year} HIMAN KEBAB. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}
