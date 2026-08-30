import { Link, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ENGINE_FAMILIES, DIVISIONS } from '../data/divisions';
import { POWER_WEEDER } from '../lib/siteConfig';
import SEOHead from '../components/seo/SEOHead';
import { PageShell } from '../components/layout/Layout';
import { Reveal, ParallaxImage } from '../components/motion/Reveal';
import { SectionLabel, SectionTitle } from '../components/sections/HomeHero';

export default function DivisionsPage() {
  const division = DIVISIONS[0];
  if (!division) return <Navigate to="/engine-spares" replace />;

  return (
    <>
      <SEOHead
        title="Engine Families — 170F, 173F, 177F, 186F | Sparex India"
        description="Power weeder engine spare parts across 170F, 173F, 177F, and 186F families. Requirement-led import-export sourcing from Sparex India."
        path="/divisions"
      />
      <PageShell>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <Reveal>
            <SectionLabel index="Index" label="Engine families" />
            <SectionTitle className="mt-4 max-w-3xl">{POWER_WEEDER.headline}</SectionTitle>
            <p className="mt-4 max-w-2xl text-charcoal/70">{POWER_WEEDER.description}</p>
          </Reveal>

          <Reveal className="mt-12">
            <article className="grid overflow-hidden border border-charcoal/10 lg:grid-cols-2">
              <ParallaxImage src={division.image} alt={division.imageAlt} className="min-h-[280px]" />
              <div className="flex flex-col justify-center bg-paper p-8 md:p-12">
                <span className="font-mono text-sm text-sparex-red">Division {division.index}</span>
                <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">{division.title}</h2>
                <p className="mt-2 italic text-kraft">{division.tagline}</p>
                <p className="mt-5 leading-relaxed text-charcoal/70">{division.description}</p>
                <p className="label-tech mt-4">{division.specCue}</p>
                <Link
                  to={division.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-sparex-red hover:text-rust"
                >
                  Open catalogue <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ENGINE_FAMILIES.map((f, i) => (
              <Reveal key={f.id} delay={i * 0.06}>
                <Link
                  to={`/engine-spares?family=${f.id}`}
                  className="block border border-charcoal/10 bg-cream p-6 transition-colors hover:border-sparex-red/40"
                >
                  <span className="font-mono text-2xl text-sparex-red">{f.label}</span>
                  <p className="label-meta mt-2 capitalize">{f.fuel}</p>
                  <p className="mt-3 text-sm text-charcoal/65">{f.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
