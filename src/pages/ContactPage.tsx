import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { SectionHeading } from '../components/ui/ChapterMarker';
import EnquiryForm from '../components/sections/EnquiryForm';
import { COMPANY } from '../lib/constants';
import { getWhatsAppUrl } from '../lib/whatsapp';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Sparex India — Paper & Paperboard Enquiries"
        description={`Contact Sparex India for paper and paperboard export enquiries. Call ${COMPANY.phone}, email ${COMPANY.email}, or WhatsApp our sales team.`}
        path="/contact"
      />

      <div className="section-warm border-b border-warm-stone/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            chapter="Contact"
            title="Let's talk about your paper requirement."
            description="Send us your product specification and quantity. We will review your requirement and provide a suitable commercial offer."
          />
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <aside className="lg:col-span-4">
            <div className="paper-edge-shadow sticky top-28 border border-warm-stone/40 bg-cream p-8">
              <h2 className="font-display text-lg font-bold text-ink">{COMPANY.legalName}</h2>
              <address className="mt-4 not-italic text-sm leading-relaxed text-charcoal/75 border-l-2 border-sparex-red pl-4">
                {COMPANY.address.line1}
                <br />
                {COMPANY.address.city}
                <br />
                {COMPANY.address.state}
              </address>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="group flex items-center gap-3 text-charcoal transition-colors hover:text-sparex-red"
                  >
                    <span className="flex h-10 w-10 items-center justify-center bg-charcoal text-ivory transition-colors group-hover:bg-sparex-red">
                      <Phone size={18} aria-hidden="true" />
                    </span>
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="group flex items-center gap-3 text-charcoal transition-colors hover:text-sparex-red"
                  >
                    <span className="flex h-10 w-10 items-center justify-center bg-charcoal text-ivory transition-colors group-hover:bg-sparex-red">
                      <Mail size={18} aria-hidden="true" />
                    </span>
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppUrl('general')}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-charcoal transition-colors hover:text-whatsapp"
                  >
                    <span className="flex h-10 w-10 items-center justify-center bg-whatsapp text-white">
                      <MessageCircle size={18} aria-hidden="true" />
                    </span>
                    WhatsApp Sales
                  </a>
                </li>
              </ul>

              <div className="mt-8 space-y-1 text-xs text-paper-grey">
                <p>GSTIN: {COMPANY.gstin}</p>
                <p>State: {COMPANY.state}</p>
              </div>

              <div className="mt-6 flex items-start gap-2 text-sm text-charcoal/65">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sparex-red" aria-hidden="true" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="paper-edge-shadow border border-warm-stone/40 bg-cream p-6 md:p-10">
              <EnquiryForm showTitle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
