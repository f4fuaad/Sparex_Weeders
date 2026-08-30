import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../../lib/constants';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="surface-dark paper-grain border-t border-white/8">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="/sparex-wordmark.svg"
              alt="Sparex India"
              className="h-8 brightness-0 invert"
              width={140}
              height={32}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Power weeder engine spare parts — requirement-led import-export and sourcing from
              Chennai, India.
            </p>
            <p className="label-meta mt-6 text-paper/40">Trade in Motion</p>
          </div>

          <div>
            <h2 className="label-meta mb-4 text-paper/50">Navigate</h2>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-meta mb-4 text-paper/50">Catalogue</h2>
            <ul className="space-y-2 text-sm text-paper/70">
              <li>
                <Link to="/engine-spares" className="transition-colors hover:text-paper">
                  Power Weeder Engine Spares
                </Link>
              </li>
              <li>
                <Link to="/engine-spares?family=170F" className="transition-colors hover:text-paper">
                  170F Petrol
                </Link>
              </li>
              <li>
                <Link to="/engine-spares?family=173F" className="transition-colors hover:text-paper">
                  173F Diesel
                </Link>
              </li>
              <li>
                <Link to="/engine-spares?family=177F" className="transition-colors hover:text-paper">
                  177F Petrol
                </Link>
              </li>
              <li>
                <Link to="/engine-spares?family=186F" className="transition-colors hover:text-paper">
                  186F Diesel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="label-meta mb-4 text-paper/50">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-paper/70 transition-colors hover:text-paper"
                >
                  <Phone size={15} className="text-sparex-red" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-paper/70 transition-colors hover:text-paper"
                >
                  <Mail size={15} className="text-sparex-red" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl('engine')}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-paper/70 transition-colors hover:text-whatsapp"
                >
                  <MessageCircle size={15} className="text-whatsapp" aria-hidden="true" />
                  WhatsApp Sales
                </a>
              </li>
              <li className="flex items-start gap-2 text-paper/70">
                <MapPin size={15} className="mt-0.5 shrink-0 text-sparex-red" aria-hidden="true" />
                <span>{COMPANY.address.full}</span>
              </li>
            </ul>
            <p className="label-meta mt-6 text-paper/40">GSTIN: {COMPANY.gstin}</p>
          </div>
        </div>

        <div className="tech-rule mt-12 bg-white/10" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
          <p>{COMPANY.location} · POWER WEEDER ENGINE SPARES</p>
        </div>
      </div>
    </footer>
  );
}
