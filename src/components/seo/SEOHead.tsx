import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../../lib/constants';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
}

export default function SEOHead({
  title,
  description,
  path = '',
  type = 'website',
}: SEOHeadProps) {
  const url = `${COMPANY.canonicalBase}${path}`;
  const fullTitle = title.includes('Sparex India') ? title : `${title} | Sparex India`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    description,
    url: COMPANY.canonicalBase,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.line1,
      addressLocality: 'Chennai',
      postalCode: '600066',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Tamil Nadu',
    },
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={`${COMPANY.canonicalBase}/sparex-logo.png`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${COMPANY.canonicalBase}/sparex-logo.png`} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
