import type { EngineFamily, FuelType } from '../../data/engineProducts';
import { ENGINE_CATEGORIES, ENGINE_FAMILIES } from '../../data/divisions';

interface ProductFiltersProps {
  family: EngineFamily | 'all';
  fuel: FuelType | 'all';
  category: string;
  onFamilyChange: (v: EngineFamily | 'all') => void;
  onFuelChange: (v: FuelType | 'all') => void;
  onCategoryChange: (v: string) => void;
  resultCount: number;
}

export default function ProductFilters({
  family,
  fuel,
  category,
  onFamilyChange,
  onFuelChange,
  onCategoryChange,
  resultCount,
}: ProductFiltersProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onFamilyChange('all')}
          className={`px-3 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
            family === 'all' ? 'bg-sparex-red text-white' : 'border border-charcoal/15 text-charcoal/70 hover:border-sparex-red'
          }`}
        >
          All families
        </button>
        {ENGINE_FAMILIES.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => onFamilyChange(f.id as EngineFamily)}
            className={`px-3 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
              family === f.id
                ? 'bg-sparex-red text-white'
                : 'border border-charcoal/15 text-charcoal/70 hover:border-sparex-red'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <select
          value={fuel}
          onChange={(e) => onFuelChange(e.target.value as FuelType | 'all')}
          className="form-select w-auto min-w-[140px] py-2 text-xs"
          aria-label="Filter by fuel type"
        >
          <option value="all">All fuel types</option>
          <option value="diesel">Diesel</option>
          <option value="petrol">Petrol</option>
        </select>

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="form-select w-auto min-w-[180px] py-2 text-xs"
          aria-label="Filter by category"
        >
          <option value="all">All categories</option>
          {ENGINE_CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>

        <span className="label-meta ml-auto">
          {resultCount} {resultCount === 1 ? 'part' : 'parts'}
        </span>
      </div>
    </div>
  );
}
