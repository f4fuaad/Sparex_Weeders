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

/** Brand assets */
export const BRAND = {
  logo: '/weederx-logo.png',
  logoAlt: 'Weeder X — Powered by Sparex',
} as const;

/** Local power weeder imagery — replace in public/images/power-weeder/ when client photos are ready */
export const POWER_WEEDER_IMAGES = {
  /* Different photo from engineParts: the divisions section used to reuse
     the same 6.7 MB golden-hour shot as the feature section. */
  field: './images/power-weeder/field.webp',
  engineParts: './images/power-weeder/engine-parts.webp',
} as const;

/** Hero background video */
export const HERO_VIDEO = './videos/hero.mp4';

export const FIELD_IMAGE_ALT =
  'Red Weeder X power weeder parked in a green crop field in daylight';
export const HERO_VIDEO_ALT = 'Person operating a motorized tiller in the field';
export const ENGINE_PARTS_IMAGE_ALT =
  'Red Weeder X power weeder tilling soil in a tropical crop field at golden hour';
