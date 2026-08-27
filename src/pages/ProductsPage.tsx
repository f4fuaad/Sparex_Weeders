import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { SectionHeading } from '../components/ui/ChapterMarker';
import Button from '../components/ui/Button';
import EnquiryForm from '../components/sections/EnquiryForm';
import ProductImage from '../components/ui/ProductImage';
import {
  PRODUCT_CATEGORIES,
  getProductsByCategory,
} from '../lib/constants';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>(PRODUCT_CATEGORIES[0].id);

  const categoryProducts = getProductsByCategory(activeCategory);

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.product-detail', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory, reduced]);

  return (
    <>
      <SEOHead
        title="Paper & Paperboard Products — Kraft, Testliner, FBB, Duplex Board"
        description="Explore Sparex India's full range of packaging papers, paperboard, printing papers and specialty grades for international B2B buyers."
        path="/products"
      />

      <div className="section-warm border-b border-warm-stone/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            chapter="Products"
            title="Paper & paperboard for your requirement."
            description="We source products according to required GSM, size, quality, quantity and application — confirmed with buyer and supplier before order execution."
          />
        </div>
      </div>

      <div className="section-surface border-b border-warm-stone/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 sm:px-6 lg:px-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                activeCategory === cat.id
                  ? 'bg-sparex-red text-white'
                  : 'border border-warm-stone/50 bg-cream text-charcoal/70 hover:text-sparex-red'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div ref={sectionRef} className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {categoryProducts.map((product, index) => (
            <article
              key={product.id}
              id={product.slug}
              className="product-detail scroll-mt-28"
            >
              <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="paper-edge-shadow overflow-hidden border border-warm-stone/40 bg-cream">
                  <ProductImage src={product.image} alt={product.imageAlt} />
                </div>

                <div>
                  <span className="label-caps text-kraft">{product.category.replace('-', ' ')}</span>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-2 font-display text-xl italic text-kraft">{product.headline}</p>
                  <p className="mt-6 text-base leading-relaxed text-charcoal/75">
                    {product.overview}
                  </p>

                  <div className="mt-8">
                    <h3 className="label-caps mb-4">Applications</h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {product.applications.map((app) => (
                        <li
                          key={app}
                          className="paper-edge-shadow flex items-center gap-2 bg-cream px-4 py-3 text-sm text-charcoal/70"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-sparex-red"
                            aria-hidden="true"
                          />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href={`/contact?product=${product.slug}`} variant="primary">
                      Enquire about {product.name}
                      <ArrowRight size={16} aria-hidden="true" />
                    </Button>
                    <Button
                      href={getWhatsAppUrl('general')}
                      external
                      variant="whatsapp"
                      icon={MessageCircle}
                      aria-label={`WhatsApp enquiry for ${product.name}`}
                    >
                      WhatsApp Sales
                    </Button>
                  </div>
                </div>
              </div>

              {index < categoryProducts.length - 1 && (
                <hr className="mt-24 border-warm-stone/30" />
              )}
            </article>
          ))}
        </div>
      </div>

      <section className="section-warm border-t border-warm-stone/40 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <EnquiryForm showTitle />
        </div>
      </section>
    </>
  );
}
