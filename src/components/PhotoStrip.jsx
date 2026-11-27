import { motion } from 'motion/react';
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

export default function PhotoStrip() {
  return (
    <section className="strip" aria-label="Foto's uit de zaak">
      {photos.map((p, i) => (
        <motion.div
          key={p.src}
          className="strip__item"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Photo src={p.src} alt={p.alt} label={p.label} ratio="4 / 5" />
        </motion.div>
      ))}
    </section>
  );
}
