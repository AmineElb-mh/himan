import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Photo from './Photo.jsx';

const photos = [
  {
    src: 'strip-kebab.jpg',
    label: 'Foto: kebabbroodje close-up',
    alt: 'Close-up van een kebabbroodje in een HIMAN-houder, met het gele HIMAN-neonbord op de achtergrond',
  },
  {
    src: 'strip-toog.jpg',
    label: 'Foto: broodjes aan de toog',
    alt: 'Drie kebabbroodjes in HIMAN-houders aan de toog, met verse groenten en sauzen erachter',
  },
  {
    src: 'strip-dessert.jpg',
    label: 'Foto: cheesecake',
    alt: 'Cheesecake met speculooskruim en karamel, in stukken gesneden',
  },
];

const ease = [0.22, 1, 0.36, 1];

/**
 * Fotostrook: twee grote foto's met een smallere, lager geplaatste foto in het midden.
 * Animaties (Motion):
 *  - invliegen bij in beeld komen, met vertraging per foto
 *  - parallax bij scrollen: buitenste foto's schuiven omhoog, de middelste omlaag
 *  - de foto's zoomen zacht uit terwijl je voorbij scrolt
 */
export default function PhotoStrip() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Bij 'minder beweging' blijven alle waarden neutraal
  const yOuter = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const yMiddle = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 50]);
  const zoom = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.18, 1.02, 1.08]);

  return (
    <section className="strip-section" ref={ref} aria-label="Foto's uit de zaak">
      <div className="wrap strip">
        {photos.map((p, i) => {
          const isMiddle = i === 1;
          return (
            <motion.div
              key={p.src}
              className={`strip__item ${isMiddle ? 'strip__item--mid' : ''}`}
              style={{ y: isMiddle ? yMiddle : yOuter }}
            >
              <motion.div
                className="strip__card"
                initial={{ opacity: 0, y: 70, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                transition={{ duration: 0.9, delay: i * 0.15, ease }}
                whileHover={{ scale: 1.02, transition: { duration: 0.35 } }}
              >
                <motion.div className="strip__zoom" style={{ scale: zoom }}>
                  <Photo src={p.src} alt={p.alt} label={p.label} ratio={isMiddle ? '2 / 3' : '4 / 5'} />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
