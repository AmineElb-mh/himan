import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import Logo from './Logo.jsx';
import { site } from '../data/site.js';

// Gewone links, in volgorde van de pagina. "Route" opent Google Maps.
const links = [
  { href: '#openingsuren', label: 'Openingsuren' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#locatie', label: 'Locatie' },
  { href: site.routeUrl, label: 'Route', external: true },
];

// Attributen voor links naar een andere site (nieuw tabblad)
const ext = (l) => (l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {});

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Na 40px scrollen wordt de header een compacte donkere balk
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40));

  // Mobiel menu: body niet laten scrollen en sluiten met Escape
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
      <motion.div
        className="header__inner wrap"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <a href="#top" className="header__logo" aria-label="HIMAN KEBAB, naar boven">
          <Logo />
        </a>

        <nav className="header__nav" aria-label="Hoofdnavigatie">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link" {...ext(l)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Uitgelichte knop: het menu is waar de meeste bezoekers voor komen */}
          <a href="#menu" className="btn btn--solid btn--sm">
            Menu
          </a>
        </nav>

        <button
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </motion.div>

      {/* Mobiel menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobiele navigatie"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                >
                  <a href={l.href} onClick={() => setOpen(false)} {...ext(l)}>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <a href="#menu" className="btn btn--solid mobile-menu__cta" onClick={() => setOpen(false)}>
              Menu
            </a>
            <p className="mobile-menu__address">
              {site.street}
              <br />
              {site.city}
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
