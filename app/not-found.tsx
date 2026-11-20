import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <p className="state-code">404</p>
      <h1>Recipe not found</h1>
      <p>We couldn&apos;t find that recipe. Try browsing the recipe list.</p>
      <Link className="state-action" href="/">
        Back to recipes
      </Link>
    </main>
  );
}
