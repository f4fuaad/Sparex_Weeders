import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { PageShell } from '../components/layout/Layout';
import {
  PAPER_CATEGORIES,
  PAPER_PRODUCTS,
  PAPER_SPEC_FIELDS,
  getPaperByCategory,
} from '../data/products';
import { ParallaxImage, Reveal, StaggerReveal } from '../components/motion/Reveal';
import { SectionLabel, SectionTitle } from '../components/sections/HomeHero';
import Button from '../components/ui/Button';
import { getWhatsAppUrl } from '../lib/whatsapp';

export default function PaperPage() {
  const [activeCategory, setActiveCategory] = useState<string>(PAPER_CATEGORIES[0].id);
  const products = getPaperByCategory(activeCategory);

  return (
    <>
      <SEOHead
        title="Paper & Paperboard — Kraft, Testliner, Board | Sparex India"
        description="Paper and paperboard division: kraft paper, sack kraft, MG kraft, white top testliner, wet strength, and paperboard grades sourced by requirement."
        path="/paper-paperboard"
      />
      <PageShell>
        <div className="surface-bone border-b border-charcoal/10">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <Reveal>
              <SectionLabel index="Div.02" label="Paper & paperboard" />
              <SectionTitle className="mt-4 max-w-3xl">
                Materials that move from source to production.
              </SectionTitle>
              <p className="mt-4 max-w-2xl text-charcoal/70">
                Exact availability and specifications are confirmed against the buyer requirement
                and suitable supply source. No unverified range or stock claims.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="sticky top-[var(--header-height)] z-20 border-b border-charcoal/10 bg-cream/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-4 sm:px-6 lg:px-8">
            {PAPER_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-sparex-red text-white'
                    : 'border border-charcoal/15 text-charcoal/70 hover:border-sparex-red'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <StaggerReveal>
            <div className="reveal-item mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {PAPER_SPEC_FIELDS.map((field) => (
                <div key={field} className="border border-charcoal/10 bg-paper px-4 py-3">
                  <span className="label-tech">{field}</span>
                  <p className="mt-1 text-xs text-charcoal/55">Confirmed on enquiry</p>
                </div>
              ))}
            </div>
          </StaggerReveal>

          <div className="space-y-20">
            {products.map((product, index) => (
              <Reveal key={product.id}>
                <article id={product.slug} className="scroll-mt-28">
                  <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    <ParallaxImage
                      src={product.image}
                      alt={product.imageAlt}
                      className="aspect-[4/3] border border-charcoal/10"
                    />
                    <div>
                      <span className="label-tech">{product.categoryLabel}</span>
                      <h2 className="font-display mt-2 text-3xl text-ink md:text-4xl">
                        {product.name}
                      </h2>
                      <p className="mt-2 italic text-kraft">{product.headline}</p>
                      <p className="mt-5 leading-relaxed text-charcoal/70">{product.overview}</p>

                      <dl className="mt-8 grid gap-3 border-t border-charcoal/10 pt-6 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="label-meta">Product type</dt>
                          <dd className="mt-1 text-charcoal">{product.productType}</dd>
                        </div>
                        {product.gsm && (
                          <div>
                            <dt className="label-meta">GSM</dt>
                            <dd className="mt-1 text-charcoal">{product.gsm}</dd>
                          </div>
                        )}
                        {product.format && (
                          <div>
                            <dt className="label-meta">Format</dt>
                            <dd className="mt-1 text-charcoal">{product.format}</dd>
                          </div>
                        )}
                        {product.width && (
                          <div>
                            <dt className="label-meta">Width / size</dt>
                            <dd className="mt-1 text-charcoal">{product.width}</dd>
                          </div>
                        )}
                        {product.packing && (
                          <div>
                            <dt className="label-meta">Packing</dt>
                            <dd className="mt-1 text-charcoal">{product.packing}</dd>
                          </div>
                        )}
                      </dl>

                      <div className="mt-8">
                        <h3 className="label-meta mb-3">Applications</h3>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {product.applications.map((app) => (
                            <li
                              key={app}
                              className="flex items-center gap-2 border border-charcoal/8 bg-paper px-3 py-2 text-sm text-charcoal/70"
                            >
                              <span className="h-1 w-1 bg-sparex-red" aria-hidden="true" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Button
                          to={`/contact?division=paper-paperboard&product=${product.slug}`}
                          variant="primary"
                        >
                          Enquire about {product.name}
                        </Button>
                        <Button
                          href={getWhatsAppUrl('paper')}
                          external
                          variant="whatsapp"
                          icon={MessageCircle}
                        >
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                  {index < products.length - 1 && (
                    <hr className="mt-20 border-charcoal/10" />
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {PAPER_PRODUCTS.length > products.length && (
            <p className="mt-16 text-center text-sm text-charcoal/55">
              Additional grades available across other categories.{' '}
              <Link to="/contact?division=paper-paperboard" className="text-sparex-red hover:underline">
                Send a specification-led enquiry
              </Link>
            </p>
          )}
        </div>
      </PageShell>
    </>
  );
}
