import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowRight } from 'lucide-react';
import {
  PRODUCT_CATEGORIES,
  getProductsByCategory,
  type Product,
} from '../../lib/constants';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SectionHeading } from '../ui/ChapterMarker';
import Button from '../ui/Button';
import ProductImage from '../ui/ProductImage';

gsap.registerPlugin(ScrollTrigger);

function ProductCard({ product, index }: { product: Product; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article
      id={product.slug}
      className={`product-row grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
        isEven ? '' : 'lg:[direction:rtl]'
      }`}
    >
      <div className={`lg:col-span-5 ${isEven ? '' : 'lg:[direction:ltr]'}`}>
        <div className="paper-edge-shadow relative overflow-hidden border border-warm-stone/40 bg-cream">
          <ProductImage src={product.image} alt={product.imageAlt} />
          <span className="absolute top-4 left-4 bg-sparex-red px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className={`lg:col-span-7 ${isEven ? '' : 'lg:[direction:ltr]'}`}>
        <span className="label-caps text-kraft">{product.name}</span>
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
          {product.headline}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-charcoal/70">{product.overview}</p>

        <div className="mt-6">
          <p className="label-caps mb-3">Applications</p>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {product.applications.map((app) => (
              <li key={app} className="flex items-center gap-2 text-sm text-charcoal/65">
                <span className="h-px w-3 shrink-0 bg-sparex-red" aria-hidden="true" />
                {app}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`/contact?product=${product.slug}`} variant="primary">
            Enquire
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button
            href={getWhatsAppUrl('general')}
            external
            variant="whatsapp"
            icon={MessageCircle}
            aria-label={`WhatsApp enquiry for ${product.name}`}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function ProductStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>(PRODUCT_CATEGORIES[0].id);

  const categoryProducts = getProductsByCategory(activeCategory);

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.product-section-heading', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.product-section-heading',
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    gsap.fromTo(
      '.product-row',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
    );
  }, [activeCategory, reduced]);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="section-surface py-24 md:py-32"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="product-section-heading mb-12 lg:mb-16">
          <SectionHeading
            chapter="02"
            label="Our Products"
            title="Paper & paperboard for printing and packaging industries."
            description="We work with suitable manufacturers and supply sources to provide products according to customer requirements for GSM, size, quality, quantity and application."
          />
        </div>

        <div className="mb-12 flex flex-wrap gap-2 border-b border-warm-stone/50 pb-4">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                activeCategory === cat.id
                  ? 'bg-sparex-red text-white'
                  : 'bg-cream text-charcoal/70 hover:text-sparex-red border border-warm-stone/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <p className="mb-12 max-w-3xl text-sm text-charcoal/65">
          {PRODUCT_CATEGORIES.find((c) => c.id === activeCategory)?.description}
        </p>

        <div className="space-y-20 md:space-y-28">
          {categoryProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="/products" variant="outline">
            View full product catalogue
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
