import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/ChapterMarker';
import Button from '../ui/Button';
import EnquiryForm from './EnquiryForm';

export default function ForBuyers() {
  return (
    <section
      id="for-buyers"
      className="section-surface border-y border-warm-stone/40 py-24 md:py-32"
      aria-labelledby="for-buyers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              chapter="08"
              label="For Buyers"
              title="Tell us what you need."
              description="Looking for a reliable source of paper or paperboard? Send us your requirement and our team will work to identify a suitable supply option."
            />

            <div className="mt-8 paper-edge-shadow border border-warm-stone/40 bg-cream p-6">
              <p className="label-caps mb-4">Please share</p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                {[
                  'Product',
                  'GSM',
                  'Reel / Sheet',
                  'Width / Size',
                  'Quantity',
                  'Application',
                  'Destination Country',
                  'Destination Port',
                  'Required Delivery',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-sparex-red" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-charcoal/60">
                We will review your requirement and provide a suitable commercial offer.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Request a Quote
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>

          <div className="paper-edge-shadow border border-warm-stone/40 bg-cream p-6 md:p-8">
            <EnquiryForm compact showTitle={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
