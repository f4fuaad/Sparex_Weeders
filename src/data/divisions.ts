import { POWER_WEEDER_IMAGES, FIELD_IMAGE_ALT, SITE_CONFIG } from '../lib/siteConfig';

export interface Division {
  index: string;
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  specCue: string;
  href: string;
  image: string;
  imageAlt: string;
  enabled: boolean;
}

const ALL_DIVISIONS: Division[] = [
  {
    index: '01',
    id: 'engine-spares',
    slug: 'engine-spares',
    title: 'Power Weeder Engine Spares',
    tagline: 'Precision parts for dependable engine performance.',
    description:
      'Requirement-led sourcing for selected 170F, 173F, 177F, and 186F engine spare-part families used in power weeders and compatible small engines — referenced from catalogue lines and confirmed against buyer requirements.',
    specCue: '170F · 173F · 177F · 186F families',
    href: '/engine-spares',
    image: POWER_WEEDER_IMAGES.field,
    imageAlt: FIELD_IMAGE_ALT,
    enabled: true,
  },
  {
    index: '02',
    id: 'paper-paperboard',
    slug: 'paper-paperboard',
    title: 'Paper & Paperboard',
    tagline: 'Materials that move from source to production.',
    description:
      'Kraft papers, testliner, paperboard, and specialty grades sourced by requirement for packaging, printing, and converting applications.',
    specCue: 'GSM · reel/sheet · application-led',
    href: '/paper-paperboard',
    image: '/images/white-top-testliner.png',
    imageAlt: 'Paper and paperboard rolls for industrial packaging and converting',
    enabled: false,
  },
];

/** Live divisions on site — paper excluded until SITE_CONFIG.paperEnabled */
export const DIVISIONS = ALL_DIVISIONS.filter((d) => d.enabled);

export const SOURCING_PATHWAY = {
  index: '02',
  title: 'Other engine parts by requirement',
  description:
    'Parts outside the indexed catalogue lines can be sourced when the requirement, engine model, and specification are shared — availability confirmed against enquiry.',
  href: '/contact?division=requirement',
} as const;

export const ENGINE_FAMILIES = [
  {
    id: '170F',
    label: '170F',
    fuel: 'petrol' as const,
    description: 'Petrol engine spares for power weeder applications',
  },
  {
    id: '173F',
    label: '173F',
    fuel: 'diesel' as const,
    description: 'Diesel engine spares for power weeder applications',
  },
  {
    id: '177F',
    label: '177F',
    fuel: 'petrol' as const,
    description: 'Petrol engine spares for power weeder applications',
  },
  {
    id: '186F',
    label: '186F',
    fuel: 'diesel' as const,
    description: 'Diesel engine spares for power weeder applications',
  },
] as const;

export const ENGINE_CATEGORIES = [
  { id: 'cylinder-head-valve-train', label: 'Cylinder head / valve train' },
  { id: 'crankcase-crankshaft-piston', label: 'Crankcase / piston / rod' },
  { id: 'timing', label: 'Timing' },
  { id: 'starter-electric', label: 'Starter / electric' },
  { id: 'air-intake-filter', label: 'Air intake / filter' },
  { id: 'fuel-system', label: 'Fuel system' },
  { id: 'exhaust-muffler', label: 'Exhaust / muffler' },
  { id: 'gaskets-seals', label: 'Gaskets / seals' },
  { id: 'fuel-tank-cap', label: 'Fuel tank / cap' },
  { id: 'other', label: 'Other' },
] as const;

export { SITE_CONFIG };
