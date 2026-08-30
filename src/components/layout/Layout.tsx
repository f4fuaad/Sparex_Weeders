import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout() {
  const { pathname, hash } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header overlay={isHome} />
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

interface PageShellProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function PageShell({ children, dark = false, className = '' }: PageShellProps) {
  return (
    <div
      className={`pt-[var(--header-height)] ${dark ? 'surface-dark' : 'surface-cream paper-grain'} ${className}`}
    >
      {children}
    </div>
  );
}
