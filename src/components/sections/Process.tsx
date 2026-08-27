import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS } from '../../lib/constants';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SectionHeading } from '../ui/ChapterMarker';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-warm py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          chapter="07"
          label="Our Process"
          title="Simple. Transparent. Reliable."
          description="From requirement to shipment — a clear export trading workflow designed for international buyers and supply partners."
        />

        <div className="process-grid mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <article
              key={step.step}
              className="process-step border border-warm-stone/40 bg-cream p-6 paper-edge-shadow"
            >
              <span className="font-display text-2xl font-bold text-sparex-red">{step.step}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
