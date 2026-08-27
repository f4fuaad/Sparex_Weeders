import SEOHead from '../components/seo/SEOHead';
import Hero from '../components/sections/Hero';
import AboutIntro from '../components/sections/AboutIntro';
import ProductStory from '../components/sections/ProductStory';
import Specifications from '../components/sections/Specifications';
import Industries from '../components/sections/Industries';
import Markets from '../components/sections/Markets';
import WhySparex from '../components/sections/WhySparex';
import Process from '../components/sections/Process';
import ForBuyers from '../components/sections/ForBuyers';
import ForManufacturers from '../components/sections/ForManufacturers';
import QualityVision from '../components/sections/QualityVision';
import ConversionCTA from '../components/sections/ConversionCTA';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Sparex India | Paper & Paperboard Export Trading Company"
        description="Sparex India supplies kraft paper, testliner, paperboard and specialty papers for packaging, printing and converting industries. Reliable sourcing for international buyers."
        path="/"
      />
      <Hero />
      <AboutIntro />
      <ProductStory />
      <Specifications />
      <Industries />
      <Markets />
      <WhySparex />
      <Process />
      <ForBuyers />
      <ForManufacturers />
      <QualityVision />
      <ConversionCTA />
    </>
  );
}
