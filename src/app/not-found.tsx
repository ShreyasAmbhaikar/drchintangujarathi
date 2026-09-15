import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-8xl font-heading font-bold gold-gradient-text mb-4">
        404
      </h1>
      <h2 className="text-2xl font-heading font-semibold text-secondary mb-4">
        Page Not Found
      </h2>
      <p className="text-text/60 max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved. Let
        us help you find what you need.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-3 rounded-[8px] transition-all hover:shadow-lg hover:shadow-accent/20"
      >
        Back to Home
      </Link>
    </main>
  );
}
