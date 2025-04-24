import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Wanderly Travel</h1>
        <p>Your adventure starts here</p>
        <button>Explore Destinations</button>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Plan Your Trip</h2>
          <p>Find the best locations to explore, with curated guides and itineraries.</p>
        </div>
        <div className="feature">
          <h2>Exclusive Offers</h2>
          <p>Get access to special deals, discounts, and packages from top travel brands.</p>
        </div>
        <div className="feature">
          <h2>Travel Support</h2>
          <p>We provide 24/7 support to ensure your journey goes smoothly.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
