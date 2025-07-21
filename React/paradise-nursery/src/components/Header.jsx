import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { totalItems } = useCart();
  
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/logo.png" alt="Paradise Nursery" className="logo" />
          <h1>Paradise Nursery</h1>
        </Link>
      </div>
      <p className="tagline">Bringing nature indoors</p>
      <Link to="/cart" className="cart-icon">
        🛒 <span className="cart-count">{totalItems}</span>
      </Link>
    </header>
  );
};

export default Header;