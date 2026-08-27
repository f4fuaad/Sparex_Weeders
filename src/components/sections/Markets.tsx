import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe2 } from 'lucide-react';
import { MARKETS } from '../../lib/constants';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SectionHeading } from '../ui/ChapterMarker';

gsap.registerPlugin(ScrollTrigger);

export default function Markets() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.market-card', {
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
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
      id="markets"
      className="section-warm border-y border-warm-stone/40 py-24 md:py-32"
      aria-labelledby="markets-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          chapter="05"
          label="Our Markets"
          title="Connecting paper supply with international buyers."
          description="Sparex India is focused on developing international markets for paper and paperboard products. Our goal is to connect the right product with the right market at the right commercial value."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {MARKETS.map((market) => (
            <article
              key={market.region}
              className="market-card paper-edge-shadow flex gap-5 border border-warm-stone/40 bg-cream p-6 md:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-warm-stone/50 bg-ivory text-kraft">
                <Globe2 size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">{market.region}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                  {market.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
