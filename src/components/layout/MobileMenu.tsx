import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '../../lib/constants';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import Button from '../ui/Button';
import { HeaderCloseButton } from './Header';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';
    firstFocusRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        type="button"
        className="absolute inset-0 bg-graphite/60"
        onClick={onClose}
        aria-label="Close menu overlay"
      />
      <div
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-cream shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
          <span className="label-meta">Navigation</span>
          <HeaderCloseButton onClose={onClose} />
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-5 py-6" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              ref={i === 0 ? firstFocusRef : undefined}
              to={link.href}
              onClick={onClose}
              className="border-b border-charcoal/8 py-4 text-lg text-charcoal transition-colors hover:text-sparex-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 border-t border-charcoal/10 p-5">
          <Button to="/contact" variant="primary" className="w-full" onClick={onClose}>
            Trade enquiry
          </Button>
          <Button
            href={getWhatsAppUrl('engine')}
            external
            variant="whatsapp"
            icon={MessageCircle}
            className="w-full"
            aria-label="WhatsApp Sales"
          >
            WhatsApp Sales
          </Button>
        </div>
      </div>
    </div>
  );
}
