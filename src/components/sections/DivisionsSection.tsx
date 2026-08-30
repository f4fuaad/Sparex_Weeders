import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DIVISIONS, SOURCING_PATHWAY } from '../../data/divisions';
import { StaggerReveal, ParallaxImage } from '../motion/Reveal';
import { SectionLabel, SectionTitle } from './HomeHero';

export default function DivisionsSection() {
  const division = DIVISIONS[0];

  return (
    <section id="divisions" className="surface-bone paper-grain py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerReveal>
          <SectionLabel index="§01" label="Current focus" />
          <SectionTitle className="reveal-item mt-4 max-w-3xl">
            Power weeder engine spare parts.
          </SectionTitle>
          <p className="reveal-item mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
            Sparex currently supports requirement-led import-export sourcing for power weeder and
            compatible small-engine spare parts — indexed from supplied catalogues, not an
            open-ended parts list.
          </p>

          {division && (
            <article className="reveal-item mt-12 grid overflow-hidden border border-charcoal/10 bg-cream lg:grid-cols-[280px_1fr]">
              <ParallaxImage
                src={division.image}
                alt={division.imageAlt}
                className="min-h-[220px] lg:min-h-full"
              />
              <div className="flex flex-col p-6 md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm text-sparex-red">Division {division.index}</span>
                  <span className="label-tech">{division.specCue}</span>
                </div>
                <h3 className="font-display mt-3 text-2xl text-ink md:text-3xl">{division.title}</h3>
                <p className="mt-1 text-sm italic text-kraft">{division.tagline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/70">
                  {division.description}
                </p>
                <Link
                  to={division.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sparex-red transition-colors hover:text-rust"
                >
                  Open catalogue <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          )}

          <div className="reveal-item mt-6 border border-dashed border-charcoal/15 bg-paper/50 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-mono text-xs text-brass">Pathway {SOURCING_PATHWAY.index}</span>
                <h3 className="font-display mt-2 text-xl text-ink">{SOURCING_PATHWAY.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-charcoal/65">{SOURCING_PATHWAY.description}</p>
              </div>
              <Link
                to={SOURCING_PATHWAY.href}
                className="inline-flex shrink-0 items-center gap-2 border border-charcoal/15 px-5 py-3 text-sm transition-colors hover:border-sparex-red hover:text-sparex-red"
              >
                Send enquiry <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
