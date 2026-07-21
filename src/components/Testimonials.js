import React from 'react';
import { useApp } from '../context/AppContext';

const Testimonials = () => {
  const { t, language } = useApp();

  const testimonials = [
    {
      text: language === 'ar' 
        ? '"عمل متميز وإبداعي، قام المصمم بتحويل فكرتي إلى تصميم رائع يفوق توقعاتي. التعامل كان محترفاً والالتزام بالوقت كان دقيقاً."'
        : '"Exceptional and creative work. The designer transformed my idea into a wonderful design that exceeded my expectations. The dealing was professional and time commitment was precise."',
      name: language === 'ar' ? 'أحمد السيد' : 'Ahmed Al-Sayed',
      position: language === 'ar' ? 'مدير تسويق - شركة التقنية' : 'Marketing Manager - Tech Company',
      background: 'linear-gradient(45deg, #6a11cb, #2575fc)'
    },
    {
      text: language === 'ar'
        ? '"شكراً لك على الجهد الرائع، التصميم كان مبتكراً واحترافياً وساعدنا في تعزيز حضورنا في السوق وجذب عملاء جدد."'
        : '"Thank you for the wonderful effort. The design was innovative and professional, and it helped us enhance our market presence and attract new customers."',
      name: language === 'ar' ? 'فاطمة محمد' : 'Fatima Mohammed',
      position: language === 'ar' ? 'مالكة متجر إلكتروني' : 'E-store Owner',
      background: 'linear-gradient(45deg, #ff3e78, #ff9a9e)'
    },
    {
      text: language === 'ar'
        ? '"تجربة رائعة من البداية إلى النهاية، المصمم استمع لاحتياجاتنا وقدم لنا تصميماً يعبر عن هوية علامتنا التجارية بشكل مثالي."'
        : '"A wonderful experience from start to finish. The designer listened to our needs and provided us with a design that perfectly expresses our brand identity."',
      name: language === 'ar' ? 'خالد عبدالله' : 'Khalid Abdullah',
      position: language === 'ar' ? 'مدير مؤسسة ثقافية' : 'Director - Cultural Foundation',
      background: 'linear-gradient(45deg, #84fab0, #8fd3f4)'
    },
    {
      text: language === 'ar'
        ? '"سرعة الاستجابة وجودة التصميم كانت استثنائية. أنصح بالتعامل معه لكل من يبحث عن تصميم احترافي."'
        : '"The response speed and design quality were exceptional. I recommend dealing with him for anyone looking for professional design."',
      name: language === 'ar' ? 'سارة أحمد' : 'Sara Ahmed',
      position: language === 'ar' ? 'مديرة متجر أزياء' : 'Fashion Store Manager',
      background: 'linear-gradient(45deg, #ff9a9e, #fad0c4)'
    }
  ];

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <h2 className="section-title">{t('testimonialsTitle')}</h2>
        <p className="section-subtitle">{t('testimonialsSubtitle')}</p>
        
        <div className="testimonials-horizontal">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-right"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-image" style={{background: testimonial.background}}></div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;