import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import UtilityBar from './UtilityBar';
import Header from './Header';
import Footer from './Footer';
import FooterReveal from './FooterReveal';
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-lg"
      >
        Skip to main content
      </a>
      {!isHome && <UtilityBar />}
      {!isHome && <Header />}
      <main id="main-content" className={isHome ? '' : 'pb-24'}>
        <Outlet />
      </main>
      <FooterReveal>
        <Footer />
      </FooterReveal>
      <WhatsAppFloat />
    </>
  );
}
