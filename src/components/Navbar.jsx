import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Wanderly</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/destinations" className="navbar-link">Destinations</Link>
        </li>
        <li>
          <Link to="/booking" className="navbar-link">Booking</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
