import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { COMPANY } from '../../lib/constants';
import { HERO_VIDEO, HERO_POSTER, POWER_WEEDER } from '../../lib/siteConfig';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-meta', { opacity: 0, y: 16, duration: 0.5 })
        .from('.hero-line', { opacity: 0, y: 48, duration: 0.75, stagger: 0.12 }, '-=0.2')
        .from('.hero-copy', { opacity: 0, y: 24, duration: 0.6 }, '-=0.35')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.5, stagger: 0.08 }, '-=0.3')
        .from('.hero-route', { opacity: 0, x: -20, duration: 0.55 }, '-=0.4');

      if (videoRef.current) {
        gsap.fromTo(videoRef.current, { scale: 1.08 }, { scale: 1, duration: 1.4, ease: 'power2.out' });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-graphite text-paper"
      aria-label="Hero"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={HERO_POSTER}
        aria-hidden="true"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="hero-meta mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="label-meta text-paper/55">CHENNAI / INDIA</span>
              <span className="hidden h-3 w-px bg-paper/20 sm:block" aria-hidden="true" />
              <span className="label-meta text-paper/55">POWER WEEDER · ENGINE SPARES</span>
            </div>

            <h1 className="font-display max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] tracking-tight">
              <span className="hero-line block">Parts that keep</span>
              <span className="hero-line block italic text-paper/90">power weeders moving.</span>
              <span className="hero-line mt-2 block text-[0.55em] not-italic text-paper/75">
                Import-export sourcing with intent.
              </span>
            </h1>

            <p className="hero-copy mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
              {COMPANY.name} connects buyers and supply partners for {POWER_WEEDER.description.toLowerCase()}
            </p>

            <div className="hero-cta mt-8 flex flex-wrap gap-3">
              <Button to="/engine-spares" variant="primary" icon={ArrowRight}>
                Browse spare parts catalogue
              </Button>
              <Button to="/contact?division=engine-spares" variant="ghost-light">
                Request a quotation
              </Button>
            </div>
          </div>

          <div className="hero-route border border-paper/15 bg-graphite/40 p-5 backdrop-blur-sm">
            <p className="label-meta text-paper/45">Engine families</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-sparex-red">170F</span>
                <span className="text-sm text-paper/80">Petrol — power weeder spares</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-sparex-red">173F</span>
                <span className="text-sm text-paper/80">Diesel — power weeder spares</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-sparex-red">177F</span>
                <span className="text-sm text-paper/80">Petrol — power weeder spares</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-sparex-red">186F</span>
                <span className="text-sm text-paper/80">Diesel — power weeder spares</span>
              </div>
            </div>
            <p className="label-meta mt-5 text-paper/40">
              Search by item code · request availability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${dark ? 'text-paper/50' : ''}`}>
      <span className="font-mono text-xs text-sparex-red">{index}</span>
      <span className="label-meta">{label}</span>
    </div>
  );
}

export function SectionTitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`font-display text-3xl leading-tight text-ink md:text-4xl lg:text-5xl ${className}`}>
      {children}
    </h2>
  );
}
