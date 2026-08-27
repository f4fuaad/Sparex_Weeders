import { Phone, Mail, MapPin } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { SectionHeading } from '../components/ui/ChapterMarker';
import Button from '../components/ui/Button';
import { COMPANY, PRODUCT_CATEGORIES } from '../lib/constants';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Sparex India — Paper & Paperboard Export Trading"
        description="Sparex India specializes in sourcing and international trading of paper, paperboard and packaging materials for global B2B buyers."
        path="/about"
      />

      <div className="section-warm border-b border-warm-stone/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            chapter="About"
            title="Your trusted partner for paper & paperboard."
            description="We connect international buyers with reliable manufacturers and supply sources for packaging papers, paperboards and specialty paper products."
          />
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <h2 className="font-display text-2xl font-bold text-ink">
                Reliable sourcing for global markets
              </h2>
              <p className="text-base leading-relaxed text-charcoal/75">
                Sparex India specializes in the sourcing and international trading of paper,
                paperboard and packaging materials. We work with manufacturers and suppliers to
                serve customers looking for reliable supply, competitive pricing and products that
                meet their required specifications.
              </p>
              <p className="text-base leading-relaxed text-charcoal/75">
                Our business is focused on building long-term relationships with paper mills,
                manufacturers, converters, distributors and international buyers. Whether you are
                looking for a single container or regular supply, we work to find the right product
                and supply solution for your market.
              </p>
              <p className="text-base leading-relaxed text-charcoal/75">
                Our focus is simple — understand your requirement, identify the right supply
                source, offer competitive solutions and support you throughout the export process.
              </p>
            </div>

            <aside className="lg:col-span-5">
              <div className="paper-edge-shadow border-l-2 border-sparex-red bg-cream p-8">
                <h3 className="label-caps mb-4">Product categories</h3>
                <ul className="space-y-4">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <p className="text-sm font-semibold text-charcoal">{cat.name}</p>
                      <p className="mt-1 text-xs text-charcoal/60">{cat.description}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3 text-sm">
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-charcoal transition-colors hover:text-sparex-red"
                  >
                    <Phone size={16} className="text-sparex-red" aria-hidden="true" />
                    {COMPANY.phone}
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-2 text-charcoal transition-colors hover:text-sparex-red"
                  >
                    <Mail size={16} className="text-sparex-red" aria-hidden="true" />
                    {COMPANY.email}
                  </a>
                  <div className="flex items-start gap-2 text-charcoal/70">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-sparex-red" aria-hidden="true" />
                    <address className="not-italic">{COMPANY.address.full}</address>
                  </div>
                </div>

                <div className="mt-6">
                  <Button href="/contact" variant="primary" className="w-full">
                    Request a Quote
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
