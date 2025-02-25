import React, { useState } from "react";
import "./App.css"; // Include styles for modal

const Xmodal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;
  
    if (!username || !email || !phone || !dob) {
      alert("All fields are required.");
      return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
  
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date cannot be in the future.");
      return;
    }
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} />

          <label>Email Address:</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} />

          <label>Phone Number:</label>
          <input type="text" id="phone" value={formData.phone} onChange={handleChange} />

          <label>Date of Birth:</label>
          <input type="date" id="dob" value={formData.dob} onChange={handleChange} />

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Xmodal;