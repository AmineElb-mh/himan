/**
 * Menudata: gerechten, beschrijvingen, prijzen en foto's.
 * - category: moet overeenkomen met een id uit `categories`
 * - image: bestandsnaam in public/assets/images/ (bv. 'menu/kebab-1.jpg')
 * Voeg gerust items toe of verwijder er; de site past zich automatisch aan.
 */
export const categories = [
  { id: 'kebab', label: 'Kebab' },
  { id: 'durum', label: 'Durum' },
  { id: 'frieten', label: 'Frieten' },
  { id: 'dranken', label: 'Dranken' },
];

// Beschrijving van wat er op elke foto staat (voor schermlezers).
// Herkomst van de foto's: public/assets/images/menu/BRONNEN.txt
const photoAlt = {
  'kebab-1': 'Kebabbroodje in een HIMAN-houder voor het gele neonbord',
  'kebab-2': 'Kebabbroodjes aan de toog bij HIMAN',
  'kebab-3': 'Dönerbroodje met groenten in een HIMAN-houder',
  'durum-1': 'Durum met gegrild vlees en groenten',
  'durum-2': 'Durums op de grill',
  'durum-3': 'Gevulde durum in de hand',
  'frieten-1': 'Frietjes met ketchup',
  'frieten-2': 'Frietje dat in ketchup gedipt wordt',
  'frieten-3': 'Frietjes met sauzen',
  'dranken-1': 'Frisdrank met ijsblokjes',
  'dranken-2': 'Glas cola met ijs',
  'dranken-3': 'Glas ayran met een blaadje munt',
};

/**
 * TIJDELIJK MENU
 * HIMAN heeft nog geen eigen menu online. Onderstaande gerechten zijn algemene
 * kebabzaak-gerechten met prijzen afgestemd op andere zaken in Berchem.
 * Vervang ze door het echte HIMAN-menu zodra dat er is, en zet dan
 * MENU_IS_TEMPORARY op false (verbergt de melding op de site).
 */
export const MENU_IS_TEMPORARY = false;

const item = (category, n, name, description, price) => ({
  id: `${category}-${n}`,
  category,
  name,
  description,
  price,
  image: `menu/${category}-${n}.jpg`,
  alt: photoAlt[`${category}-${n}`] ?? '',
});

export const menuItems = [
  // Kebab
  item('kebab', 1, 'Broodje kebab', 'Pitabroodje met kebab, verse groenten en saus naar keuze.', '€ 7,90'),
  item('kebab', 2, 'Broodje kebab special', 'Extra gevuld broodje kebab met groenten en saus naar keuze.', '€ 10,00'),
  item('kebab', 3, 'Broodje mix', 'Pitabroodje met een mix van vlees, groenten en saus naar keuze.', '€ 10,00'),
  // Durum
  item('durum', 1, 'Durum kebab', 'Opgerold dun brood met kebab, groenten en saus naar keuze.', '€ 7,90'),
  item('durum', 2, 'Durum kebab special', 'Extra gevulde durum met kebab, groenten en saus naar keuze.', '€ 10,00'),
  item('durum', 3, 'Durum mix', 'Durum met een mix van vlees, groenten en saus naar keuze.', '€ 10,00'),
  // Frieten
  item('frieten', 1, 'Kleine friet', 'Saus erbij: € 0,80 per potje.', '€ 3,60'),
  item('frieten', 2, 'Medium friet', 'Saus erbij: € 0,80 per potje.', '€ 4,90'),
  item('frieten', 3, 'Grote friet', 'Saus erbij: € 0,80 per potje.', '€ 6,00'),
  // Dranken
  item('dranken', 1, 'Cola / cola zero', 'Blikje, koud uit de frigo.', '€ 1,90'),
  item('dranken', 2, 'Fanta, Sprite of ice tea', 'Blikje, koud uit de frigo.', '€ 1,90'),
  item('dranken', 3, 'Ayran of water', 'Plat of bruisend water.', '€ 1,80'),
];
