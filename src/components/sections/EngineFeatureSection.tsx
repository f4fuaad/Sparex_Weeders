import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ENGINE_FAMILIES } from '../../data/divisions';
import { POWER_WEEDER, POWER_WEEDER_IMAGES, ENGINE_PARTS_IMAGE_ALT } from '../../lib/siteConfig';
import { Reveal } from '../motion/Reveal';
import { SectionLabel, SectionTitle } from './HomeHero';
import Button from '../ui/Button';

export default function EngineFeatureSection() {
  return (
    <section className="surface-dark paper-grain py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel index="§02" label="Engine families" dark />
            <SectionTitle className="mt-4 text-paper">
              Four catalogues. One power weeder focus.
            </SectionTitle>
            <p className="mt-5 text-base leading-relaxed text-paper/65">
              {POWER_WEEDER.description} {POWER_WEEDER.application}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {ENGINE_FAMILIES.map((f) => (
                <Link
                  key={f.id}
                  to={`/engine-spares?family=${f.id}`}
                  className="border border-paper/10 p-4 transition-colors hover:border-brass/50 hover:bg-white/5"
                >
                  <span className="font-mono text-lg text-sparex-red">{f.label}</span>
                  <p className="label-meta mt-1 capitalize text-paper/45">{f.fuel}</p>
                  <p className="mt-2 text-xs text-paper/55">{f.description}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/engine-spares" variant="primary" icon={ArrowRight}>
                Browse spare parts catalogue
              </Button>
              <Button to="/contact?division=engine-spares" variant="ghost-light">
                Request availability
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden border border-paper/10">
              <img
                src={POWER_WEEDER_IMAGES.engineParts}
                alt={ENGINE_PARTS_IMAGE_ALT}
                className="h-full w-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite to-transparent p-6">
                <p className="label-meta text-paper/50">Catalogue-indexed sourcing</p>
                <p className="mt-2 font-mono text-xs text-paper/70">
                  170F · 173F · 177F · 186F · search by item code
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
