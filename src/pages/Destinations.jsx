import React from 'react';
import './Destinations.css';

function Destinations() {
  return (
    <div className="destinations">
      <h1>Explore Our Destinations</h1>
      <div className="destination-cards">
        <div className="destination-card">
          <img src="https://via.placeholder.com/300" alt="Paris" />
          <h3>Paris</h3>
          <p>The city of lights and love. Experience the best of Parisian culture, food, and art.</p>
          <button>Discover Paris</button>
        </div>
        <div className="destination-card">
          <img src="https://via.placeholder.com/300" alt="Tokyo" />
          <h3>Tokyo</h3>
          <p>A vibrant city where tradition meets technology. Explore stunning temples and modern attractions.</p>
          <button>Discover Tokyo</button>
        </div>
        <div className="destination-card">
          <img src="https://via.placeholder.com/300" alt="New York" />
          <h3>New York</h3>
          <p>The city that never sleeps. Immerse yourself in the hustle and bustle of NYC.</p>
          <button>Discover New York</button>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
