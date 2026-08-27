import { MapPin, Mail, Phone } from 'lucide-react';
import { COMPANY } from '../../lib/constants';

export default function UtilityBar() {
  return (
    <div className="border-b border-warm-stone/40 bg-ivory text-xs text-charcoal/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <p className="hidden truncate tracking-wide sm:block">{COMPANY.subtagline}</p>
        <p className="truncate sm:hidden">{COMPANY.subtagline}</p>
        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-1.5 hover:text-sparex-red transition-colors"
          >
            <Mail size={12} aria-hidden="true" />
            <span>{COMPANY.email}</span>
          </a>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 hover:text-sparex-red transition-colors"
          >
            <Phone size={12} aria-hidden="true" />
            <span>{COMPANY.phone}</span>
          </a>
          <span className="flex items-center gap-1.5 text-paper-grey">
            <MapPin size={12} aria-hidden="true" />
            {COMPANY.location}
          </span>
        </div>
      </div>
    </div>
  );
}
