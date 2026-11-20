export default function Loading() {
  return (
    <main className="state-page" aria-busy="true" aria-live="polite">
      <span className="loading-indicator" aria-hidden="true" />
      <p>Loading recipes...</p>
    </main>
  );
}
