import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { EngineFamily, EngineProduct, FuelType } from '../../data/engineProducts';
import { ENGINE_CATEGORIES } from '../../data/divisions';
import ProductFilters from './ProductFilters';
import ProductTable from './ProductTable';
import ProductDetailDrawer from './ProductDetailDrawer';

interface EngineCatalogueProps {
  products: EngineProduct[];
  initialFamily?: string | null;
}

export default function EngineCatalogue({ products, initialFamily }: EngineCatalogueProps) {
  const validFamilies: EngineFamily[] = ['170F', '173F', '177F', '186F'];
  const defaultFamily =
    initialFamily && validFamilies.includes(initialFamily as EngineFamily)
      ? (initialFamily as EngineFamily)
      : 'all';

  const [search, setSearch] = useState('');
  const [family, setFamily] = useState<EngineFamily | 'all'>(defaultFamily);
  const [fuel, setFuel] = useState<FuelType | 'all'>('all');
  const [category, setCategory] = useState<string>('all');
  const [selected, setSelected] = useState<EngineProduct | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      if (family !== 'all' && p.engineFamily !== family) return false;
      if (fuel !== 'all' && p.fuelType !== fuel) return false;
      if (category !== 'all' && p.category !== category) return false;
      if (q && !p.itemCode.toLowerCase().includes(q) && !p.name.toLowerCase().includes(q)) {
        return false;
      }
      return true;
    });
  }, [products, search, family, fuel, category]);

  return (
    <div>
      <div className="sticky top-[var(--header-height)] z-30 border-b border-charcoal/10 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl space-y-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-paper-grey"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by item code or part name — e.g. 173F-011, fuel injector"
              className="form-input pl-11"
              aria-label="Search engine spare parts"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-paper-grey hover:text-charcoal"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <ProductFilters
            family={family}
            fuel={fuel}
            category={category}
            onFamilyChange={setFamily}
            onFuelChange={setFuel}
            onCategoryChange={setCategory}
            resultCount={filtered.length}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ProductTable products={filtered} onSelect={setSelected} />
      </div>

      <ProductDetailDrawer product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export { ENGINE_CATEGORIES };
