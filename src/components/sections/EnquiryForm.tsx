import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { PRODUCTS, COMPANY } from '../../lib/constants';
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
  product: string;
  gsm: string;
  quantity: string;
  destination: string;
  location: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
  consent?: string;
}

const initialForm: FormData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  gsm: '',
  quantity: '',
  destination: '',
  location: '',
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
    errors.phone = 'Phone number is required';
  } else if (!/^[\d\s+\-()]{10,}$/.test(data.phone)) {
    errors.phone = 'Enter a valid phone number';
  }
  if (!data.product) errors.product = 'Select a product of interest';
  if (!data.message.trim()) errors.message = 'Please describe your requirement';
  if (!data.consent) errors.consent = 'Consent is required to submit';
  return errors;
}

interface EnquiryFormProps {
  compact?: boolean;
  showTitle?: boolean;
}

export default function EnquiryForm({ compact = false, showTitle = true }: EnquiryFormProps) {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam) {
      const match = PRODUCTS.find((p) => p.slug === productParam);
      if (match) {
        setForm((prev) => ({ ...prev, product: match.name }));
      }
    }
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
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('success');

    const waMessage = buildFormWhatsAppMessage(form);
    setWhatsappUrl(buildWhatsAppUrl(waMessage));

    // Mailto fallback — replace with secure backend endpoint in production
    const subject = encodeURIComponent(
      `Enquiry from ${form.fullName} — ${form.company}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.fullName}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Product: ${form.product}`,
        form.gsm ? `GSM: ${form.gsm}` : '',
        form.quantity ? `Quantity: ${form.quantity}` : '',
        form.destination ? `Destination: ${form.destination}` : '',
        form.location ? `Delivery: ${form.location}` : '',
        '',
        form.message,
      ]
        .filter(Boolean)
        .join('\n'),
    );

    // Opens user's email client as interim solution
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  };

  if (status === 'success') {
    return (
      <div className="paper-edge-shadow bg-white p-8 md:p-10 text-center">
        <CheckCircle className="mx-auto text-whatsapp" size={48} aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-ink">Enquiry prepared</h3>
        <p className="mt-3 text-sm text-charcoal/70 max-w-md mx-auto">
          Your email client should open with a pre-filled message to{' '}
          <a href={`mailto:${COMPANY.email}`} className="text-sparex-red hover:underline">
            {COMPANY.email}
          </a>
          . Send the email to complete your enquiry, or continue on WhatsApp for a faster response.
        </p>
        <p className="mt-2 text-xs text-paper-grey">
          Note: Form submission uses a mailto fallback. Connect a secure backend endpoint for
          direct email delivery.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {whatsappUrl && (
            <Button
              href={whatsappUrl}
              external
              variant="whatsapp"
              icon={MessageCircle}
              aria-label="Continue enquiry on WhatsApp"
            >
              Continue on WhatsApp
            </Button>
          )}
          <Button
            variant="outline"
            onClick={() => {
              setStatus('idle');
              setForm(initialForm);
            }}
          >
            Submit another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {showTitle && (
        <div className="mb-8">
          <span className="label-caps text-sparex-red">Enquiry form</span>
          <h2 id="home-contact-heading" className="mt-2 font-display text-2xl md:text-3xl font-bold text-ink tracking-tight">
            Send your requirement
          </h2>
          <p className="mt-2 text-sm text-charcoal/65">
            Fill in the details below. We will respond to discuss availability, specifications,
            and delivery based on your requirement.
          </p>
        </div>
      )}

      {status === 'error' && Object.keys(errors).length > 0 && (
        <div
          className="mb-6 flex items-start gap-3 bg-sparex-red/5 border border-sparex-red/20 p-4 text-sm text-sparex-red"
          role="alert"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
          <p>Please correct the highlighted fields before submitting.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className={`grid gap-5 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'}`}>
          <div>
            <label htmlFor="fullName" className="form-label">
              Full name *
            </label>
            <input
              id="fullName"
              type="text"
              className="form-input"
              value={form.fullName}
              onChange={(e) => update('fullName', e.target.value)}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              autoComplete="name"
            />
            {errors.fullName && (
              <p id="fullName-error" className="form-error">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="form-label">
              Company name *
            </label>
            <input
              id="company"
              type="text"
              className="form-input"
              value={form.company}
              onChange={(e) => update('company', e.target.value)}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? 'company-error' : undefined}
              autoComplete="organization"
            />
            {errors.company && (
              <p id="company-error" className="form-error">
                {errors.company}
              </p>
            )}
          </div>
        </div>

        <div className={`grid gap-5 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'}`}>
          <div>
            <label htmlFor="email" className="form-label">
              Work email *
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <p id="email-error" className="form-error">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="form-label">
              Phone number *
            </label>
            <input
              id="phone"
              type="tel"
              className="form-input"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              autoComplete="tel"
            />
            {errors.phone && (
              <p id="phone-error" className="form-error">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className={`grid gap-5 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'}`}>
          <div>
            <label htmlFor="product" className="form-label">
              Product of interest *
            </label>
            <select
              id="product"
              className="form-input"
              value={form.product}
              onChange={(e) => update('product', e.target.value)}
              aria-invalid={!!errors.product}
              aria-describedby={errors.product ? 'product-error' : undefined}
            >
              <option value="">Select a product</option>
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="Multiple / Not sure">Multiple / Not sure</option>
            </select>
            {errors.product && (
              <p id="product-error" className="form-error">
                {errors.product}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="quantity" className="form-label">
              Estimated quantity
            </label>
            <input
              id="quantity"
              type="text"
              className="form-input"
              placeholder="e.g. 5 MT, 1000 sheets"
              value={form.quantity}
              onChange={(e) => update('quantity', e.target.value)}
            />
          </div>
        </div>

        <div className={`grid gap-5 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'}`}>
          <div>
            <label htmlFor="gsm" className="form-label">
              GSM
            </label>
            <input
              id="gsm"
              type="text"
              className="form-input"
              placeholder="e.g. 120, 140"
              value={form.gsm}
              onChange={(e) => update('gsm', e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="destination" className="form-label">
              Destination country / port
            </label>
            <input
              id="destination"
              type="text"
              className="form-input"
              placeholder="Country and port"
              value={form.destination}
              onChange={(e) => update('destination', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className="form-label">
            Required delivery
          </label>
          <input
            id="location"
            type="text"
            className="form-input"
            placeholder="Timeline or delivery terms"
            value={form.location}
            onChange={(e) => update('location', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Requirement message *
          </label>
          <textarea
            id="message"
            rows={4}
            className="form-input resize-y min-h-[120px]"
            placeholder="Reel / sheet, width / size, application and other specifications"
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="form-error">
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update('consent', e.target.checked)}
              className="mt-1 h-4 w-4 accent-sparex-red"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
            />
            <span className="text-sm text-charcoal/70">
              I consent to Sparex India contacting me regarding this enquiry via phone, email,
              or WhatsApp. *
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" className="form-error ml-7">
              {errors.consent}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button type="submit" variant="primary">
            Submit Enquiry
          </Button>
          <Button
            href={getWhatsAppUrl('general')}
            external
            variant="whatsapp"
            icon={MessageCircle}
            aria-label="Continue on WhatsApp instead"
          >
            Continue on WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
}
