import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl('general')}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Sales — enquire about paper products"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp/90 md:bottom-8 md:right-8 md:px-5"
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp Sales</span>
    </a>
  );
}
