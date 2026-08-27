import { SectionHeading } from '../ui/ChapterMarker';

export default function QualityVision() {
  return (
    <section className="section-surface border-y border-warm-stone/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading
              chapter="10"
              label="Quality & Commitment"
              title="Quality starts with the right supply source."
            />
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div className="paper-edge-shadow border border-warm-stone/40 bg-cream p-8">
              <p className="text-base leading-relaxed text-charcoal/75">
                We understand that paper quality and consistency are critical for manufacturers
                and converters. Our focus is to match each buyer with a suitable product and
                manufacturer based on the agreed specifications.
              </p>
              <p className="mt-4 text-sm text-charcoal/65">
                Before an order is finalized, we encourage clear confirmation of: Product Grade,
                GSM, Dimensions, Technical Specifications, Packing, Quantity, and Delivery Terms.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <article className="border border-warm-stone/40 bg-ivory p-6">
                <span className="label-caps text-kraft">Our Vision</span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  Building a trusted global paper trading business
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  To build Sparex India into a trusted international trading partner for paper,
                  paperboard and packaging materials, connecting reliable manufacturers with
                  customers across global markets.
                </p>
              </article>

              <article className="border border-warm-stone/40 bg-ivory p-6">
                <span className="label-caps text-kraft">Our Mission</span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  Reliable supply. Professional service. Long-term partnerships.
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-charcoal/65">
                  {[
                    'Reliable sourcing',
                    'Competitive commercial solutions',
                    'Suitable product specifications',
                    'Professional export coordination',
                    'Consistent communication',
                    'Long-term supply relationships',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-px w-3 bg-sparex-red" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
