import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Reveal from './Reveal.jsx';
import Photo from './Photo.jsx';
import { categories, menuItems } from '../data/menu.js';

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const tabRefs = useRef([]);
  const items = menuItems.filter((i) => i.category === active);

  // Toetsenbord: pijltjes links/rechts, Home en End wisselen tussen tabs
  const onKeyDown = (e, index) => {
    const last = categories.length - 1;
    let next = null;
    if (e.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    if (e.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(categories[next].id);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section className="section section--cream" id="menu" aria-labelledby="menu-title">
      <div className="wrap">
        <Reveal className="section__head">
          <p className="label label--dark">Menu</p>
          <h2 id="menu-title" className="display h2">
            Vers van de spit.
          </h2>
          <p className="section__intro">
            Kies een categorie. Bestellen doe je gewoon aan de toog.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="tabs" role="tablist" aria-label="Menucategorieën">
            {categories.map((c, i) => {
              const selected = c.id === active;
              return (
                <button
                  key={c.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={selected}
                  aria-controls="menu-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`tab ${selected ? 'is-active' : ''}`}
                  onClick={() => setActive(c.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  {selected && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="tab__bg"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="tab__text">{c.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="menu-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((item, i) => (
              <motion.article
                key={item.id}
                className="dish"
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
              >
                <div className="dish__media">
                  <Photo src={item.image} alt={item.alt} label="Foto: gerecht" ratio="4 / 3" />
                </div>
                <div className="dish__body">
                  <div className="dish__top">
                    <h3 className="dish__name">{item.name}</h3>
                    <span className="dish__price">{item.price}</span>
                  </div>
                  <p className="dish__desc">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
