import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { PageShell } from '../components/layout/Layout';
import EnquiryForm from '../components/sections/EnquiryForm';
import { COMPANY } from '../lib/constants';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { Reveal } from '../components/motion/Reveal';
import { SectionLabel, SectionTitle } from '../components/sections/HomeHero';
import Button from '../components/ui/Button';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact — Power Weeder Engine Spares | Sparex India"
        description={`Contact Sparex India for power weeder engine spare parts. Call ${COMPANY.phone}, email ${COMPANY.email}, or submit a parts enquiry.`}
        path="/contact"
      />
      <PageShell>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <Reveal>
                <SectionLabel index="Enq." label="Parts enquiry" />
                <SectionTitle className="mt-4">Request power weeder spare parts.</SectionTitle>
                <p className="mt-4 max-w-xl text-charcoal/70">
                  Share engine model, item code, and quantity where possible. Submitting opens your
                  email client — it does not confirm delivery until the message is sent.
                </p>
              </Reveal>

              <Reveal className="mt-10">
                <EnquiryForm />
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <aside className="space-y-6">
                <div className="border border-charcoal/10 bg-paper p-6">
                  <h2 className="label-meta mb-4">Direct contact</h2>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 text-charcoal hover:text-sparex-red"
                      >
                        <Phone size={18} className="text-sparex-red" aria-hidden="true" />
                        {COMPANY.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="flex items-center gap-3 text-charcoal hover:text-sparex-red"
                      >
                        <Mail size={18} className="text-sparex-red" aria-hidden="true" />
                        {COMPANY.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={getWhatsAppUrl('engine')}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-charcoal hover:text-whatsapp"
                      >
                        <MessageCircle size={18} className="text-whatsapp" aria-hidden="true" />
                        WhatsApp Sales
                      </a>
                    </li>
                    <li className="flex items-start gap-3 text-charcoal/75">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-sparex-red" aria-hidden="true" />
                      {COMPANY.address.full}
                    </li>
                  </ul>
                  <p className="label-meta mt-5">GSTIN: {COMPANY.gstin}</p>
                </div>

                <div className="border border-charcoal/10 bg-bone/50 p-6">
                  <h2 className="label-meta mb-3">WhatsApp alternative</h2>
                  <p className="text-sm text-charcoal/65">
                    For faster responses, continue directly on WhatsApp with your requirement details.
                  </p>
                  <Button
                    href={getWhatsAppUrl('engine')}
                    external
                    variant="whatsapp"
                    icon={MessageCircle}
                    className="mt-4 w-full"
                  >
                    Open WhatsApp
                  </Button>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </PageShell>
    </>
  );
}
