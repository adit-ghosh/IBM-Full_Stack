import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <img 
        src={item.image} 
        alt={item.name} 
        className="cart-item-image" 
      />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="price">${item.price.toFixed(2)}</p>
        
        <div className="quantity-controls">
          <button 
            onClick={() => updateQuantity(item.id, -1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>
            +
          </button>
        </div>
        
        <p className="subtotal">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
        
        <button 
          onClick={() => removeItem(item.id)}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;