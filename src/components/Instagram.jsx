import { motion } from 'motion/react';
import Reveal from './Reveal.jsx';
import Photo from './Photo.jsx';
import { site } from '../data/site.js';

// Foto's van @himankebab. Bestanden: public/assets/images/insta-1.jpg … insta-4.jpg
const posts = [
  { n: 1, alt: 'Baklava met pistache op een leisteen bord' },
  { n: 2, alt: 'Dönerbroodje met groenten en maïs in een HIMAN-houder, in de zaak' },
  { n: 3, alt: 'Wandkast met planten en het gele HIMAN-neonbord in de zaak' },
  { n: 4, alt: 'Gevel van HIMAN Berliner döner kebab met zwarte en gouden ballonnen' },
];

export default function Instagram() {
  return (
    <section className="section" id="instagram" aria-labelledby="insta-title">
      <div className="wrap">
        <Reveal className="section__head section__head--split">
          <div>
            <p className="label">Instagram</p>
            <h2 id="insta-title" className="display h2">
              {site.instagramHandle}
            </h2>
          </div>
          <a href={site.instagramUrl} className="btn btn--solid" target="_blank" rel="noopener noreferrer">
            Volg ons
          </a>
        </Reveal>

        <ul className="insta-grid">
          {posts.map(({ n, alt }, i) => (
            <motion.li
              key={n}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <a
                href={site.instagramUrl}
                className="insta-post"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${alt} (bekijk op Instagram)`}
              >
                <Photo src={`insta-${n}.jpg`} alt="" label="Instagram-post" ratio="1 / 1" />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
