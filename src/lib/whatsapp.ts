import { COMPANY } from './constants';

const BASE = `https://wa.me/${COMPANY.phoneRaw}`;

export const WHATSAPP_MESSAGES = {
  general:
    'Hello Sparex India, I would like to enquire about power weeder engine spare parts. Please share availability and quotation details.',
  engine:
    'Hello Sparex India, I would like to enquire about power weeder engine spare parts. Please share availability for my engine model and item code.',
  paper:
    'Hello Sparex India, I would like to enquire about paper and paperboard products. Please share available grades and specifications.',
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

export function buildWhatsAppUrl(message: string): string {
  return `${BASE}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppUrl(key: WhatsAppMessageKey = 'engine'): string {
  return buildWhatsAppUrl(WHATSAPP_MESSAGES[key]);
}

export function buildFormWhatsAppMessage(data: {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  enquiryType: string;
  division: string;
  engineModel?: string;
  itemCode?: string;
  gsm?: string;
  format?: string;
  size?: string;
  application?: string;
  quantity?: string;
  destinationCountry?: string;
  destinationPort?: string;
  timeline?: string;
  message: string;
}): string {
  const lines = [
    'Hello Sparex India, I submitted an enquiry via your website.',
    '',
    `Name: ${data.fullName}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Enquiry type: ${data.enquiryType}`,
    `Division: ${data.division}`,
    data.engineModel ? `Engine model: ${data.engineModel}` : '',
    data.itemCode ? `Item code: ${data.itemCode}` : '',
    data.gsm ? `GSM: ${data.gsm}` : '',
    data.format ? `Format: ${data.format}` : '',
    data.size ? `Size: ${data.size}` : '',
    data.application ? `Application: ${data.application}` : '',
    data.quantity ? `Quantity: ${data.quantity}` : '',
    data.destinationCountry ? `Destination country: ${data.destinationCountry}` : '',
    data.destinationPort ? `Destination port: ${data.destinationPort}` : '',
    data.timeline ? `Timeline: ${data.timeline}` : '',
    data.message ? `Requirement: ${data.message}` : '',
  ].filter(Boolean);

  return lines.join('\n');
}
