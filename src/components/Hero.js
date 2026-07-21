import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Hero = () => {
  const { t,  } = useApp();

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{t('heroTitle')}</h1>
          <p className="hero-subtitle">{t('heroSubtitle')}</p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn">{t('viewPortfolio')}</Link>
            <Link to="/contact" className="btn hero-btn-secondary">{t('contactMe')}</Link>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="hero-img" style={{background: 'linear-gradient(45deg, #6a11cb, #2575fc, #ff3e78)'}}>
              <div className="floating-elements">
                <div className="floating-element element-1">
                  <i className="fas fa-palette"></i>
                </div>
                <div className="floating-element element-2">
                  <i className="fas fa-vector-square"></i>
                </div>
                <div className="floating-element element-3">
                  <i className="fas fa-brush"></i>
                </div>
                <div className="floating-element element-4">
                  <i className="fas fa-object-group"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="hero-background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;