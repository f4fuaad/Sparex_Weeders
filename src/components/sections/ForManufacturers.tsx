import { ArrowRight } from 'lucide-react';
import { MANUFACTURER_PRODUCTS, COMPANY } from '../../lib/constants';
import { SectionHeading } from '../ui/ChapterMarker';
import Button from '../ui/Button';

export default function ForManufacturers() {
  return (
    <section
      id="for-manufacturers"
      className="section-warm py-24 md:py-32"
      aria-labelledby="for-manufacturers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            chapter="09"
            label="For Manufacturers"
            title="Partner with Sparex India."
            description="Are you a paper mill or manufacturer looking to expand your international sales? We work with manufacturers and suppliers to develop international business opportunities."
          />

          <div className="paper-edge-shadow border-l-2 border-sparex-red bg-cream p-8">
            <p className="text-base leading-relaxed text-charcoal/75">
              We are interested in building long-term relationships with manufacturers of:
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {MANUFACTURER_PRODUCTS.map((product) => (
                <li
                  key={product}
                  className="flex items-center gap-2 border border-warm-stone/30 bg-ivory px-3 py-2 text-sm text-charcoal/75"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sparex-red" aria-hidden="true" />
                  {product}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${COMPANY.email}?subject=Supply%20Partnership%20Enquiry`} variant="primary">
                Become a Supply Partner
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
