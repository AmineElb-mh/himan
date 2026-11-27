/**
 * Menudata. Vul hier de echte gerechten, beschrijvingen en prijzen in.
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
  'dranken-3': 'Flesje frisdrank in de hand',
};

const placeholder = (category, n) => ({
  id: `${category}-${n}`,
  category,
  name: '[Gerecht]',
  description: '[Korte beschrijving]',
  price: '[Prijs]',
  image: `menu/${category}-${n}.jpg`,
  alt: photoAlt[`${category}-${n}`] ?? '',
});

export const menuItems = [
  // Kebab
  placeholder('kebab', 1),
  placeholder('kebab', 2),
  placeholder('kebab', 3),
  // Durum
  placeholder('durum', 1),
  placeholder('durum', 2),
  placeholder('durum', 3),
  // Frieten
  placeholder('frieten', 1),
  placeholder('frieten', 2),
  placeholder('frieten', 3),
  // Dranken
  placeholder('dranken', 1),
  placeholder('dranken', 2),
  placeholder('dranken', 3),
];
