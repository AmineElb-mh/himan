import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Reveal from './Reveal.jsx';
import { hours } from '../data/site.js';
import { getOpenStatus } from '../lib/hours.js';

// Tabel van maandag tot zondag (data begint bij zondag = index 0)
const order = [1, 2, 3, 4, 5, 6, 0];
const fmt = (t) => (t === '24:00' ? '00:00' : t);

export default function Hours() {
  const [status, setStatus] = useState(() => getOpenStatus());

  // Elke minuut opnieuw berekenen, zodat "Nu open" klopt als de pagina open blijft staan
  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section section--hours" id="openingsuren" aria-labelledby="hours-title">
      <div className="wrap split">
        <Reveal>
          <p className="label">Openingsuren</p>
          <h2 id="hours-title" className="display h2">
            Wanneer ben je welkom?
          </h2>
          <p className="section__intro">
            Er is geen online bestelpagina. Kom gewoon binnen en bestel aan de toog.
          </p>

          <motion.p
            className={`status ${status.isOpen ? 'is-open' : 'is-closed'}`}
            role="status"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
          >
            <span className="status__dot" aria-hidden="true" />
            <strong>{status.isOpen ? 'Nu open' : 'Nu gesloten'}</strong>
            <span className="status__detail">{status.detail}</span>
          </motion.p>
        </Reveal>

        <Reveal delay={0.15}>
          <table className="hours">
            <caption className="sr-only">Openingsuren van HIMAN KEBAB</caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">Dag</th>
                <th scope="col">Uren</th>
              </tr>
            </thead>
            <tbody>
              {order.map((d) => {
                const h = hours[d];
                const isToday = d === status.dayIndex;
                return (
                  <tr key={h.day} className={isToday ? 'is-today' : ''} aria-current={isToday ? 'date' : undefined}>
                    <th scope="row">
                      {h.day}
                      {isToday && <span className="hours__today">Vandaag</span>}
                    </th>
                    <td>
                      {h.open} – {fmt(h.close)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
