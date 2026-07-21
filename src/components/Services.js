import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Services = () => {
  const { t } = useApp();

  const services = [
    {
      icon: 'fas fa-palette',
      title: t('brandingDesign'),
      description: t('brandingDesc')
    },
    {
      icon: 'fas fa-book-open',
      title: t('brochureDesign'),
      description: t('brochureDesc')
    },
    {
      icon: 'fas fa-bullhorn',
      title: t('socialMediaDesign'),
      description: t('socialMediaDesc')
    },
    {
      icon: 'fas fa-t-shirt',
      title: t('printDesign'),
      description: t('printDesc')
    }
  ];

  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <h2 className="section-title">{t('servicesTitle')}</h2>
        <p className="section-subtitle">{t('servicesSubtitle')}</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to="/services" className="btn">{t('learnMore')}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;