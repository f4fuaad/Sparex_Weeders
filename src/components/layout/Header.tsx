import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '../../lib/constants';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import Button from '../ui/Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollHeader();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-parchment/95 backdrop-blur-md shadow-sm border-b border-warm-stone/30 py-2'
          : 'bg-parchment py-3'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0" aria-label="Sparex India — Home">
          <img
            src="/sparex-wordmark.svg"
            alt="Sparex India"
            className="h-8 w-auto md:h-10 object-contain object-left"
            width={180}
            height={48}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-charcoal/80 hover:text-sparex-red transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            href={getWhatsAppUrl('general')}
            external
            variant="ghost"
            icon={MessageCircle}
            className="!text-charcoal !border-charcoal/15 hover:!border-whatsapp hover:!text-whatsapp !py-2.5 !px-4 !bg-transparent"
            aria-label="WhatsApp Sales"
          >
            WhatsApp
          </Button>
          <Button href="/contact" variant="primary" className="!py-2.5">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-charcoal"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t border-warm-stone/30 bg-parchment px-4 py-4"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="py-3 text-base font-medium text-charcoal border-b border-paper-grey/15"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button
                href={getWhatsAppUrl('general')}
                external
                variant="whatsapp"
                icon={MessageCircle}
                aria-label="WhatsApp Sales"
              >
                WhatsApp Sales
              </Button>
              <Button href="/contact" variant="primary">
                Request a Quote
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
