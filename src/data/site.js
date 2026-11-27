/**
 * Centrale bedrijfsgegevens. Pas hier adres, telefoon, uren en logo aan:
 * alle secties lezen uit dit bestand.
 */
const destination = encodeURIComponent('Driekoningenstraat 87 Berchem Antwerpen');

export const site = {
  name: 'HIMAN KEBAB',
  slogan: 'Something legendary is spinning in Antwerp',
  street: 'Driekoningenstraat 87',
  city: 'Berchem, Antwerpen',
  phone: '[telefoonnummer]', // bv. '+32 3 123 45 67'
  instagramHandle: '@himankebab',
  instagramUrl: 'https://www.instagram.com/himankebab/',
  routeUrl: `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${destination}&output=embed`,
  googleReviewsUrl: 'https://share.google/OIKbAjxee9o917rl8', // Google-bedrijfsprofiel
  // Zet hier het pad naar het logobestand (bv. '/assets/logo/himan-logo.svg').
  // Leeg = tekstlogo in Anton.
  logoSrc: '',
};

/**
 * Openingsuren per weekdag. Index volgt JavaScript: 0 = zondag … 6 = zaterdag.
 * '24:00' betekent sluiten om middernacht.
 */
export const hours = [
  { day: 'Zondag', open: '15:00', close: '22:00' },
  { day: 'Maandag', open: '12:00', close: '22:00' },
  { day: 'Dinsdag', open: '12:00', close: '22:00' },
  { day: 'Woensdag', open: '12:00', close: '22:00' },
  { day: 'Donderdag', open: '12:00', close: '22:00' },
  { day: 'Vrijdag', open: '12:00', close: '24:00' },
  { day: 'Zaterdag', open: '12:00', close: '24:00' },
];

/** Korte samenvatting voor banner en footer. */
export const hoursSummary = [
  { label: 'Ma–do', value: '12:00–22:00' },
  { label: 'Vr & za', value: '12:00–00:00' },
  { label: 'Zo', value: '15:00–22:00' },
];
