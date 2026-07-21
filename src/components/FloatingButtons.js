import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";

const FloatingButtons = () => {
  const {   language } = useApp(); // أضفنا language لاستخدام الترجمة
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBackToTopVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // رسالة افتراضية حسب اللغة
  const whatsappMessage =
    language === "ar"
      ? "مرحباً، لدي استفسار بخصوص التصميم"
      : "Hello, I have a question about the design";

  // ترميز الرسالة لاستخدامها في الرابط
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <>
      <a
        href={`https://wa.me/967711907099?text=${encodedMessage}`}
        className="floating-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <button
        className={`floating-btn back-to-top ${isBackToTopVisible ? "active" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default FloatingButtons;
