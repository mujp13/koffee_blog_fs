import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i class="fas fa-bars"></i>
        </span>
        <a className="logo">
          <Link to="#">Kofee Blog</Link>
        </a>
        <ul className="main-nav" id="js-menu">
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
    </header>
  );
}
