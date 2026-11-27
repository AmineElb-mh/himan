import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Photo from './Photo.jsx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Hero-varianten om te vergelijken:
 *   / en /v2 → gevel rechts, merkkleur links (desktop) · foto boven, tekst onder (mobiel)
 *   /v3  → geen foto, effen achtergrondkleur
 *   /v4  → dönerbroodje in de zaak als volledige achtergrond
 *
 * Opties per variant:
 *   split  true  = op desktop staat de foto rechts en loopt ze links over in `sky`
 *   stack  true  = op mobiel staat de foto boven en de tekst eronder
 *   sky          = kleur links naast de foto
 */
const gevel = {
  src: 'hero.jpg',
  alt: 'Gevel van HIMAN Berliner döner kebab in de Driekoningenstraat',
  label: 'Hero-foto: gevel van de zaak',
  position: 'center 42%',
  split: true,
  stack: true,
  sky: '#17140f', // merkkleur zwart-bruin
};

const HERO_VARIANTS = {
  v1: gevel,
  v2: gevel,
  v3: null,
  v4: {
    src: 'hero-v2.jpg',
    alt: 'Dönerbroodje met groenten en maïs in een HIMAN-houder, in de zaak',
    label: 'Hero-foto: dönerbroodje in de zaak',
    position: 'center 65%',
  },
};

export default function Hero({ variant = 'v1' }) {
  // v3 is bewust null (geen foto); onbekende varianten vallen terug op v1
  const photo = variant in HERO_VARIANTS ? HERO_VARIANTS[variant] : HERO_VARIANTS.v1;
  const ref = useRef(null);
  // Subtiel parallax-effect op de achtergrondfoto
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      className={[
        'hero',
        !photo && 'hero--plain',
        photo?.split && 'hero--split',
        photo?.stack && 'hero--stack',
      ]
        .filter(Boolean)
        .join(' ')}
      style={photo?.sky ? { '--hero-sky': photo.sky } : undefined}
      id="top"
      ref={ref}
      aria-labelledby="hero-title"
    >
      {photo && (
        <>
          <motion.div
            className="hero__media"
            style={{ y, '--hero-pos': photo.position }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
          >
            <Photo
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              label={photo.label}
              ratio="auto"
              priority
              className="hero__photo"
            />
          </motion.div>
          <div className="hero__overlay" aria-hidden="true" />
        </>
      )}

      <motion.div className="hero__content wrap" variants={container} initial="hidden" animate="show">
        <motion.p className="label" variants={item}>
          Kebab · Berchem · Antwerpen
        </motion.p>
        <motion.h1 id="hero-title" className="display hero__title" variants={item}>
          Something <span className="accent">legendary</span> is spinning
        </motion.h1>
        <motion.p className="hero__text" variants={item}>
          HIMAN KEBAB, Driekoningenstraat 87 in Berchem. Kom binnen en bestel aan de toog.
        </motion.p>
        <motion.div className="hero__actions" variants={item}>
          <a href="#menu" className="btn btn--solid">
            Bekijk menu
          </a>
          <a href="#openingsuren" className="btn btn--ghost">
            Openingsuren
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
