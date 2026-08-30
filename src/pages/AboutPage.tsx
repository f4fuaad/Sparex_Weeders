import { Phone, Mail, MapPin } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { PageShell } from '../components/layout/Layout';
import { COMPANY, TRADE_PROCESS } from '../lib/constants';
import { POWER_WEEDER } from '../lib/siteConfig';
import { Reveal, StaggerReveal } from '../components/motion/Reveal';
import { SectionLabel, SectionTitle } from '../components/sections/HomeHero';
import Button from '../components/ui/Button';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Sparex India — Power Weeder Engine Spares"
        description="Sparex India is a focused import-export and sourcing company for power weeder engine spare parts across 170F, 173F, 177F, and 186F families."
        path="/about"
      />
      <PageShell>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <Reveal>
            <SectionLabel index="Co." label="About Sparex India" />
            <SectionTitle className="mt-4 max-w-3xl">
              Power weeder spares. Requirement-led trade.
            </SectionTitle>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-charcoal/75">
                <p>
                  {COMPANY.name} is a focused sourcing and import-export company based in Chennai,
                  India. The business connects buyers, distributors, and supply partners for power
                  weeder and small-engine spare parts.
                </p>
                <p>
                  {POWER_WEEDER.description} Work begins with understanding the buyer&apos;s
                  requirement — engine model, item code, specification, quantity, and destination —
                  and proceeds through sourcing, alignment, and coordinated trade execution.
                </p>
                <p>
                  Current catalogue coverage includes 170F, 173F, 177F, and 186F engine spare-part
                  families. Additional parts may be sourced by requirement where suitable supply can
                  be identified and confirmed.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="border border-charcoal/10 bg-paper p-6">
                <h2 className="label-meta mb-4">Registered office</h2>
                <address className="not-italic text-sm leading-relaxed text-charcoal/75">
                  {COMPANY.address.full}
                </address>
                <div className="tech-rule my-5" />
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 hover:text-sparex-red"
                    >
                      <Phone size={15} className="text-sparex-red" aria-hidden="true" />
                      {COMPANY.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-center gap-2 hover:text-sparex-red"
                    >
                      <Mail size={15} className="text-sparex-red" aria-hidden="true" />
                      {COMPANY.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin size={15} className="mt-0.5 text-sparex-red" aria-hidden="true" />
                    {COMPANY.location}
                  </li>
                </ul>
                <p className="label-meta mt-5">GSTIN: {COMPANY.gstin}</p>
              </aside>
            </Reveal>
          </div>

          <StaggerReveal className="mt-20">
            <SectionLabel index="Process" label="Trade process" />
            <SectionTitle className="reveal-item mt-4">How Sparex works with buyers.</SectionTitle>
            <div className="reveal-item mt-10 grid gap-px bg-charcoal/10 md:grid-cols-4">
              {TRADE_PROCESS.map((step) => (
                <div key={step.step} className="bg-cream p-6">
                  <span className="font-mono text-xl text-sparex-red">{step.step}</span>
                  <h3 className="mt-3 font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/65">{step.description}</p>
                </div>
              ))}
            </div>
          </StaggerReveal>

          <Reveal className="mt-16 text-center">
            <Button to="/contact?division=engine-spares" variant="primary">Request spare parts</Button>
          </Reveal>
        </div>
      </PageShell>
    </>
  );
}
