import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-center p-4">
      <h2 className="text-3xl font-serif-display text-rose-deep font-bold mb-2">404 - Page Not Found</h2>
      <p className="text-foreground/80 mb-4">The page you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-2 rounded-full gradient-gold text-white shadow-soft">
        Return Home
      </Link>
    </div>
  );
}
