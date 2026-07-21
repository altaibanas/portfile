import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const ServicesPage = () => {
  const { t } = useApp();

  useEffect(() => {
    // Scroll progress functionality
    const handleScroll = () => {
      const scrollProgress = document.getElementById("scroll-progress");
      if (scrollProgress) {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = progressHeight + "%";
      }
    };

    // Animation on scroll for service cards
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".service-card");

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    };

    // Set initial state for animated elements
    document.querySelectorAll(".service-card").forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(50px)";
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", animateOnScroll);

    animateOnScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  const services = [
    {
      icon: "fas fa-palette",
      title: t("brandingDesign"),
      description: t("brandingDesc"),
      features: [
        t("logoDesign"),
        t("visualIdentity"),
        "Business Cards",
        "Stationery Design",
      ],
    },
    {
      icon: "fas fa-book-open",
      title: t("brochureDesign"),
      description: t("brochureDesc"),
      features: [
        "Tri-fold Brochures",
        "Product Catalogs",
        "Marketing Booklets",
        "Promotional Flyers",
      ],
    },
    {
      icon: "fas fa-bullhorn",
      title: t("socialMediaDesign"),
      description: t("socialMediaDesc"),
      features: [
        "Social Media Posts",
        "Cover Photos",
        "Instagram Stories",
        "Social Media Ads",
      ],
    },
    {
      icon: "fas fa-t-shirt",
      title: t("printDesign"),
      description: t("printDesc"),
      features: [
        "Apparel Design",
        "Mugs & Gifts",
        "Promotional Prints",
        "Packaging Design",
      ],
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: t("contact"),
      description:
        t("home") === "الرئيسية"
          ? "اتصل بنا أو أرسل رسالة عبر نموذج التواصل لشرح متطلباتك"
          : "Contact us or send a message through the contact form to explain your requirements",
    },
    {
      number: "2",
      title: t("planning"),
      description:
        t("home") === "الرئيسية"
          ? "نناقش تفاصيل المشروع ونحدد الميزانية والجدول الزمني"
          : "We discuss project details and determine the budget and timeline",
    },
    {
      number: "3",
      title: t("execution"),
      description:
        t("home") === "الرئيسية"
          ? "نبدأ في تنفيذ التصميم وفقاً للمواصفات المتفق عليها"
          : "We begin implementing the design according to the agreed specifications",
    },
    {
      number: "4",
      title: t("delivery"),
      description:
        t("home") === "الرئيسية"
          ? "نسلم التصميم النهائي مع كافة الملفات والدعم الفني"
          : "We deliver the final design with all files and technical support",
    },
  ];

  return (
    <>
      <div id="scroll-progress"></div>
      <section className="about-hero section-padding">
        <div className="container">
          <h2 className="section-title">{t("servicesTitle")}</h2>
          <p className="section-subtitle">{t("servicesSubtitle")}</p>
        </div>
      </section>

      <section className="services section-padding">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn">
                    {t("orderService")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="process section-padding"
        style={{ background: "var(--light-color)" }}
      >
        <div className="container">
          <h2 className="section-title">
            {t("home") === "الرئيسية"
              ? "كيفية طلب الخدمة"
              : "How to Order a Service"}
          </h2>
          <p className="section-subtitle">
            {t("home") === "الرئيسية"
              ? "خطوات بسيطة للحصول على التصميم المثالي الذي تبحث عنه"
              : "Simple steps to get the perfect design you are looking for"}
          </p>

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

      {/* Statistics Section */}
      {/* <section className="stats-section">
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>
            {t('home') === 'الرئيسية' ? 'إحصائياتنا' : 'Our Statistics'}
          </h2>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number" data-count="150">0</span>
              <div className="stat-label">
                {t('home') === 'الرئيسية' ? 'مشروع مكتمل' : 'Completed Projects'}
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-count="50">0</span>
              <div className="stat-label">
                {t('home') === 'الرئيسية' ? 'عميل سعيد' : 'Happy Clients'}
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-count="7">0</span>
              <div className="stat-label">
                {t('home') === 'الرئيسية' ? 'سنوات خبرة' : 'Years Experience'}
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-count="24">0</span>
              <div className="stat-label">
                {t('home') === 'الرئيسية' ? 'ساعة دعم' : 'Support Hours'}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ServicesPage;
