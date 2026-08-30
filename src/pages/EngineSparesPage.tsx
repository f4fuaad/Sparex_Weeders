import { useSearchParams } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { PageShell } from '../components/layout/Layout';
import EngineCatalogue from '../components/catalogue/EngineCatalogue';
import { DownloadLink } from '../components/ui/Button';
import { ENGINE_CATALOGUE_FILES, ENGINE_PRODUCTS } from '../data/engineProducts';
import { POWER_WEEDER, POWER_WEEDER_IMAGES } from '../lib/siteConfig';
import { Reveal } from '../components/motion/Reveal';
import { SectionLabel, SectionTitle } from '../components/sections/HomeHero';

export default function EngineSparesPage() {
  const [params] = useSearchParams();
  const initialFamily = params.get('family');

  return (
    <>
      <SEOHead
        title="Power Weeder Engine Spare Parts — 170F, 173F, 177F, 186F | Sparex India"
        description="Browse power weeder engine spare parts. Search by item code, filter by 170F, 173F, 177F, or 186F families. Request availability and quotation."
        path="/engine-spares"
      />
      <PageShell>
        <div className="border-b border-charcoal/10 bg-graphite text-paper">
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
              <img
                src={POWER_WEEDER_IMAGES.engineParts}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <Reveal className="relative">
              <SectionLabel index="Cat.01" label="Power weeder spares" dark />
              <SectionTitle className="mt-4 text-paper">
                Spare parts catalogue — 170F · 173F · 177F · 186F
              </SectionTitle>
              <p className="mt-4 max-w-2xl text-paper/65">
                {POWER_WEEDER.description} Item codes and names sourced from supplied catalogues.
                Availability confirmed against enquiry.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {ENGINE_CATALOGUE_FILES.map((cat) => (
                  <DownloadLink
                    key={cat.file}
                    href={`./catalogues/${cat.file}`}
                    label={cat.label}
                    className="border-paper/20 text-paper hover:border-sparex-red hover:text-sparex-red"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <EngineCatalogue products={ENGINE_PRODUCTS} initialFamily={initialFamily} />
      </PageShell>
    </>
  );
}
