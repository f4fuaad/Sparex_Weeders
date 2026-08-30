import { Link } from 'react-router-dom';
import { ArrowUpRight, Download } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost-light' | 'whatsapp' | 'outline';

interface ButtonProps {
  href?: string;
  to?: string;
  variant?: Variant;
  external?: boolean;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  'aria-label'?: string;
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'ghost-light': 'btn-ghost-light',
  whatsapp: 'btn-whatsapp',
  outline: 'btn-secondary',
};

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Button({
  href,
  to,
  variant = 'primary',
  external,
  icon: Icon,
  className,
  children,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = cn(
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sparex-red',
    variants[variant],
    disabled && 'pointer-events-none opacity-50',
    className,
  );

  const content = (
    <>
      {Icon && <Icon size={16} aria-hidden="true" />}
      {children}
      {external && !Icon && <ArrowUpRight size={14} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export function DownloadLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      download
      className={cn(
        'inline-flex items-center gap-2 border border-charcoal/15 px-4 py-2.5 text-sm transition-colors hover:border-sparex-red hover:text-sparex-red',
        className,
      )}
    >
      <Download size={15} aria-hidden="true" />
      {label}
    </a>
  );
}
