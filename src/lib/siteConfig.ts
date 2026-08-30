/** Toggle product areas live on the site. Paper can be re-enabled later. */
export const SITE_CONFIG = {
  paperEnabled: false,
  primaryFocus: 'power-weeder-engine-spares',
  primaryLabel: 'Power Weeder Engine Spares',
  primaryShortLabel: 'Power Weeder Spares',
} as const;

export const POWER_WEEDER = {
  headline: 'Power weeder engine spare parts.',
  tagline: '170F · 173F · 177F · 186F families — catalogue-indexed sourcing.',
  description:
    'Requirement-led import-export and sourcing for power weeder and small-engine spare parts across selected 170F, 173F, 177F, and 186F engine families.',
  application:
    'Power weeders, inter-cultivators, and compatible small petrol and diesel engine applications — confirmed against buyer requirement.',
} as const;

/** Local power weeder imagery — replace in public/images/power-weeder/ when client photos are ready */
export const POWER_WEEDER_IMAGES = {
  hero: './images/power-weeder/hero.png',
  field: './images/power-weeder/field.png',
  engineParts: './images/power-weeder/engine-parts.png',
} as const;

/** Hero background video */
export const HERO_VIDEO = './videos/hero.mp4';

/** Fallback poster if video fails to load */
export const HERO_POSTER = POWER_WEEDER_IMAGES.hero;

export const HERO_IMAGE = POWER_WEEDER_IMAGES.hero;
export const HERO_IMAGE_ALT = 'Robotic assembly of power weeder engine components';

export const FIELD_IMAGE_ALT = 'Power weeder working in a crop field';

export const ENGINE_PARTS_IMAGE_ALT =
  'Engine spare parts for power weeder — piston, gaskets, filters, and components';
