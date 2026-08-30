export interface PaperProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  headline: string;
  overview: string;
  applications: readonly string[];
  productType: string;
  gsm?: string;
  format?: string;
  width?: string;
  packing?: string;
  image: string;
  imageAlt: string;
}

export const PAPER_CATEGORIES = [
  {
    id: 'packaging-papers',
    name: 'Packaging Papers',
    description: 'Kraft and specialty papers for bags, wrapping, corrugated liners, and industrial packaging.',
  },
  {
    id: 'paperboard',
    name: 'Paperboard',
    description: 'Folding boxboard, duplex board, and liquid packaging board for cartons and consumer packs.',
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

export const PAPER_PRODUCTS: PaperProduct[] = [
  {
    id: 'kraft-paper',
    slug: 'kraft-paper',
    name: 'Kraft Paper',
    category: 'packaging-papers',
    categoryLabel: 'Packaging Papers',
    headline: 'Versatile kraft for packaging and converting.',
    overview:
      'Kraft paper for packaging and converting applications. Available in different grades and specifications according to buyer requirements.',
    applications: ['Paper bags', 'Shopping bags', 'Wrapping', 'Industrial packaging', 'Flexible packaging'],
    productType: 'Kraft paper',
    gsm: 'By requirement',
    format: 'Reel or sheet',
    width: 'By requirement',
    packing: 'By requirement',
    image: '/images/kraft-paper.png',
    imageAlt: 'Industrial kraft paper roll on a converting machine',
  },
  {
    id: 'sack-kraft',
    slug: 'sack-kraft',
    name: 'Sack Kraft Paper',
    category: 'packaging-papers',
    categoryLabel: 'Packaging Papers',
    headline: 'High-strength paper for heavy-duty sacks.',
    overview: 'High-strength kraft paper designed for heavy-duty and industrial packaging applications.',
    applications: ['Cement bags', 'Building material bags', 'Industrial sacks', 'Multiwall paper bags'],
    productType: 'Sack kraft',
    gsm: 'By requirement',
    format: 'Reel or sheet',
    width: 'By requirement',
    packing: 'By requirement',
    image: '/images/sack-kraft-paper.png',
    imageAlt: 'Sack kraft paper sacks and jumbo roll in an industrial facility',
  },
  {
    id: 'mg-kraft',
    slug: 'mg-kraft',
    name: 'MG Kraft Paper',
    category: 'packaging-papers',
    categoryLabel: 'Packaging Papers',
    headline: 'Machine-glazed surface for converting.',
    overview:
      'Machine-glazed kraft paper offering a smooth surface suitable for various packaging and converting applications.',
    applications: ['Paper bags', 'Wrapping', 'Food packaging', 'Industrial packaging'],
    productType: 'MG kraft',
    gsm: 'By requirement',
    format: 'Reel or sheet',
    image: '/images/mg-kraft-paper.png',
    imageAlt: 'Machine-glazed kraft paper sheet and roll on converting line',
  },
  {
    id: 'white-top-testliner',
    slug: 'white-top-testliner',
    name: 'White Top Testliner',
    category: 'packaging-papers',
    categoryLabel: 'Packaging Papers',
    headline: 'Clean surface for corrugated and printed boxes.',
    overview: 'White Top Testliner for corrugated packaging and printed box applications.',
    applications: ['Corrugated boxes', 'FMCG packaging', 'Retail packaging', 'Printed cartons'],
    productType: 'Testliner',
    gsm: 'By requirement',
    format: 'Reel',
    image: '/images/white-top-testliner.png',
    imageAlt: 'White top testliner paper roll with white surface and kraft core',
  },
  {
    id: 'wet-strength',
    slug: 'wet-strength',
    name: 'Wet Strength Paper',
    category: 'packaging-papers',
    categoryLabel: 'Packaging Papers',
    headline: 'Retains strength under wet or humid conditions.',
    overview:
      'Wet strength paper designed for applications where paper needs to retain strength under wet or humid conditions.',
    applications: ['Selected packaging applications', 'Industrial applications', 'Specialty converting'],
    productType: 'Specialty kraft',
    gsm: 'By requirement',
    format: 'Reel or sheet',
    image: '/images/wet-strength-paper.png',
    imageAlt: 'Wet strength paper sheets in a converting facility',
  },
  {
    id: 'fbb',
    slug: 'fbb',
    name: 'FBB — Folding Boxboard',
    category: 'paperboard',
    categoryLabel: 'Paperboard',
    headline: 'Premium board for folding cartons.',
    overview: 'Folding Boxboard for high-quality printed packaging and folding carton applications.',
    applications: ['Pharmaceutical cartons', 'Food packaging', 'Cosmetic packaging', 'FMCG packaging'],
    productType: 'Folding boxboard',
    gsm: 'By requirement',
    format: 'Sheet or reel',
    image: '/images/fbb-folding-boxboard.png',
    imageAlt: 'Folding boxboard sheets with luxury folding carton',
  },
  {
    id: 'duplex-board',
    slug: 'duplex-board',
    name: 'Duplex Board',
    category: 'paperboard',
    categoryLabel: 'Paperboard',
    headline: 'Reliable board for general-purpose cartons.',
    overview: 'Duplex board for general-purpose printed packaging and folding carton applications.',
    applications: ['Folding cartons', 'FMCG packaging', 'Pharmaceutical packaging', 'Food packaging'],
    productType: 'Duplex board',
    gsm: 'By requirement',
    format: 'Sheet or reel',
    image: '/images/duplex-board.png',
    imageAlt: 'Duplex board sheets and folding carton',
  },
  {
    id: 'liquid-packaging-board',
    slug: 'liquid-packaging-board',
    name: 'Liquid Packaging Board',
    category: 'paperboard',
    categoryLabel: 'Paperboard',
    headline: 'Engineered for beverage and liquid packs.',
    overview:
      'Paperboard for liquid and beverage packaging. Supply is based on required technical specification, barrier requirements, and application.',
    applications: ['Liquid packaging systems', 'Beverage cartons', 'Packaging converters'],
    productType: 'Liquid packaging board',
    gsm: 'By requirement',
    format: 'Reel or sheet',
    image: '/images/liquid-packaging-board.png',
    imageAlt: 'Liquid packaging board sheets and gable-top carton',
  },
  {
    id: 'copier-paper',
    slug: 'copier-paper',
    name: 'Copier Paper',
    category: 'printing-publishing',
    categoryLabel: 'Printing & Publishing',
    headline: 'Office and commercial printing grade.',
    overview: 'Copier paper for office, commercial, and general-purpose printing applications.',
    applications: ['Office printing', 'Commercial printing', 'General-purpose copying'],
    productType: 'Copier paper',
    gsm: 'By requirement',
    format: 'Sheet (A4 / cut size)',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=85&auto=format&fit=crop',
    imageAlt: 'White copier paper reams for office printing',
  },
  {
    id: 'book-paper',
    slug: 'book-paper',
    name: 'Book Paper (NS)',
    category: 'printing-publishing',
    categoryLabel: 'Printing & Publishing',
    headline: 'Publishing-grade paper for books and print.',
    overview: 'Book paper for publishing and printing applications.',
    applications: ['Books', 'Publications', 'Educational materials', 'Commercial printing'],
    productType: 'Book paper',
    gsm: 'By requirement',
    format: 'Sheet or reel',
    image: '/images/book-paper.png',
    imageAlt: 'Uncoated book paper ream and open book',
  },
  {
    id: 'newsprint',
    slug: 'newsprint',
    name: 'Newsprint',
    category: 'printing-publishing',
    categoryLabel: 'Printing & Publishing',
    headline: 'Publication-grade newsprint.',
    overview: 'Newsprint paper for newspaper and publication printing applications.',
    applications: ['Newspapers', 'Publications', 'Commercial print runs'],
    productType: 'Newsprint',
    gsm: 'By requirement',
    format: 'Reel',
    image: '/images/newsprint.png',
    imageAlt: 'Newsprint roll and printed newspaper',
  },
  {
    id: 'thermal-paper',
    slug: 'thermal-paper',
    name: 'Thermal Paper',
    category: 'specialty-industrial',
    categoryLabel: 'Specialty & Industrial',
    headline: 'Direct thermal printing substrate.',
    overview: 'Thermal paper for direct thermal printing applications.',
    applications: ['POS receipts', 'Billing', 'ATM receipts', 'Tickets', 'Labels'],
    productType: 'Thermal paper',
    gsm: 'By requirement',
    format: 'Roll',
    image: '/images/thermal-paper.png',
    imageAlt: 'Thermal paper rolls for POS and retail printing',
  },
  {
    id: 'grease-proof',
    slug: 'grease-proof',
    name: 'Grease Proof Paper',
    category: 'specialty-industrial',
    categoryLabel: 'Specialty & Industrial',
    headline: 'Food-safe wrapping and liner paper.',
    overview: 'Grease proof paper for food packaging and takeaway applications.',
    applications: ['Burger wrapping', 'Sandwich wrapping', 'Bakery products', 'Takeaway packaging'],
    productType: 'Grease proof paper',
    gsm: 'By requirement',
    format: 'Sheet or reel',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=85&auto=format&fit=crop',
    imageAlt: 'Grease proof paper for food wrapping',
  },
];

export const PAPER_SPEC_FIELDS = [
  'Product type',
  'Application',
  'GSM',
  'Reel or sheet format',
  'Width / size',
  'Packing',
  'Quantity',
  'Destination port',
] as const;

export function getPaperByCategory(categoryId: string): PaperProduct[] {
  return PAPER_PRODUCTS.filter((p) => p.category === categoryId);
}

export function getPaperBySlug(slug: string): PaperProduct | undefined {
  return PAPER_PRODUCTS.find((p) => p.slug === slug);
}
