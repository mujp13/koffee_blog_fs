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
          <Link to="#">KOFFEE</Link>
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
      <h2 className="main-note"> Welcome to Koffeeblog! What do you want to know about coffee?</h2>
    </header>
  );
}
