import Reveal from './Reveal.jsx';
import { site } from '../data/site.js';

export default function Location() {
  const telHref = site.phone.startsWith('[') ? undefined : `tel:${site.phone.replace(/\s/g, '')}`;

  return (
    <section className="section section--cream" id="locatie" aria-labelledby="loc-title">
      <div className="wrap split">
        <Reveal>
          <p className="label label--dark">Locatie</p>
          <h2 id="loc-title" className="display h2">
            Vind ons in Berchem.
          </h2>
          <address className="address">
            <strong>{site.name}</strong>
            <br />
            {site.street}
            <br />
            {site.city}
            <br />
            Tel: {telHref ? <a href={telHref}>{site.phone}</a> : site.phone}
          </address>
          <div className="actions">
            <a href={site.routeUrl} className="btn btn--dark" target="_blank" rel="noopener noreferrer">
              Routebeschrijving
            </a>
            <a href={site.instagramUrl} className="btn btn--outline-dark" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="map">
          <iframe
            title="Google Maps: HIMAN KEBAB, Driekoningenstraat 87, Berchem"
            src={site.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
