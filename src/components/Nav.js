import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="nav_bar">
        <Link to="/" className="navbar-brand d-none d-lg-inline-block nav-brand">
          <i
            className="fas fa-solid fa-clipboard-list text-primary"
          />
          Edward-
          <span className="text-primary">Math-Magician </span>
          App
        </Link>
        <ul className="nav_items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculates">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
