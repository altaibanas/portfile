import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
// import Portfolio from '../components/Portfolio';
// import Testimonials from '../components/Testimonials';
// import Contact from '../components/Contact';
// import { useApp } from '../context/AppContext';

const Home = () => {
  

  useEffect(() => {
    // Scroll progress functionality
    const handleScroll = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = progressHeight + "%";
      }
    };

    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-item');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    // Statistics counter animation
    const animateStats = () => {
      const counters = document.querySelectorAll('.stat-number');
      const speed = 200;
      
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;
          
          const inc = target / speed;
          
          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };
        
        updateCount();
      });
    };

    // Set initial state for animated elements
    document.querySelectorAll('.service-card, .portfolio-item, .testimonial-item').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(50px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger animations on load
    animateOnScroll();

    // Animate stats when stats section is in view
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(statsSection);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <>
      <div id="scroll-progress"></div>
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      
      {/* Statistics Section for Home */}
      {/* <section className="stats-section">
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>
            {language === 'ar' ? 'إحصائياتنا' : 'Our Statistics'}
          </h2>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number" data-count="150">0</span>
              <div className="stat-label">
                {language === 'ar' ? 'مشروع مكتمل' : 'Completed Projects'}
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-count="50">0</span>
              <div className="stat-label">
                {language === 'ar' ? 'عميل سعيد' : 'Happy Clients'}
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-count="7">0</span>
              <div className="stat-label">
                {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-count="24">0</span>
              <div className="stat-label">
                {language === 'ar' ? 'ساعة دعم' : 'Support Hours'}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Contact /> */}
    </>
  );
};

export default Home;