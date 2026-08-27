interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ProductImage({
  src,
  alt,
  className = '',
  priority = false,
}: ProductImageProps) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-warm-stone/30 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        width={800}
        height={600}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
