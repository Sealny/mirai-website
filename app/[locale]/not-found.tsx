import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-mirai-red mb-4">404</p>
        <h1 className="font-display text-section mb-4">Page not found</h1>
        <p className="text-sm text-mirai-gray-dark mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn-secondary">Return home</Link>
      </div>
    </div>
  );
}
