import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <span className="eyebrow">404</span>
      <h1>Page not found.</h1>
      <p>The page you requested does not exist or has moved.</p>
      <Link className="btn btn-primary" href="/">Back to home</Link>
    </main>
  );
}
