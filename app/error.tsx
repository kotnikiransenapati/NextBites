"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="state-page" role="alert">
      <h1>Something went wrong</h1>
      <p>We couldn&apos;t load this page. Please try again.</p>
      <button className="state-action" type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
