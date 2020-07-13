import React /* Component */ from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <a className="logo">
          <Link to="/">KB</Link>
        </a>
        <ul className="main-nav" id="js-menu">
          <li>
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/guestbook" className="nav-links">
              Guestbook
            </Link>
          </li>
        </ul>
      </nav>
      <h2 className="main-note"> Welcome to Koffeeblog! What do you want to know about coffee?</h2>
    </header>
  );
}
