import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <span className="navbar-logo">🍽️</span>
          <span>NextBites</span>
        </Link>
      </div>
    </nav>
  );
}
