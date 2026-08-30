import { TRADE_PROCESS, MARKETS } from '../../lib/constants';
import { StaggerReveal, Reveal } from '../motion/Reveal';
import { SectionLabel, SectionTitle } from './HomeHero';
import Button from '../ui/Button';

export default function ProcessSection() {
  return (
    <section id="process" className="surface-bone paper-grain py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerReveal>
          <SectionLabel index="§03" label="Trade process" />
          <SectionTitle className="reveal-item mt-4 max-w-2xl">
            From part requirement to export coordination.
          </SectionTitle>
          <p className="reveal-item mt-4 max-w-2xl text-charcoal/70">
            Share the engine model, item code, and quantity — Sparex handles sourcing, alignment,
            and trade execution.
          </p>

          <div className="reveal-item mt-12 grid gap-px bg-charcoal/10 md:grid-cols-4">
            {TRADE_PROCESS.map((step) => (
              <div key={step.step} className="bg-cream p-6 md:p-8">
                <span className="font-mono text-2xl text-sparex-red">{step.step}</span>
                <h3 className="mt-4 text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{step.description}</p>
              </div>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}

export function MarketsSection() {
  return (
    <section id="markets" className="surface-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel index="§04" label="Markets" dark />
          <SectionTitle className="mt-4 text-paper">Power weeder spares, region by region.</SectionTitle>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MARKETS.map((m, i) => (
            <Reveal key={m.region} delay={i * 0.06}>
              <div className="border border-paper/10 p-6">
                <span className="font-mono text-xs text-sparex-red">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg text-paper">{m.region}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">{m.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PathwaysSection() {
  return (
    <section className="surface-cream paper-grain py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionLabel index="§05" label="For buyers" />
            <SectionTitle className="mt-4">Need power weeder parts?</SectionTitle>
            <p className="mt-4 text-charcoal/70">
              Share engine model, item code, quantity, and destination. Sparex identifies suitable
              supply options and supports quotation and order coordination.
            </p>
            <Button to="/contact?division=engine-spares&enquiryType=purchase" variant="primary" className="mt-6">
              Send parts enquiry
            </Button>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionLabel index="§06" label="For supply partners" />
            <SectionTitle className="mt-4">Manufacturers & distributors.</SectionTitle>
            <p className="mt-4 text-charcoal/70">
              Engine spare-part manufacturers and distributors can reach Sparex for supply
              partnership discussions aligned to buyer requirements.
            </p>
            <Button to="/contact?enquiryType=partnership" variant="secondary" className="mt-6">
              Supply partnership enquiry
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function EnquiryCTA() {
  return (
    <section className="surface-bone border-t border-charcoal/10 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel index="§07" label="Enquiry" />
          <SectionTitle className="mt-4">Send your parts requirement.</SectionTitle>
          <p className="mx-auto mt-4 max-w-lg text-charcoal/70">
            Availability confirmed against enquiry. Include engine model and item code where possible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact?division=engine-spares" variant="primary">Request quotation</Button>
            <Button to="/engine-spares" variant="secondary">Search catalogue</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
