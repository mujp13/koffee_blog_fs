import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Guestbook</Link>
      <Link to="/">Blog</Link>
    </nav>
  );
}

export default function Header() {
  return (
    <header>
      <div>Logo</div>
      <Nav />
    </header>
  );
}
