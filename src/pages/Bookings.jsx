import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${formData.name}`);
    // You can add your booking logic here, like sending form data to a backend
    setFormData({ name: '', email: '', destination: '', date: '' });
  };

  return (
    <div className="booking">
      <h1>Book Your Trip</h1>
      <p>Fill out the form below to book your next adventure!</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="date">Travel Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
