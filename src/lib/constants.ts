import { SITE_CONFIG, POWER_WEEDER } from './siteConfig';

export const COMPANY = {
  name: 'Sparex India',
  legalName: 'SPAREX INDIA',
  tagline: 'Import · Export · Sourcing',
  subtagline: POWER_WEEDER.tagline,
  phone: '+91-6379806475',
  phoneRaw: '916379806475',
  email: 'sales@sparex.com',
  gstin: '33DPZPB6496G1ZA',
  state: '33 – Tamil Nadu',
  address: {
    line1: 'No. 201, GNT Road, Puzhal',
    city: 'Chennai – 600066',
    state: 'Tamil Nadu, India',
    full: 'No. 201, GNT Road, Puzhal, Chennai – 600066, Tamil Nadu, India',
  },
  location: 'Chennai · Tamil Nadu · India',
  canonicalBase: 'https://www.sparexindia.com',
} as const;

export const NAV_LINKS = [
  { label: 'Catalogue', href: '/engine-spares' },
  { label: 'Engine Families', href: '/divisions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const TRADE_PROCESS = [
  {
    step: '01',
    title: 'Brief',
    description:
      'Share engine model, item code, quantity, application, and destination.',
  },
  {
    step: '02',
    title: 'Source',
    description: 'Sparex identifies suitable manufacturers or supply options.',
  },
  {
    step: '03',
    title: 'Align',
    description:
      'Part specification, quality variant, commercial terms, and shipment details are reviewed.',
  },
  {
    step: '04',
    title: 'Move',
    description: 'Sparex supports order coordination and export documentation.',
  },
] as const;

export const MARKETS = [
  {
    region: 'India',
    description: 'Dealers, distributors, and repair networks sourcing power weeder engine spares.',
  },
  {
    region: 'Middle East',
    description: 'Agricultural machinery and small-engine spare-part requirements for regional buyers.',
  },
  {
    region: 'Africa',
    description: 'Farm equipment and power weeder maintenance supply for growing agricultural markets.',
  },
  {
    region: 'Asia',
    description: 'Regional trade connections for engine spare parts and compatible small-engine applications.',
  },
] as const;

export const ENQUIRY_TYPES = [
  { value: 'purchase', label: 'Product purchase' },
  { value: 'sourcing', label: 'Sourcing request' },
  { value: 'partnership', label: 'Supply partnership' },
  { value: 'general', label: 'General enquiry' },
] as const;

const ENGINE_DIVISION = {
  value: 'engine-spares',
  label: 'Power Weeder Engine Spares',
} as const;

export const ENQUIRY_DIVISIONS = SITE_CONFIG.paperEnabled
  ? [
      ENGINE_DIVISION,
      { value: 'paper-paperboard', label: 'Paper & Paperboard' },
      { value: 'requirement', label: 'Selected product by requirement' },
      { value: 'other', label: 'Other / Not sure' },
    ]
  : [
      ENGINE_DIVISION,
      { value: 'requirement', label: 'Other engine part by requirement' },
      { value: 'other', label: 'Other / Not sure' },
    ];
