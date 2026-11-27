import { motion } from 'motion/react';
import Reveal from './Reveal.jsx';
import { reviews } from '../data/reviews.js';
import { site } from '../data/site.js';

const Stars = ({ rating }) => (
  <p className="stars" aria-label={`${rating} van de 5 sterren`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} aria-hidden="true" className={i < rating ? 'is-on' : ''}>
        ★
      </span>
    ))}
  </p>
);

export default function Reviews() {
  return (
    <section className="section" id="reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <Reveal className="section__head section__head--split">
          <div>
            <p className="label">Google-reviews</p>
            <h2 id="reviews-title" className="display h2">
              Dit zeggen onze gasten.
            </h2>
          </div>
          <a href={site.googleReviewsUrl} className="text-link" target="_blank" rel="noopener noreferrer">
            Alle reviews op Google <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        <div className="reviews">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.id}
              className="review"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <Stars rating={r.rating} />
              <blockquote>
                <p>“{r.text}”</p>
              </blockquote>
              <figcaption>— {r.author}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
