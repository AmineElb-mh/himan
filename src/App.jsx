import { MotionConfig } from 'motion/react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Banner from './components/Banner.jsx';
import Menu from './components/Menu.jsx';
import Reviews from './components/Reviews.jsx';
import Hours from './components/Hours.jsx';
import PhotoStrip from './components/PhotoStrip.jsx';
import Instagram from './components/Instagram.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';

// Tijdelijke vergelijking van hero-varianten via /v2
const heroVariant = (() => {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/v2') return 'v2';
  return 'v1';
})();

export default function App() {
  return (
    // reducedMotion="user": respecteert de instelling 'minder beweging' van de bezoeker
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Naar de inhoud
      </a>
      <Header />
      <main id="main">
        <Hero variant={heroVariant} />
        <Banner />
        <Menu />
        <Reviews />
        <Hours />
        <PhotoStrip />
        <Instagram />
        <Location />
      </main>
      <Footer />
    </MotionConfig>
  );
}
