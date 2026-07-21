import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
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

    animateSkills();

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

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <main>
      <section className="about-hero section-padding">
        <div className="container">
          <h2 className="section-title">من أنا</h2>
          <p className="section-subtitle">مصمم جرافيك محترف مع خبرة تزيد عن 7 سنوات في مجال التصميم الإبداعي</p>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="about-image">
            <div className="about-img" style={{background: 'linear-gradient(45deg, #6a11cb, #2575fc)', height: '400px', borderRadius: '15px'}}></div>
          </div>
          <div className="about-text">
            <h2>سعيد لتعرفك عليّ!</h2>
            <p>أنا مصمم جرافيك متخصص في إنشاء هويات بصرية قوية وتصميمات إبداعية تلبي احتياجات العملاء. منذ بداية رحلتي في مجال التصميم، عملت مع العديد من العلامات التجارية والشركات لمساعدتهم في تحقيق أهدافهم من خلال تصميمات احترافية وجذابة.</p>
            <p>أؤمن بأن التصميم الجرافيكي ليس مجرد رسومات وألوان، بل هو لغة بصرية تحكي قصة العلامة التجارية وتؤثر في مشاعر الجمهور. لذلك، أركز دائماً على فهم احتياجات العميل وأهدافه قبل البدء في أي مشروع تصميمي.</p>
            <Link to="/contact" className="btn">تواصل معي</Link>
          </div>
        </div>
      </section>

      <section className="skills-container section-padding">
        <div className="container">
          <h2 className="section-title">مهاراتي</h2>
          <div className="skill">
            <div className="skill-info">
              <span>تصميم الشعارات</span>
              <span>95%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" data-width="95%"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>الهوية البصرية</span>
              <span>90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" data-width="90%"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>تصميم الوسائط الاجتماعية</span>
              <span>85%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" data-width="85%"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>تصميم المطبوعات</span>
              <span>88%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" data-width="88%"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="process section-padding">
        <div className="container">
          <h2 className="section-title">عملية التصميم</h2>
          <p className="section-subtitle">أتبع عملية تصميم منظمة لضمان تحقيق أفضل النتائج التي تلبي توقعات العملاء</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>الاستكشاف</h3>
              <p>أبدأ بفهم متطلبات العميل وأهداف المشروع ودراسة السوق والمنافسين</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>التخطيط</h3>
              <p>أقوم بتخطيط المشروع وتحديد الاستراتيجية المناسبة لتحقيق الأهداف</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>التنفيذ</h3>
              <p>أبدأ في تنفيذ التصميم بناءً على الخطط والاستراتيجيات الموضوعة</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>التسليم</h3>
              <p>أقوم بتسليم التصميم النهائي مع كافة الملفات والدعم اللازم</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;