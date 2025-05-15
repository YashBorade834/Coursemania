import React, { useState } from 'react';


function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Query submitted successfully!');
    setFormData({ name: '', email: '', phone: '', query: '' });
  };

  return (
    <div className="form-layout-wrapper">
      <img src="src\assets\images\teacher.webp" alt="left" className="side-img left-img" />
      
      <div className="center-wrapper">
        <div className="form-container">
          <h2>Student Query Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="query"
              placeholder="Your Query"
              value={formData.query}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <img src="src\assets\images\teacher.webp" alt="right" className="side-img right-img" />
    </div>
  );
}

export default Contact;
