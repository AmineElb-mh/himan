import { hours } from '../data/site.js';

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

/**
 * Huidige weekdag en tijd in Belgische tijd, ongeacht de tijdzone van de bezoeker.
 */
export function nowInBrussels(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Brussels',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type)?.value;
  return {
    dayIndex: WEEKDAYS[get('weekday')],
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  };
}

/**
 * Geeft terug of de zaak nu open is, plus een korte toelichting.
 */
export function getOpenStatus(date = new Date()) {
  const { dayIndex, minutes } = nowInBrussels(date);
  const today = hours[dayIndex];
  const open = toMinutes(today.open);
  const close = toMinutes(today.close);
  const isOpen = minutes >= open && minutes < close;

  const fmt = (t) => (t === '24:00' ? '00:00' : t);
  let detail;
  if (isOpen) {
    detail = `Vandaag open tot ${fmt(today.close)}`;
  } else if (minutes < open) {
    detail = `Vandaag open vanaf ${today.open}`;
  } else {
    const tomorrow = hours[(dayIndex + 1) % 7];
    detail = `Morgen open vanaf ${tomorrow.open}`;
  }
  return { isOpen, dayIndex, detail };
}
