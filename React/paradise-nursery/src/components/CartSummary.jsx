import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartSummary = ({ totalCost }) => {
  const { totalItems } = useCart();

  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <div className="summary-row">
        <span>Total Items:</span>
        <span>{totalItems}</span>
      </div>
      <div className="summary-row total">
        <span>Total Cost:</span>
        <span>${totalCost.toFixed(2)}</span>
      </div>
      <Link 
        to="/products" 
        className="continue-shopping"
      >
        Continue Shopping
      </Link>
      <button 
        className="checkout-btn"
        disabled={totalItems === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;