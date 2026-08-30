import { ArrowRight } from 'lucide-react';
import type { EngineProduct } from '../../data/engineProducts';
import { ENGINE_CATEGORIES } from '../../data/divisions';

interface ProductTableProps {
  products: EngineProduct[];
  onSelect: (product: EngineProduct) => void;
}

function categoryLabel(id: string) {
  return ENGINE_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export default function ProductTable({ products, onSelect }: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="border border-charcoal/10 bg-paper px-6 py-16 text-center">
        <p className="font-display text-2xl text-charcoal">No parts match your filters.</p>
        <p className="mt-2 text-sm text-charcoal/60">
          Try a different item code, family, or category — or send a trade enquiry with your requirement.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden overflow-x-auto border border-charcoal/10 md:block">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-charcoal/10 bg-bone/50">
            <tr>
              <th className="label-meta px-4 py-3">Item code</th>
              <th className="label-meta px-4 py-3">Part name</th>
              <th className="label-meta px-4 py-3">Family</th>
              <th className="label-meta px-4 py-3">Category</th>
              <th className="label-meta px-4 py-3">Variant</th>
              <th className="label-meta px-4 py-3 sr-only">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="group border-b border-charcoal/8 transition-colors hover:bg-paper/80"
              >
                <td className="px-4 py-3 font-mono text-xs text-sparex-red">{p.itemCode}</td>
                <td className="px-4 py-3 text-charcoal">
                  {p.name}
                  {p.needsReview && (
                    <span className="ml-2 text-xs text-brass">Review pending</span>
                  )}
                </td>
                <td className="px-4 py-3 text-charcoal/70">{p.engineFamily}</td>
                <td className="px-4 py-3 text-xs text-charcoal/60">{categoryLabel(p.category)}</td>
                <td className="px-4 py-3 text-xs capitalize text-charcoal/60">
                  {p.qualityVariant ?? '—'}
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => onSelect(p)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-sparex-red opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                  >
                    View <ArrowRight size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {products.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelect(p)}
            className="w-full border border-charcoal/10 bg-paper p-4 text-left transition-colors hover:border-sparex-red/40"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-xs text-sparex-red">{p.itemCode}</span>
              <span className="label-meta">{p.engineFamily}</span>
            </div>
            <p className="mt-2 text-sm font-medium text-charcoal">{p.name}</p>
            <p className="mt-1 text-xs text-charcoal/55">{categoryLabel(p.category)}</p>
          </button>
        ))}
      </div>
    </>
  );
}
