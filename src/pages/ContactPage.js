import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";

const ContactPage = () => {
  const { t, language } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: t("email"),
      content: "creative@designer.com",
      type: "email",
    },
    {
      icon: "fas fa-phone-alt",
      title: t("phone"),
      content: "711907099",
      type: "phone",
    },
  ];

  // دالة لعرض المحتوى كرابط حسب النوع
  const renderContactContent = (info) => {
    if (info.type === "email") {
      return (
        <a href={`mailto:${info.content}`} className="contact-link">
          {info.content}
        </a>
      );
    } else if (info.type === "phone") {
      const phoneNumber = info.content.replace(/\s/g, "");
      return (
        <a href={`tel:${phoneNumber}`} className="contact-link">
          {info.content}
        </a>
      );
    } else {
      return <p>{info.content}</p>;
    }
  };

  return (
    <>
      <div id="scroll-progress"></div>
      <section className="about-hero section-padding">
        <div className="container">
          <h2 className="section-title">{t("contactTitle")}</h2>
          <p className="section-subtitle">{t("contactSubtitle")}</p>
        </div>
      </section>

      <section className="contact section-padding">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2 className="contact-title">
                {language === "ar" ? "لنتواصل" : "Get In Touch"}
              </h2>
              <p>{t("contactSubtitle")}</p>

              {contactInfo.map((info, index) => (
                <div className="info-item" key={index}>
                  <div className="info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {renderContactContent(info)}
                  </div>
                </div>
              ))}

              <div className="social-links">
                <a
                  href="https://www.behance.net/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Behance"
                >
                  <i className="fab fa-behance"></i>
                </a>
                <a
                  href="https://dribbble.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Dribbble"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
                <a
                  href="https://www.instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3
                className="section-title"
                style={{
                  textAlign: language === "ar" ? "right" : "left",
                  fontSize: "1.8rem",
                }}
              >
                {language === "ar" ? "أرسل رسالة" : "Send a Message"}
              </h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder={t("yourName")}
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
                  placeholder={t("yourEmail")}
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
                  placeholder={t("subject")}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-input"
                  placeholder={t("message")}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn submit-btn ${isSubmitted ? "submitted" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> {t("sending")}
                  </>
                ) : isSubmitted ? (
                  <>
                    {t("sent")} <i className="fas fa-check"></i>
                  </>
                ) : (
                  <>
                    {t("sendMessage")} <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="map-section"
        style={{ height: "400px", background: "var(--light-color)" }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sana'a+Yemen"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <i
                className="fas fa-map-marker-alt"
                style={{
                  fontSize: "3rem",
                  color: "var(--primary-color)",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              ></i>
            </a>
            <h3 style={{ color: "var(--dark-color)", marginBottom: "10px" }}>
              {language === "ar" ? "صنعاء، اليمن" : "Sana'a, Yemen"}
            </h3>
            <p style={{ color: "var(--text-light)" }}>
              {language === "ar"
                ? "نحن هنا لخدمتك في أي وقت"
                : "We are here to serve you anytime"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
