import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className = '', delay = 0, y = 32 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration: 0.7,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [reduced, delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  childSelector?: string;
}

export function StaggerReveal({
  children,
  className = '',
  childSelector = '.reveal-item',
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current!.querySelectorAll(childSelector), {
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [reduced, childSelector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current || !imageRef.current) return;

    const quickY = gsap.quickTo(imageRef.current, 'y', { duration: 0.4, ease: 'power2.out' });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          quickY(self.progress * -40 + 20);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="h-[115%] w-full object-cover will-change-transform"
        loading="lazy"
      />
    </div>
  );
}

export { gsap, ScrollTrigger };
