import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Header = () => {
  const { 
    t, 
    language, 
    setLanguage, 
    darkMode, 
    toggleDarkMode, 
    isMobileMenuOpen, 
    toggleMobileMenu 
  } = useApp();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  const closeMobileMenu = () => {
    toggleMobileMenu();
  };

  const handleLanguageChange = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  };

  return (
    <header id="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-icon">
            <i className="fas fa-paint-brush"></i>
          </div>
          <div className="logo-text">{language === 'ar' ? 'أنس' : 'ِAnas'}</div>
        </Link>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={closeMobileMenu}>
            {t('home')}
          </Link>
          <Link to="/services" className={isActive('/services')} onClick={closeMobileMenu}>
            {t('services')}
          </Link>
          <Link to="/portfolio" className={isActive('/portfolio')} onClick={closeMobileMenu}>
            {t('portfolio')}
          </Link>
          <Link to="/about" className={isActive('/about')} onClick={closeMobileMenu}>
            {t('about')}
          </Link>
          <Link to="/contact" className={isActive('/contact')} onClick={closeMobileMenu}>
            {t('contact')}
          </Link>
        </nav>

        <div className="header-controls">
          <button 
            className="language-switcher"
            onClick={handleLanguageChange}
            aria-label={language === 'ar' ? 'Switch to English' : 'التغيير إلى العربية'}
          >
            {language === 'ar' ? 'EN' : 'عربي'}
          </button>
          
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
        
        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;