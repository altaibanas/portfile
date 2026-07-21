import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Footer = () => {
  const { t,  } = useApp(); // أضفنا language للترجمة إن لزم

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>{t('home') === 'الرئيسية' ? 'المصمم الإبداعي' : 'Creative Designer'}</h2>
            <p>
              {t('home') === 'الرئيسية' 
                ? 'مصمم جرافيك محترف يقدم حلول تصميم إبداعية للعلامات التجارية والشركات والأفراد'
                : 'Professional graphic designer providing creative design solutions for brands, companies, and individuals'
              }
            </p>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title">{t('quickLinks')}</h3>
            <ul>
              <li><Link to="/">{t('home')}</Link></li>
              <li><Link to="/services">{t('services')}</Link></li>
              <li><Link to="/portfolio">{t('portfolio')}</Link></li>
              <li><Link to="/about">{t('about')}</Link></li>
              <li><Link to="/contact">{t('contact')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">{t('contactInfo')}</h3>
            <ul>
              {/* البريد الإلكتروني رابط */}
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:creative@designer.com" className="footer-link">
                  altaibanas2@gmail.com
                </a>
              </li>
              {/* رقم الهاتف رابط */}
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+967772692608" className="footer-link">
                  +967 711 907 099
                </a>
              </li>
              {/* الموقع رابط خرائط Google (يفتح في نافذة جديدة) */}
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Sana'a+Yemen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Sana'a, Yemen
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 {t('home') === 'الرئيسية' ? 'المصمم أنس' : 'ِAnas Designer'}. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;