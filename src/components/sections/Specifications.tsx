import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SPECIFICATIONS } from '../../lib/constants';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SectionHeading } from '../ui/ChapterMarker';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Specifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.spec-item', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
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
      id="specifications"
      className="section-warm border-y border-warm-stone/40 py-24 md:py-32"
      aria-labelledby="spec-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            chapter="03"
            label="Your Requirement. Our Sourcing."
            title="Supply according to your specification."
            description="Different applications require different paper specifications. Tell us what you need, and we will work to identify a suitable supply source."
          />

          <div>
            <p className="mb-8 text-sm leading-relaxed text-charcoal/70">
              Paper and paperboard requirements differ from one application to another.
              Specifications are confirmed with the buyer and supplier before order execution.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SPECIFICATIONS.map((spec) => (
                <div
                  key={spec}
                  className="spec-item paper-edge-shadow border border-warm-stone/30 bg-cream px-4 py-3 text-center"
                >
                  <span className="text-sm font-medium text-charcoal">{spec}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/contact" variant="primary">
                Send Your Requirement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
