import React from 'react';
import './Header.css'; // Assuming you will create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header__search">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="header__icons">
        <a href="/account" className="header__icon">
          <img src="/path/to/user-icon.png" alt="User Account" />
        </a>
        <a href="/cart" className="header__icon">
          <img src="/path/to/cart-icon.png" alt="Shopping Cart" />
        </a>
      </div>
    </header>
  );
};

export default Header;