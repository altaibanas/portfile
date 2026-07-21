import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const About = () => {
  const { t,  } = useApp();

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

    // Animate skills when component mounts
    const animateSkills = () => {
      const skills = document.querySelectorAll('.skill-progress');
      skills.forEach(skill => {
        const width = skill.getAttribute('data-width');
        setTimeout(() => {
          skill.style.width = width;
        }, 500);
      });
    };

    // Animation on scroll for process steps
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.process-step');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    // Set initial state for animated elements
    document.querySelectorAll('.process-step').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(50px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    animateSkills();
    animateOnScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  const skills = [
    { name: t('logoDesign'), level: '95%' },
    { name: t('visualIdentity'), level: '90%' },
    { name: t('socialMediaDesignSkill'), level: '85%' },
    { name: t('printDesignSkill'), level: '88%' }
  ];

  const processSteps = [
    { number: '1', title: t('discovery'), description: t('discoveryDesc') },
    { number: '2', title: t('planning'), description: t('planningDesc') },
    { number: '3', title: t('execution'), description: t('executionDesc') },
    { number: '4', title: t('delivery'), description: t('deliveryDesc') }
  ];

  return (
    <>
      <div id="scroll-progress"></div>
      <section className="about-hero section-padding">
        <div className="container">
          <h2 className="section-title">{t("aboutTitle")}</h2>
          <p className="section-subtitle">{t("aboutSubtitle")}</p>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="about-image">
            <div
              className="about-img"
              style={{
              
              }}
            >
              <img  className="anasimage" src="images/portfolio/anas.png" alt='anas' />
            </div>
          </div>
          <div className="about-text">
            <h2>{t("aboutHeading")}</h2>
            <p>{t("aboutText1")}</p>
            <p>{t("aboutText2")}</p>
            <Link to="/contact" className="btn">
              {t("getInTouch")}
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-container section-padding">
        <div className="container">
          <h2 className="section-title">{t("skillsTitle")}</h2>
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width={skill.level}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process section-padding">
        <div className="container">
          <h2 className="section-title">{t("processTitle")}</h2>
          <p className="section-subtitle">{t("processSubtitle")}</p>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;