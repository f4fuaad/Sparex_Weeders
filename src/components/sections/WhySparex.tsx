import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHY_SPAREX } from '../../lib/constants';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SectionHeading } from '../ui/ChapterMarker';

gsap.registerPlugin(ScrollTrigger);

export default function WhySparex() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.why-item', {
        x: -30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="section-surface border-y border-warm-stone/40 py-24 md:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <SectionHeading
            chapter="06"
            label="Why Sparex India"
            title="Why international buyers choose us."
            description="Reliable sourcing, competitive commercial solutions, and professional export coordination — built for long-term B2B partnerships."
          />

          <div className="space-y-8">
            {WHY_SPAREX.map((item, i) => (
              <div key={item.title} className="why-item flex gap-5">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="chapter-rule h-8" aria-hidden="true" />
                  <span className="mt-1 font-display text-xs font-bold text-sparex-red">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
