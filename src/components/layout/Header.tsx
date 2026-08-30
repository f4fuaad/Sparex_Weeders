import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../../lib/constants';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  overlay?: boolean;
}

export default function Header({ overlay = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isSolid = scrolled || !overlay;
  const lightText = overlay && !scrolled;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isSolid
            ? 'header-glass'
            : overlay
              ? 'header-glass-dark'
              : 'header-glass'
        }`}
      >
        <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="shrink-0" aria-label={`${COMPANY.name} — Home`}>
            <img
              src="/sparex-wordmark.svg"
              alt="Sparex India"
              className={`h-8 w-auto object-contain object-left md:h-9 ${lightText ? 'brightness-0 invert' : ''}`}
              width={160}
              height={36}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  lightText
                    ? 'text-paper/85 hover:text-paper'
                    : pathname === link.href
                      ? 'text-sparex-red'
                      : 'text-charcoal/75 hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href={getWhatsAppUrl('engine')}
              external
              variant={lightText ? 'ghost-light' : 'secondary'}
              icon={MessageCircle}
              className="!py-2.5 !px-4 !text-xs"
              aria-label="WhatsApp Sales"
            >
              WhatsApp
            </Button>
            <Button to="/contact" variant="primary" className="!py-2.5 !px-4 !text-xs">
              Trade enquiry
            </Button>
          </div>

          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center lg:hidden ${
              lightText ? 'text-paper' : 'text-charcoal'
            }`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export function HeaderCloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="flex h-10 w-10 items-center justify-center text-charcoal"
      aria-label="Close menu"
    >
      <X size={22} />
    </button>
  );
}
