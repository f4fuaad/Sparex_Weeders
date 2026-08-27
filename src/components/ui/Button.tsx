import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'outline';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  'aria-label'?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  'aria-label'?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-sparex-red text-white hover:bg-sparex-red/90 border border-sparex-red shadow-sm',
  secondary:
    'bg-charcoal text-ivory hover:bg-ink border border-charcoal',
  ghost:
    'bg-transparent text-charcoal border border-charcoal/20 hover:border-sparex-red hover:text-sparex-red',
  whatsapp:
    'bg-whatsapp text-white hover:bg-whatsapp/90 border border-whatsapp',
  outline:
    'bg-transparent text-charcoal border border-charcoal/20 hover:border-sparex-red hover:text-sparex-red',
};

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    icon: Icon,
    iconPosition = 'left',
    className,
    children,
  } = props;

  const base =
    'inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sparex-red';

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} aria-hidden="true" />}
    </>
  );

  if ('href' in props && props.href) {
    const linkProps = props as ButtonAsLink;
    const { href, external, 'aria-label': ariaLabel } = linkProps;
    const isExternalWeb = external && !href.startsWith('tel:') && !href.startsWith('mailto:');
    if (isExternalWeb) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={ariaLabel}
          className={cn(base, variants[variant], className)}
        >
          {content}
        </a>
      );
    }
    if (href.startsWith('/') || href.startsWith('#')) {
      return (
        <Link
          to={href}
          aria-label={ariaLabel}
          className={cn(base, variants[variant], className)}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  const { type = 'button', onClick, disabled, 'aria-label': ariaLabel } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], disabled && 'opacity-50 cursor-not-allowed', className)}
    >
      {content}
    </button>
  );
}
