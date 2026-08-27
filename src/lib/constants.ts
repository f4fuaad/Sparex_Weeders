export const COMPANY = {
  name: 'Sparex India',
  legalName: 'SPAREX INDIA',
  tagline: 'Paper & Paperboard for Global Markets',
  subtagline: 'Reliable Sourcing. Competitive Supply. Global Trade.',
  phone: '+91 90801 23064',
  phoneRaw: '919080123064',
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

export const COLORS = {
  charcoal: '#2A2622',
  ink: '#1F1C19',
  parchment: '#E8E2D6',
  ivory: '#F0EBE2',
  cream: '#FAF7F2',
  kraft: '#AA7E51',
  paperGrey: '#9A9185',
  sparexRed: '#E21B16',
  whatsapp: '#26734E',
  warmStone: '#D4C9B8',
} as const;

const IMG = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=85&auto=format&fit=crop`;

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  headline: string;
  overview: string;
  applications: readonly string[];
  image: string;
  imageAlt: string;
}

export const PRODUCT_CATEGORIES = [
  {
    id: 'packaging-papers',
    name: 'Packaging Papers',
    description:
      'Kraft and specialty papers for bags, wrapping, corrugated liners, and industrial packaging.',
  },
  {
    id: 'paperboard',
    name: 'Paperboard',
    description:
      'Folding boxboard, duplex board, and liquid packaging board for cartons and consumer packs.',
  },
  {
    id: 'printing-publishing',
    name: 'Printing & Publishing',
    description: 'Copier, book, and newsprint grades for office, commercial, and publication printing.',
  },
  {
    id: 'specialty-industrial',
    name: 'Specialty & Industrial',
    description: 'Thermal and grease-proof papers for retail, food service, and specialty applications.',
  },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'kraft-paper',
    slug: 'kraft-paper',
    name: 'Kraft Paper',
    category: 'packaging-papers',
    headline: 'Versatile kraft for packaging and converting.',
    overview:
      'Kraft paper for a wide range of packaging and converting applications. Available in different grades and specifications according to customer requirements.',
    applications: [
      'Paper bags',
      'Shopping bags',
      'Wrapping',
      'Industrial packaging',
      'Flexible packaging',
    ],
    image: '/images/kraft-paper.png',
    imageAlt: 'Industrial kraft paper roll on a converting machine in a manufacturing facility',
  },
  {
    id: 'sack-kraft',
    slug: 'sack-kraft',
    name: 'Sack Kraft Paper',
    category: 'packaging-papers',
    headline: 'High-strength paper for heavy-duty sacks.',
    overview:
      'High-strength kraft paper designed for heavy-duty and industrial packaging applications.',
    applications: [
      'Cement bags',
      'Building material bags',
      'Industrial sacks',
      'Multiwall paper bags',
      'Heavy-duty packaging',
    ],
    image: '/images/sack-kraft-paper.png',
    imageAlt: 'Large kraft paper rolls for sack and heavy-duty industrial packaging',
  },
  {
    id: 'mg-kraft',
    slug: 'mg-kraft',
    name: 'MG Kraft Paper',
    category: 'packaging-papers',
    headline: 'Machine-glazed surface for converting.',
    overview:
      'Machine-glazed kraft paper offering a smooth surface suitable for various packaging and converting applications.',
    applications: [
      'Paper bags',
      'Wrapping',
      'Food packaging',
      'Industrial packaging',
      'Flexible packaging',
    ],
    image: '/images/mg-kraft-paper.png',
    imageAlt: 'Machine-glazed kraft paper sheet and roll on industrial paper converting line',
  },
  {
    id: 'white-top-testliner',
    slug: 'white-top-testliner',
    name: 'White Top Testliner',
    category: 'packaging-papers',
    headline: 'Clean surface for corrugated and printed boxes.',
    overview:
      'White Top Testliner for corrugated packaging and printed box applications.',
    applications: [
      'Corrugated boxes',
      'FMCG packaging',
      'Retail packaging',
      'Printed cartons',
      'E-commerce packaging',
    ],
    image: '/images/white-top-testliner.png',
    imageAlt: 'White top testliner paper roll with white surface and kraft core in industrial storage',
  },
  {
    id: 'wet-strength',
    slug: 'wet-strength',
    name: 'Wet Strength Paper',
    category: 'packaging-papers',
    headline: 'Retains strength under wet or humid conditions.',
    overview:
      'Wet strength paper designed for applications where paper needs to retain its strength under wet or humid conditions.',
    applications: [
      'Selected packaging applications',
      'Industrial applications',
      'Specialty converting',
    ],
    image: '/images/wet-strength-paper.png',
    imageAlt: 'Wet strength paper production line with coating and press section in an industrial mill',
  },
  {
    id: 'fbb',
    slug: 'fbb',
    name: 'FBB — Folding Boxboard',
    category: 'paperboard',
    headline: 'Premium board for folding cartons.',
    overview:
      'Folding Boxboard for high-quality printed packaging and folding carton applications.',
    applications: [
      'Pharmaceutical cartons',
      'Food packaging',
      'Cosmetic packaging',
      'FMCG packaging',
      'Consumer product packaging',
    ],
    image: IMG('photo-1631545806608-20c7e7a09631'),
    imageAlt: 'Folding boxboard cartons for pharmaceutical and FMCG packaging',
  },
  {
    id: 'duplex-board',
    slug: 'duplex-board',
    name: 'Duplex Board',
    category: 'paperboard',
    headline: 'Reliable board for general-purpose cartons.',
    overview:
      'Duplex board for general-purpose printed packaging and folding carton applications.',
    applications: [
      'Folding cartons',
      'FMCG packaging',
      'Pharmaceutical packaging',
      'Food packaging',
      'Cosmetic packaging',
      'General consumer packaging',
    ],
    image: IMG('photo-1568667256549-094345857637'),
    imageAlt: 'Duplex paperboard sheets for folding cartons and print packaging',
  },
  {
    id: 'liquid-packaging-board',
    slug: 'liquid-packaging-board',
    name: 'Liquid Packaging Board',
    category: 'paperboard',
    headline: 'Engineered for beverage and liquid packs.',
    overview:
      'Paperboard designed for liquid and beverage packaging applications. Supply is based on required technical specification, barrier requirements, and application.',
    applications: [
      'Liquid packaging systems',
      'Beverage cartons',
      'Packaging converters',
    ],
    image: IMG('photo-1602143407151-7111542de6e8'),
    imageAlt: 'Liquid packaging board used for beverage and juice cartons',
  },
  {
    id: 'copier-paper',
    slug: 'copier-paper',
    name: 'Copier Paper',
    category: 'printing-publishing',
    headline: 'Office and commercial printing grade.',
    overview:
      'Copier paper for office, commercial, and general-purpose printing applications.',
    applications: ['Office printing', 'Commercial printing', 'General-purpose copying'],
    image: IMG('photo-1586281380349-632531db7ed4'),
    imageAlt: 'White copier paper reams for office and commercial printing',
  },
  {
    id: 'book-paper',
    slug: 'book-paper',
    name: 'Book Paper (NS)',
    category: 'printing-publishing',
    headline: 'Publishing-grade paper for books and print.',
    overview: 'Book paper for publishing and printing applications.',
    applications: [
      'Books',
      'Publications',
      'Educational materials',
      'Commercial printing',
    ],
    image: IMG('photo-1512820790801-0f4f4f0b939a'),
    imageAlt: 'Book paper for publishing, educational and commercial print',
  },
  {
    id: 'newsprint',
    slug: 'newsprint',
    name: 'Newsprint',
    category: 'printing-publishing',
    headline: 'Publication-grade newsprint.',
    overview: 'Newsprint paper for newspaper and publication printing applications.',
    applications: ['Newspapers', 'Publications', 'Commercial print runs'],
    image: IMG('photo-1504711434969-e33886198f5f'),
    imageAlt: 'Newsprint paper rolls for newspaper and publication printing',
  },
  {
    id: 'thermal-paper',
    slug: 'thermal-paper',
    name: 'Thermal Paper',
    category: 'specialty-industrial',
    headline: 'Direct thermal printing substrate.',
    overview: 'Thermal paper for direct thermal printing applications.',
    applications: [
      'POS receipts',
      'Billing',
      'ATM receipts',
      'Tickets',
      'Labels',
      'Retail printing',
    ],
    image: IMG('photo-1556742049-0cfed4f6a45d'),
    imageAlt: 'Thermal paper rolls for POS receipts, billing and retail printing',
  },
  {
    id: 'grease-proof',
    slug: 'grease-proof',
    name: 'Grease Proof Paper',
    category: 'specialty-industrial',
    headline: 'Food-safe wrapping and liner paper.',
    overview: 'Grease proof paper for food packaging and takeaway applications.',
    applications: [
      'Burger wrapping',
      'Sandwich wrapping',
      'Bakery products',
      'Butter wrapping',
      'Confectionery',
      'Takeaway packaging',
      'Tray liners',
      'Baking applications',
    ],
    image: IMG('photo-1558961363-fa8fdf82db35'),
    imageAlt: 'Grease proof paper for bakery, food wrapping and takeaway packaging',
  },
];

export const SPECIFICATIONS = [
  'GSM',
  'Reel Width',
  'Sheet Size',
  'Core Size',
  'Reel Diameter',
  'Moisture',
  'Strength',
  'Brightness',
  'Packing',
  'Quantity',
] as const;

export const WHY_SPAREX = [
  {
    title: 'Reliable Sourcing',
    description:
      'We focus on identifying suitable supply sources rather than simply offering products from a fixed list.',
  },
  {
    title: 'Competitive Pricing',
    description:
      'We work with multiple supply sources to seek commercially competitive solutions.',
  },
  {
    title: 'Product Knowledge',
    description:
      'Our focus on paper and paperboard enables us to understand the basic technical and commercial requirements of the industry.',
  },
  {
    title: 'Flexible Solutions',
    description:
      'Different buyers require different GSM, widths, quantities and specifications. We work around the buyer\'s actual requirement.',
  },
  {
    title: 'Export Support',
    description:
      'From quotation and order coordination to shipment documentation, we support the international trading process.',
  },
  {
    title: 'Long-Term Relationships',
    description:
      'We believe sustainable business is built through reliability, communication and consistent service.',
  },
] as const;

export const MARKETS = [
  {
    region: 'Middle East',
    description:
      'Supplying packaging and printing materials to distributors, converters and industrial buyers.',
  },
  {
    region: 'Africa',
    description:
      'Supporting growing packaging and printing markets with competitive paper supply solutions.',
  },
  {
    region: 'Asia',
    description:
      'Connecting manufacturers with buyers across established and emerging Asian markets.',
  },
  {
    region: 'Global Markets',
    description:
      'We continuously explore suitable international markets for our product range and supply partners.',
  },
] as const;

export const INDUSTRIES = [
  {
    title: 'Corrugated Packaging',
    description:
      'Testliner, Kraftliner, White Top Testliner and Fluting for corrugated board manufacturers.',
  },
  {
    title: 'Paper Bag & Flexible Packaging',
    description: 'Kraft paper and specialty papers for paper bags and packaging applications.',
  },
  {
    title: 'Printing & Converting',
    description: 'Paper and board grades for printing and converting companies.',
  },
  {
    title: 'FMCG Packaging',
    description: 'Packaging board and papers for consumer products.',
  },
  {
    title: 'Food Packaging',
    description:
      'Selected food packaging papers and boards according to required specifications.',
  },
  {
    title: 'Pharmaceutical Packaging',
    description: 'Paperboard for cartons and pharmaceutical packaging.',
  },
  {
    title: 'Industrial Packaging',
    description: 'Kraft, sack kraft and other papers for industrial packaging applications.',
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Requirement',
    description: 'You send us your product specification and quantity.',
  },
  {
    step: '02',
    title: 'Sourcing',
    description: 'We identify suitable manufacturers and supply sources.',
  },
  {
    step: '03',
    title: 'Quotation',
    description: 'We obtain and evaluate commercial offers.',
  },
  {
    step: '04',
    title: 'Confirmation',
    description: 'Product specifications, price, quantity and shipment terms are confirmed.',
  },
  {
    step: '05',
    title: 'Order & Export',
    description: 'We coordinate order execution and export documentation.',
  },
  {
    step: '06',
    title: 'Shipment',
    description: 'The goods are prepared and dispatched according to the agreed shipping terms.',
  },
] as const;

export const MANUFACTURER_PRODUCTS = [
  'Testliner & Fluting',
  'White Top Testliner',
  'White Top Liner',
  'Kraft Top Liner',
  'Duplex Board',
  'FBB',
  'MG Kraft',
  'Sack Kraft',
  'Wet Strength Paper',
  'Thermal Paper',
  'Book Paper NS',
  'Grease Proof Paper',
] as const;

export const FOOTER_PRODUCTS = [
  'Kraft Paper',
  'Kraftliner',
  'Testliner',
  'White Top Testliner',
  'Fluting',
  'White Top Liner',
  'Kraft Top Liner',
  'Duplex Board',
  'FBB',
  'MG Kraft',
  'Sack Kraft',
  'Specialty Papers',
] as const;

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Markets', href: '/#markets' },
  { label: 'Industries', href: '/#industries' },
  { label: 'For Buyers', href: '/#for-buyers' },
  { label: 'For Manufacturers', href: '/#for-manufacturers' },
  { label: 'Contact', href: '/contact' },
] as const;

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categoryId);
}
