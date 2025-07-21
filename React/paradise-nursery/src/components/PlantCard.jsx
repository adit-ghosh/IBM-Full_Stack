import React from 'react';
import { useCart } from '../context/CartContext';

const PlantCard = ({ plant }) => {
  const { cartItems, addToCart } = useCart();
  const inCart = cartItems.some(item => item.id === plant.id);

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
      <h3>{plant.name}</h3>
      <p className="price">${plant.price.toFixed(2)}</p>
      <p className="description">{plant.description}</p>
      <button 
        onClick={() => addToCart(plant)} 
        disabled={inCart}
        className={inCart ? 'disabled' : ''}
      >
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;