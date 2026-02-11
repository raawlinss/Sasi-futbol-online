function stripCombiningMarks(text) {
  // Basic diacritics removal after NFKD normalization.
  return text.replace(/[\u0300-\u036f]/g, '');
}

const LEET_MAP = Object.freeze({
  '0': 'o',
  '1': 'i',
  '!': 'i',
  '|': 'i',
  '3': 'e',
  '4': 'a',
  '@': 'a',
  '5': 's',
  '$': 's',
  '7': 't'
});

export function normalizeForFilter(raw) {
  const input = `${raw ?? ''}`;
  let text = input;
  try {
    text = text.normalize('NFKD');
  } catch {
    // ignore
  }
  text = stripCombiningMarks(text).toLowerCase();

  // Map common leet chars before stripping non-alnum.
  text = text
    .split('')
    .map((ch) => (LEET_MAP[ch] ? LEET_MAP[ch] : ch))
    .join('');

  // Remove non-alphanumeric chars completely to defeat punctuation/spacing bypass.
  text = text.replace(/[^a-z0-9]/g, '');

  // Collapse repeated chars: "niiiiiga" -> "niga".
  text = text.replace(/(.)\1+/g, '$1');

  return text;
}

// Keep this list short but effective; add more as needed.
const BANNED_SUBSTRINGS = Object.freeze([
  // Racism / slurs (English)
  'nigga',
  'niga',
  'nigger',
  'kike',
  'erdogan',
  'erdoğan',
  'Tayyip',
  'AKP',
  'CHP',
  // Turkish profanity (common)
  'amk',
  'aq',
  'orospu',
  'sik',
  'siktir',
  'pic',
  'gavat',
  'yarrak',
  'ibne',
  // Extremism
  'hitler',
  'nazi'
].map((s) => normalizeForFilter(s)));

export function isBannedText(raw) {
  const normalized = normalizeForFilter(raw);
  if (!normalized) return false;
  return BANNED_SUBSTRINGS.some((w) => normalized.includes(w));
}

export function sanitizeNick(raw, maxLen = 8) {
  const input = `${raw ?? ''}`.trim();
  // Allowed: A-Z a-z 0-9 underscore. No spaces.
  const cleaned = input.replace(/[^a-zA-Z0-9_]/g, '');
  const sliced = cleaned.slice(0, maxLen);
  return sliced;
}

export function makeRandomNick() {
  const num = Math.floor(Math.random() * 1000);
  return `Guest${`${num}`.padStart(3, '0')}`.slice(0, 8);
}
