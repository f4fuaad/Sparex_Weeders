interface ChapterMarkerProps {
  number: string;
  label?: string;
  className?: string;
  dark?: boolean;
}

export default function ChapterMarker({
  number,
  label,
  className = '',
  dark = false,
}: ChapterMarkerProps) {
  return (
    <div className={`flex items-start gap-4 ${className}`} aria-hidden="true">
      <div className="flex flex-col items-center">
        <div className="chapter-rule h-12" />
        <span
          className={`mt-2 font-display text-2xl font-bold tracking-tight ${
            dark ? 'text-sparex-red' : 'text-sparex-red'
          }`}
        >
          {number}
        </span>
      </div>
      {label && (
        <span className={`label-caps mt-1 ${dark ? 'text-paper-grey' : ''}`}>{label}</span>
      )}
    </div>
  );
}

export function SectionHeading({
  chapter,
  label,
  title,
  description,
  dark = false,
  align = 'left',
}: {
  chapter?: string;
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} max-w-3xl`}>
      {chapter && (
        <div className={`flex items-center gap-4 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
          <div className="chapter-rule h-8" aria-hidden="true" />
          <span className="font-display text-sm font-bold text-sparex-red tracking-widest">
            {chapter}
          </span>
          {label && <span className="label-caps">{label}</span>}
        </div>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] ${
          dark ? 'text-ivory' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            dark ? 'text-paper-grey' : 'text-charcoal/70'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
