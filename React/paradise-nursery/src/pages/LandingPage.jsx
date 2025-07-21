import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          We specialize in bringing the beauty of nature into your home with 
          our carefully curated selection of house plants that purify the air, 
          enhance your mood, and transform your living space.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;