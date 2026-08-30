import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import gsap from 'gsap';
import type { EngineProduct } from '../../data/engineProducts';
import { ENGINE_CATEGORIES } from '../../data/divisions';
import Button from '../ui/Button';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ProductDetailDrawerProps {
  product: EngineProduct | null;
  onClose: () => void;
}

function categoryLabel(id: string) {
  return ENGINE_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export default function ProductDetailDrawer({ product, onClose }: ProductDetailDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!product) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    if (!reduced && panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.35, ease: 'power3.out' },
      );
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose, reduced]);

  if (!product) return null;

  const enquiryUrl = `/contact?division=engine-spares&itemCode=${encodeURIComponent(product.itemCode)}&engineModel=${encodeURIComponent(product.engineFamily)}`;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Product details">
      <button
        type="button"
        className="absolute inset-0 bg-graphite/50"
        onClick={onClose}
        aria-label="Close product details"
      />

      <div
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-2xl md:max-w-lg"
      >
        <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
          <span className="label-meta">Catalogue item</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center text-charcoal hover:text-sparex-red"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <p className="font-mono text-sm text-sparex-red">{product.itemCode}</p>
          <h2 className="font-display mt-2 text-2xl leading-tight text-ink md:text-3xl">
            {product.name}
          </h2>
          {product.needsReview && (
            <p className="mt-2 text-xs text-brass">
              Part name flagged for manual verification against catalogue PDF.
            </p>
          )}

          <dl className="mt-8 space-y-4 border-t border-charcoal/10 pt-6 text-sm">
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <dt className="label-meta">Engine family</dt>
              <dd className="text-charcoal">{product.engineFamily}</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <dt className="label-meta">Fuel type</dt>
              <dd className="capitalize text-charcoal">{product.fuelType}</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <dt className="label-meta">Category</dt>
              <dd className="text-charcoal">{categoryLabel(product.category)}</dd>
            </div>
            {product.qualityVariant && (
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <dt className="label-meta">Quality variant</dt>
                <dd className="capitalize text-charcoal">{product.qualityVariant}</dd>
              </div>
            )}
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <dt className="label-meta">Catalogue ref.</dt>
              <dd className="text-xs text-charcoal/70">{product.catalogueSource}</dd>
            </div>
          </dl>

          <p className="mt-8 text-xs leading-relaxed text-charcoal/55">
            Availability confirmed against enquiry. Specifications subject to manufacturer and buyer
            confirmation. No pricing or stock status displayed.
          </p>
        </div>

        <div className="space-y-3 border-t border-charcoal/10 p-5">
          <Button to={enquiryUrl} variant="primary" className="w-full" onClick={onClose}>
            Request quotation
          </Button>
          <Link
            to="/engine-spares"
            onClick={onClose}
            className="block text-center text-xs text-charcoal/60 underline-offset-2 hover:text-sparex-red hover:underline"
          >
            Back to full catalogue
          </Link>
        </div>
      </div>
    </div>
  );
}
