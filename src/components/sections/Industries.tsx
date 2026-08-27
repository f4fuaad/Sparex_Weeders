import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { INDUSTRIES } from '../../lib/constants';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SectionHeading } from '../ui/ChapterMarker';

gsap.registerPlugin(ScrollTrigger);

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.industry-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.industry-grid',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="section-surface py-24 md:py-32"
      aria-labelledby="industries-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          chapter="04"
          label="Industries We Serve"
          title="Supporting multiple paper-using industries."
          description="From corrugated board manufacturers to pharmaceutical carton makers — we source materials aligned to your production requirements."
        />

        <div className="industry-grid mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <article
              key={industry.title}
              className="industry-card group relative border border-warm-stone/40 bg-cream p-6 md:p-8 paper-edge-shadow transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-display text-3xl font-bold text-sparex-red/15 transition-colors group-hover:text-sparex-red/30">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
                {industry.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                {industry.description}
              </p>
              <div
                className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-sparex-red transition-transform duration-300 group-hover:scale-y-100"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
