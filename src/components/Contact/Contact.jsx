import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    // In a real application, you would send this data to your backend
    // For now, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thanks for your message! I\'ll get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__description">
          Feel free to contact me for any work or suggestions.
        </p>
        <div className="contact__form-container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-field">
              <label htmlFor="name" className="contact__form-label">Name</label>
              <input
                type="text"
                className="contact__form-input"
                placeholder="Enter Your Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label htmlFor="email" className="contact__form-label">Email</label>
              <input
                type="text"
                className="contact__form-input"
                placeholder="Enter Your Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label htmlFor="message" className="contact__form-label">Message</label>
              <textarea
                className="contact__form-input"
                placeholder="Enter Your Message"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            {formStatus.submitted && (
              <div className={`contact__form-status ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <button type="submit" className="btn btn--bg">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="contact__info">
          <div className="contact__info-item">
            <h3 className="contact__info-title">Email</h3>
            <a href="mailto:ajsorbello@gmail.com" className="contact__info-link">
              ajsorbello@gmail.com
            </a>
          </div>
          <div className="contact__info-item">
            <h3 className="contact__info-title">Phone</h3>
            <a href="tel:+12064992021" className="contact__info-link">
              +1 (206) 499-2021
            </a>
          </div>
          <div className="contact__info-item">
            <h3 className="contact__info-title">Location</h3>
            <p className="contact__info-text">
              Seattle, WA USA
            </p>
          </div>
          <div className="contact__info-item">
            <h3 className="contact__info-title">Full Stack Developer</h3>
            <p className="contact__info-text">
              React | Node.js | JavaScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
