import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DivisionsPage from './pages/DivisionsPage';
import EngineSparesPage from './pages/EngineSparesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { SITE_CONFIG } from './lib/siteConfig';
import PaperPage from './pages/PaperPage';

/** Hash routing only when opened as a local file (share HTML). Browser routing when served by Vite. */
const Router = window.location.protocol === 'file:' ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="divisions" element={<DivisionsPage />} />
          <Route path="engine-spares" element={<EngineSparesPage />} />
          <Route
            path="paper-paperboard"
            element={
              SITE_CONFIG.paperEnabled ? <PaperPage /> : <Navigate to="/engine-spares" replace />
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="products"
            element={
              SITE_CONFIG.paperEnabled ? <PaperPage /> : <Navigate to="/engine-spares" replace />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
