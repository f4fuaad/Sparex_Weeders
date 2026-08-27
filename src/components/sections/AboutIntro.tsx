import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../ui/ChapterMarker';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function AboutIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
      id="about"
      className="relative section-warm py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="about-reveal lg:col-span-5">
            <SectionHeading
              chapter="01"
              label="About Us"
              title="Your trusted partner for paper & paperboard."
            />
          </div>

          <div className="about-reveal lg:col-span-7 lg:pt-16">
            <div className="paper-edge-shadow border-l-2 border-sparex-red bg-cream p-8 md:p-10">
              <p className="text-lg leading-relaxed text-charcoal/85">
                Sparex India specializes in the sourcing and international trading of paper,
                paperboard and packaging materials. We work with manufacturers and suppliers to
                serve customers looking for reliable supply, competitive pricing and products that
                meet their required specifications.
              </p>
              <p className="mt-6 text-base leading-relaxed text-charcoal/70">
                Our business is focused on building long-term relationships with paper mills,
                manufacturers, converters, distributors and international buyers. Whether you are
                looking for a single container or regular supply, we work to find the right product
                and supply solution for your market.
              </p>
              <p className="mt-6 text-sm text-paper-grey">
                Our focus is simple — understand your requirement, identify the right supply
                source, offer competitive solutions and support you throughout the export process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
