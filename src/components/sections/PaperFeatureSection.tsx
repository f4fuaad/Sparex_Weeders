import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PAPER_PRODUCTS } from '../../data/products';
import { ParallaxImage, Reveal } from '../motion/Reveal';
import { SectionLabel, SectionTitle } from './HomeHero';
import Button from '../ui/Button';

const FEATURED = PAPER_PRODUCTS.filter((p) =>
  ['kraft-paper', 'sack-kraft', 'mg-kraft', 'white-top-testliner', 'wet-strength'].includes(p.id),
);

export default function PaperFeatureSection() {
  return (
    <section className="surface-cream paper-grain py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel index="§03" label="Paper & paperboard" />
          <SectionTitle className="mt-4 max-w-3xl">
            Materials that move from source to production.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
            Kraft papers, testliner, paperboard, and specialty grades sourced by requirement.
            Exact availability and specifications confirmed against buyer requirement and suitable
            supply source.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.05}>
              <article className="group overflow-hidden border border-charcoal/10 bg-paper">
                <ParallaxImage
                  src={product.image}
                  alt={product.imageAlt}
                  className="aspect-[4/3]"
                />
                <div className="p-5">
                  <span className="label-tech">{product.productType}</span>
                  <h3 className="font-display mt-2 text-xl text-ink">{product.name}</h3>
                  <p className="mt-2 text-sm text-charcoal/65 line-clamp-2">{product.headline}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/paper-paperboard" variant="primary" icon={ArrowRight}>
            View paper division
          </Button>
          <Link
            to="/contact?division=paper-paperboard"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm text-charcoal/70 transition-colors hover:text-sparex-red"
          >
            Ask about specifications <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
