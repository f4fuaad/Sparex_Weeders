import SEOHead from '../components/seo/SEOHead';
import HomeHero from '../components/sections/HomeHero';
import DivisionsSection from '../components/sections/DivisionsSection';
import EngineFeatureSection from '../components/sections/EngineFeatureSection';
import ProcessSection, {
  MarketsSection,
  PathwaysSection,
  EnquiryCTA,
} from '../components/sections/ProcessSection';
import { POWER_WEEDER } from '../lib/siteConfig';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Sparex India | Power Weeder Engine Spare Parts"
        description={`${POWER_WEEDER.description} Search 170F, 173F, 177F, and 186F catalogue lines. Request availability from Chennai, India.`}
        path="/"
      />
      <HomeHero />
      <DivisionsSection />
      <EngineFeatureSection />
      <ProcessSection />
      <MarketsSection />
      <PathwaysSection />
      <EnquiryCTA />
    </>
  );
}
