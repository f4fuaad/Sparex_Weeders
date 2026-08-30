import SEOHead from '../components/seo/SEOHead';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for could not be found. Return to Sparex India homepage."
        path="/404"
      />
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
        <span className="font-display text-8xl font-bold text-sparex-red/20">404</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 max-w-md text-charcoal/65">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8 flex gap-3">
          <Button to="/" variant="primary">
            Back to Home
          </Button>
          <Button to="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
}
