import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, totalCost } = useCart();

  return (
    <div>
      <Header />
      <main className="cart-page">
        <h2>Your Shopping Cart</h2>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>
        
        <CartSummary totalCost={totalCost} />
      </main>
    </div>
  );
};

export default CartPage;