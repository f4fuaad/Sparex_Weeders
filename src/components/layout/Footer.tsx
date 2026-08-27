import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY, FOOTER_PRODUCTS, NAV_LINKS } from '../../lib/constants';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-stone/50 bg-charcoal text-ivory/85 paper-grain">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Sparex India — Home" className="inline-block">
              <img
                src="/sparex-wordmark.svg"
                alt="Sparex India"
                className="mb-6 h-10 w-auto"
                width={180}
                height={48}
                loading="lazy"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-paper-grey">
              Specialized paper and paperboard export trading company serving packaging,
              printing and converting industries across global markets.
            </p>
          </div>

          <div>
            <h3 className="label-caps mb-4 text-ivory/60">Products</h3>
            <ul className="space-y-2">
              {FOOTER_PRODUCTS.map((p) => (
                <li key={p}>
                  <Link
                    to="/products"
                    className="text-sm transition-colors hover:text-sparex-red"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-caps mb-4 text-ivory/60">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm transition-colors hover:text-sparex-red">
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors hover:text-sparex-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-caps mb-4 text-ivory/60">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sparex-red" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.city}
                  <br />
                  {COMPANY.address.state}
                </address>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 transition-colors hover:text-sparex-red"
                >
                  <Phone size={16} className="text-sparex-red" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-sparex-red"
                >
                  <Mail size={16} className="text-sparex-red" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl('general')}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-whatsapp"
                >
                  <MessageCircle size={16} className="text-whatsapp" aria-hidden="true" />
                  WhatsApp Sales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 text-xs text-paper-grey">
            <p>GSTIN: {COMPANY.gstin}</p>
            <p>State: {COMPANY.state}</p>
          </div>
          <p className="text-xs text-paper-grey">
            &copy; {year} {COMPANY.legalName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
