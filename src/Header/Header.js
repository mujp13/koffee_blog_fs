import React /* Component */ from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">KB</Link>
        </div>
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
          <li>
            <Link to="/addblog" className="nav-links">
              Post
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="main-note">
        {' '}
        Welcome to Koffeeblog! <br></br>
        <br></br> What do you want to know about coffee?
      </h1>
      <h2>
        This page is about coffee! You can find information about coffee including types of coffee beans, drinks and
        brewing methods. You are more than welcome to post your own blogs to any of the categories if you want to make
        this website more informative.
      </h2>
    </header>
  );
}
