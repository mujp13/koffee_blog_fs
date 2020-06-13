import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function activate() {
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');

  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
  });
}

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={() => {
            activate();
          }}
        >
          <i className="fas fa-bars"></i>
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
          <li className="search-container">
            <input type="text" className="nav-links" placeholder="Search.." />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
