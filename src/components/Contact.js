import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const Contact = () => {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title">{t('contactTitle')}</h2>
            <p>{t('contactSubtitle')}</p>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h4>{t('email')}</h4>
                <p>creative@designer.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-content">
                <h4>{t('phone')}</h4>
                <p>+967 772 692 608</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h4>{t('location')}</h4>
                <p>Sana'a, Yemen</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-behance"></i></a>
              <a href="#" className="social-link"><i className="fab fa-dribbble"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                className="form-input" 
                placeholder={t('yourName')}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                className="form-input" 
                placeholder={t('yourEmail')}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                className="form-input" 
                placeholder={t('subject')}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <textarea 
                className="form-input" 
                placeholder={t('message')}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn submit-btn ${isSubmitted ? 'submitted' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> {t('sending')}
                </>
              ) : isSubmitted ? (
                <>
                  {t('sent')} <i className="fas fa-check"></i>
                </>
              ) : (
                <>
                  {t('sendMessage')} <i className="fas fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;