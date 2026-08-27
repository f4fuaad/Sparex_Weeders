import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '../../lib/constants';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function ConversionCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-warm-stone/40 bg-ivory py-24 md:py-32 paper-grain"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(170,126,81,0.08) 3px, rgba(170,126,81,0.08) 4px)',
        }}
        aria-hidden="true"
      />

      <div className="cta-content relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <div className="chapter-rule h-12" aria-hidden="true" />
        </div>
        <span className="label-caps text-kraft">Contact Us</span>
        <h2
          id="cta-heading"
          className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl"
        >
          Let&apos;s talk about your paper requirement.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal/70 md:text-lg">
          Whether you are a paper converter, packaging manufacturer, distributor, importer or
          international trader — send us your product specification and quantity.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="primary">
            Request a Quote
          </Button>
          <Button
            href={getWhatsAppUrl('general')}
            external
            variant="whatsapp"
            icon={MessageCircle}
            aria-label="WhatsApp Sales"
          >
            WhatsApp Sales
          </Button>
          <Button
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            external
            variant="outline"
            icon={Phone}
            aria-label={`Call ${COMPANY.phone}`}
          >
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
