import { motion } from 'motion/react';

const items = ['HIMAN KEBAB', 'Berchem', '12:00–22:00', 'Vrijdag & zaterdag tot 00:00'];

// Aantal kopieën van de rij. Genoeg om ook een heel breed scherm te vullen,
// zodat de band nooit leeg wordt tijdens de lus.
const COPIES = 6;
// Seconden om één kopie op te schuiven (bepaalt de snelheid)
const SECONDS_PER_COPY = 9;

/** Gele band die eindeloos doorloopt. Bij 'minder beweging' staat hij stil. */
export default function Banner() {
  return (
    <section className="banner" aria-label="Kort overzicht">
      <motion.div
        className="banner__track"
        // Precies één kopie opschuiven en dan naadloos herbeginnen
        animate={{ x: ['0%', `${-100 / COPIES}%`] }}
        transition={{ duration: SECONDS_PER_COPY, ease: 'linear', repeat: Infinity }}
      >
        {Array.from({ length: COPIES }, (_, copy) => (
          // Alleen de eerste kopie wordt voorgelezen
          <ul className="banner__row" key={copy} aria-hidden={copy > 0 || undefined}>
            {items.map((t) => (
              <li key={t}>
                {t}
                <span className="banner__dot" aria-hidden="true">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </motion.div>
    </section>
  );
}
