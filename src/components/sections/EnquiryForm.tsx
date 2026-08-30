import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { COMPANY, ENQUIRY_DIVISIONS, ENQUIRY_TYPES } from '../../lib/constants';
import { SITE_CONFIG } from '../../lib/siteConfig';
import {
  buildFormWhatsAppMessage,
  buildWhatsAppUrl,
  getWhatsAppUrl,
} from '../../lib/whatsapp';
import Button from '../ui/Button';

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  enquiryType: string;
  division: string;
  engineModel: string;
  itemCode: string;
  gsm: string;
  format: string;
  size: string;
  application: string;
  quantity: string;
  destinationCountry: string;
  destinationPort: string;
  timeline: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  division?: string;
  message?: string;
  consent?: string;
}

const initialForm: FormData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  enquiryType: '',
  division: 'engine-spares',
  engineModel: '',
  itemCode: '',
  gsm: '',
  format: '',
  size: '',
  application: '',
  quantity: '',
  destinationCountry: '',
  destinationPort: '',
  timeline: '',
  message: '',
  consent: false,
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required';
  if (!data.company.trim()) errors.company = 'Company name is required';
  if (!data.email.trim()) {
    errors.email = 'Work email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone / WhatsApp is required';
  } else if (!/^[\d\s+\-()]{10,}$/.test(data.phone)) {
    errors.phone = 'Enter a valid phone number';
  }
  if (!data.enquiryType) errors.enquiryType = 'Select an enquiry type';
  if (!data.division) errors.division = 'Select a product division';
  if (!data.message.trim()) errors.message = 'Please describe your requirement';
  if (!data.consent) errors.consent = 'Consent is required to submit';
  return errors;
}

interface EnquiryFormProps {
  compact?: boolean;
}

export default function EnquiryForm({ compact = false }: EnquiryFormProps) {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    const division = searchParams.get('division');
    const enquiryType = searchParams.get('enquiryType');
    const itemCode = searchParams.get('itemCode');
    const engineModel = searchParams.get('engineModel');
    const product = searchParams.get('product');

    setForm((prev) => ({
      ...prev,
      ...(division ? { division } : {}),
      ...(enquiryType ? { enquiryType } : {}),
      ...(itemCode ? { itemCode } : {}),
      ...(engineModel ? { engineModel } : {}),
      ...(product ? { message: `Enquiry regarding: ${product}` } : {}),
    }));
  }, [searchParams]);

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('success');

    const enquiryTypeLabel =
      ENQUIRY_TYPES.find((t) => t.value === form.enquiryType)?.label ?? form.enquiryType;
    const divisionLabel =
      ENQUIRY_DIVISIONS.find((d) => d.value === form.division)?.label ?? form.division;

    const waMessage = buildFormWhatsAppMessage({
      ...form,
      enquiryType: enquiryTypeLabel,
      division: divisionLabel,
    });
    setWhatsappUrl(buildWhatsAppUrl(waMessage));

    const subject = encodeURIComponent(`Trade enquiry — ${form.company}`);
    const body = encodeURIComponent(waMessage);
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  };

  if (status === 'success') {
    return (
      <div className="border border-charcoal/10 bg-paper px-6 py-10 text-center">
        <CheckCircle className="mx-auto text-whatsapp" size={44} aria-hidden="true" />
        <h3 className="font-display mt-4 text-2xl text-ink">Enquiry prepared</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
          Your email client should open with a pre-filled message to{' '}
          <a href={`mailto:${COMPANY.email}`} className="text-sparex-red hover:underline">
            {COMPANY.email}
          </a>
          . Send the email to complete your enquiry, or continue on WhatsApp.
        </p>
        <p className="mx-auto mt-2 max-w-md text-xs text-charcoal/50">
          This form does not confirm delivery until you send the email or WhatsApp message.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {whatsappUrl && (
            <Button href={whatsappUrl} external variant="whatsapp" icon={MessageCircle}>
              Continue on WhatsApp
            </Button>
          )}
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setStatus('idle');
              setForm(initialForm);
            }}
          >
            New enquiry
          </Button>
        </div>
      </div>
    );
  }

  const showEngineFields =
    form.division === 'engine-spares' ||
    form.division === 'requirement' ||
    !SITE_CONFIG.paperEnabled;
  const showPaperFields = SITE_CONFIG.paperEnabled && form.division === 'paper-paperboard';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className={`grid gap-5 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'}`}>
        <div>
          <label htmlFor="fullName" className="form-label">Full name *</label>
          <input
            id="fullName"
            type="text"
            className="form-input"
            value={form.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            aria-invalid={!!errors.fullName}
            autoComplete="name"
            placeholder="e.g. Rajesh Kumar"
          />
          {errors.fullName && <p className="form-error">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="company" className="form-label">Company name *</label>
          <input
            id="company"
            type="text"
            className="form-input"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            aria-invalid={!!errors.company}
            autoComplete="organization"
            placeholder="e.g. ABC Trading LLC"
          />
          {errors.company && <p className="form-error">{errors.company}</p>}
        </div>

        <div>
          <label htmlFor="email" className="form-label">Work email *</label>
          <input
            id="email"
            type="email"
            className="form-input"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
            autoComplete="email"
            placeholder="name@company.com"
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="form-label">Phone / WhatsApp *</label>
          <input
            id="phone"
            type="tel"
            className="form-input"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            autoComplete="tel"
            placeholder="+971 50 000 0000"
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="enquiryType" className="form-label">Enquiry type *</label>
          <select
            id="enquiryType"
            className="form-select"
            value={form.enquiryType}
            onChange={(e) => update('enquiryType', e.target.value)}
            aria-invalid={!!errors.enquiryType}
          >
            <option value="">Select type</option>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          {errors.enquiryType && <p className="form-error">{errors.enquiryType}</p>}
        </div>

        <div>
          <label htmlFor="division" className="form-label">Product division *</label>
          <select
            id="division"
            className="form-select"
            value={form.division}
            onChange={(e) => update('division', e.target.value)}
            aria-invalid={!!errors.division}
          >
            <option value="">Select division</option>
            {ENQUIRY_DIVISIONS.map((d) => (
              <option key={d.value} value={d.value}>{d.label}</option>
            ))}
          </select>
          {errors.division && <p className="form-error">{errors.division}</p>}
        </div>
      </div>

      {showEngineFields && (
        <div className="grid gap-5 border border-charcoal/10 bg-bone/40 p-5 md:grid-cols-2">
          <div>
            <label htmlFor="engineModel" className="form-label">Engine model</label>
            <select
              id="engineModel"
              className="form-select"
              value={form.engineModel}
              onChange={(e) => update('engineModel', e.target.value)}
            >
              <option value="">Select model</option>
              <option value="170F">170F</option>
              <option value="173F">173F</option>
              <option value="177F">177F</option>
              <option value="186F">186F</option>
            </select>
          </div>
          <div>
            <label htmlFor="itemCode" className="form-label">Item code</label>
            <input
              id="itemCode"
              type="text"
              className="form-input font-mono"
              value={form.itemCode}
              onChange={(e) => update('itemCode', e.target.value)}
              placeholder="e.g. 173F-011"
            />
          </div>
        </div>
      )}

      {showPaperFields && (
        <div className="grid gap-5 border border-charcoal/10 bg-bone/40 p-5 md:grid-cols-2">
          <div>
            <label htmlFor="gsm" className="form-label">GSM</label>
            <input
              id="gsm"
              type="text"
              className="form-input"
              value={form.gsm}
              onChange={(e) => update('gsm', e.target.value)}
              placeholder="e.g. 120–140 gsm"
            />
          </div>
          <div>
            <label htmlFor="format" className="form-label">Reel or sheet</label>
            <select
              id="format"
              className="form-select"
              value={form.format}
              onChange={(e) => update('format', e.target.value)}
            >
              <option value="">Select format</option>
              <option value="reel">Reel</option>
              <option value="sheet">Sheet</option>
              <option value="either">Either / to confirm</option>
            </select>
          </div>
          <div>
            <label htmlFor="size" className="form-label">Width / size</label>
            <input
              id="size"
              type="text"
              className="form-input"
              value={form.size}
              onChange={(e) => update('size', e.target.value)}
              placeholder="e.g. 800 mm reel width"
            />
          </div>
          <div>
            <label htmlFor="application" className="form-label">Application</label>
            <input
              id="application"
              type="text"
              className="form-input"
              value={form.application}
              onChange={(e) => update('application', e.target.value)}
              placeholder="e.g. corrugated liner, paper bags"
            />
          </div>
        </div>
      )}

      <div className={`grid gap-5 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-3'}`}>
        <div>
          <label htmlFor="quantity" className="form-label">Quantity / volume</label>
          <input
            id="quantity"
            type="text"
            className="form-input"
            value={form.quantity}
            onChange={(e) => update('quantity', e.target.value)}
            placeholder="e.g. 1×20ft container"
          />
        </div>
        <div>
          <label htmlFor="destinationCountry" className="form-label">Destination country</label>
          <input
            id="destinationCountry"
            type="text"
            className="form-input"
            value={form.destinationCountry}
            onChange={(e) => update('destinationCountry', e.target.value)}
            placeholder="e.g. UAE"
          />
        </div>
        <div>
          <label htmlFor="destinationPort" className="form-label">Destination port</label>
          <input
            id="destinationPort"
            type="text"
            className="form-input"
            value={form.destinationPort}
            onChange={(e) => update('destinationPort', e.target.value)}
            placeholder="e.g. Jebel Ali"
          />
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="form-label">Required timeline</label>
        <input
          id="timeline"
          type="text"
          className="form-input"
          value={form.timeline}
          onChange={(e) => update('timeline', e.target.value)}
          placeholder="e.g. shipment within 6 weeks"
        />
      </div>

      <div>
        <label htmlFor="message" className="form-label">Requirement message *</label>
        <textarea
          id="message"
          rows={5}
          className="form-input resize-y"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={!!errors.message}
          placeholder="Describe product, specification, quantity, and destination requirements."
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-charcoal/75">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update('consent', e.target.checked)}
            className="mt-1 h-4 w-4 accent-sparex-red"
            aria-invalid={!!errors.consent}
          />
          <span>
            I consent to Sparex India contacting me regarding this enquiry via phone, email, or
            WhatsApp. *
          </span>
        </label>
        {errors.consent && <p className="form-error">{errors.consent}</p>}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button type="submit" variant="primary">Prepare enquiry</Button>
        <Button
          href={getWhatsAppUrl('engine')}
          external
          variant="whatsapp"
          icon={MessageCircle}
          aria-label="Continue on WhatsApp instead"
        >
          WhatsApp instead
        </Button>
      </div>
    </form>
  );
}
