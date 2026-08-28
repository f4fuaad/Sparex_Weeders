import { Link } from 'react-router-dom';
import AnimatedHeading from '../ui/AnimatedHeading';
import FadeIn from '../ui/FadeIn';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Markets', href: '/#markets' },
  { label: 'Industries', href: '/#industries' },
] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white" aria-label="Hero">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="relative z-10 flex min-h-screen flex-col px-6 pt-6 md:px-12 lg:px-16">
        {/* Navbar */}
        <div className="liquid-glass flex items-center justify-between rounded-xl px-4 py-2">
          <Link
            to="/"
            className="shrink-0"
            aria-label="Sparex India — Home"
          >
            <img
              src="/sparex-wordmark.svg"
              alt="Sparex"
              className="h-8 w-auto min-w-[120px] object-contain object-left md:h-9"
              width={180}
              height={44}
            />
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-white transition-colors hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100"
          >
            Request a Quote
          </Link>
        </div>

        {/* Hero content — bottom aligned */}
        <div className="flex flex-1 flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            {/* Left column */}
            <div className="max-w-3xl lg:max-w-none">
              <AnimatedHeading
                text={'Paper & paperboard\nfor global markets.'}
                className="mb-4 text-4xl font-normal leading-[1.08] md:text-5xl lg:text-6xl xl:text-7xl"
              />

              <FadeIn delay={800} duration={1000}>
                <p className="mb-5 text-base text-gray-300 md:text-lg">
                  We connect international buyers with reliable manufacturers and supply
                  sources for packaging, printing, and converting industries.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="rounded-lg bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-100"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    to="/products"
                    className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black"
                  >
                    Explore Products
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right column — tag card */}
            <FadeIn delay={1400} duration={1000}>
              <div className="mt-8 flex items-end justify-start lg:mt-0 lg:justify-end">
                <div className="liquid-glass rounded-xl border border-white/20 px-6 py-3">
                  <p className="text-lg font-light md:text-xl lg:text-2xl">
                    Sourcing. Trading. Export.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
