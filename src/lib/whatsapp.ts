import { COMPANY } from './constants';

const BASE = `https://wa.me/${COMPANY.phoneRaw}`;

export const WHATSAPP_MESSAGES = {
  general:
    'Hello Sparex India, I would like to enquire about paper and paperboard products for export. Please share available grades, specifications and commercial details.',
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

export function buildWhatsAppUrl(message: string): string {
  return `${BASE}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppUrl(key: WhatsAppMessageKey = 'general'): string {
  return buildWhatsAppUrl(WHATSAPP_MESSAGES[key]);
}

export function buildFormWhatsAppMessage(data: {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  gsm?: string;
  quantity: string;
  destination?: string;
  location: string;
  message: string;
}): string {
  const lines = [
    'Hello Sparex India, I submitted an enquiry via your website.',
    '',
    `Name: ${data.fullName}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Product: ${data.product}`,
    data.gsm ? `GSM: ${data.gsm}` : '',
    data.quantity ? `Quantity: ${data.quantity}` : '',
    data.destination ? `Destination: ${data.destination}` : '',
    data.location ? `Delivery: ${data.location}` : '',
    data.message ? `Requirement: ${data.message}` : '',
  ].filter(Boolean);

  return lines.join('\n');
}
