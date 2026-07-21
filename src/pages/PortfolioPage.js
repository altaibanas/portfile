import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { useApp } from "../context/AppContext";

const PortfolioPage = () => {
  const { t, language } = useApp();
  const [activeFilterKey, setActiveFilterKey] = useState("all");
  const portfolioRef = useRef(null);

  // دالة مساعدة لإعادة تعيين الأنيميشن عند تغير القائمة
  const animateItems = useCallback(() => {
    const elements = document.querySelectorAll(".portfolio-item");
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(50px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    // تشغيل التأثير بعد إعادة التعيين
    setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    }, 50);
  }, []);

  // مراقبة التمرير لإظهار العناصر عند الدخول
  useEffect(() => {
    const handleScrollAndAnimate = () => {
      // تحديث شريط التقدم
      const scrollProgress = document.getElementById("scroll-progress");
      if (scrollProgress) {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
      }
      // تفعيل الأنيميشن للعناصر التي تظهر
      const elements = document.querySelectorAll(".portfolio-item");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScrollAndAnimate);
    handleScrollAndAnimate(); // تشغيل أولي

    return () => window.removeEventListener("scroll", handleScrollAndAnimate);
  }, []);

  // إعادة تعيين الأنيميشن عند تغيير الفلتر (تغير filteredItems)
  const [filteredItems, setFilteredItems] = useState([]);

  // استخدام useMemo لإنشاء قائمة المشاريع مع مفاتيح الترجمة (ثابتة)
  const portfolioItems = useMemo(
    () => [
      {
        id: 1,
        categoryKey: "print",
        titleKey: "ramadanCardTitle",
        descKey: "ramadanCardDesc",
        image: "/images/portfolio/ramdan.jpg",
      },
      {
        id: 2,
        categoryKey: "print",
        titleKey: "anasBrochureTitle",
        descKey: "anasBrochureDesc",
        image: "/images/portfolio/BROCH002 copy.jpg",
      },
      // ... باقي المشاريع بنفس الشكل (مع مفاتيح ثابتة وليس نصوصًا مباشرة)
      // ملاحظة: يجب إضافة جميع مفاتيح الترجمة إلى ملفات locales
    ],
    [],
  );

  // تحديث filteredItems عند تغيير الفلتر أو اللغة أو المشاريع
  useEffect(() => {
    const filtered =
      activeFilterKey === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.categoryKey === activeFilterKey);
    setFilteredItems(filtered);
  }, [activeFilterKey, portfolioItems, language]); // language لإعادة التصفية عند تغيير اللغة (إذا كانت الفئات تعتمد على اللغة)

  // إعادة تعيين الفلتر إلى "all" عند تغيير اللغة (اختياري لتحسين تجربة المستخدم)
  useEffect(() => {
    setActiveFilterKey("all");
  }, [language]);

  // بعد تغيير filteredItems، أعد تطبيق الأنيميشن
  useEffect(() => {
    animateItems();
  }, [filteredItems, animateItems]);

  // قائمة الفلاتر (مفاتيح ثابتة)
  const filterKeys = ["all", "branding", "socialMedia", "print"]; // تم حذف logos

  const handleFilterClick = (key) => {
    setActiveFilterKey(key);
  };

  return (
    <>
      <div id="scroll-progress"></div>
      <section className="about-hero section-padding">
        <div className="container">
          <h2 className="section-title">{t("portfolioTitle")}</h2>
          <p className="section-subtitle">{t("portfolioSubtitle")}</p>
        </div>
      </section>

      <section className="portfolio section-padding" ref={portfolioRef}>
        <div className="container">
          <div className="portfolio-filters">
            {filterKeys.map((key) => (
              <button
                key={key}
                className={`filter-btn ${activeFilterKey === key ? "active" : ""}`}
                onClick={() => handleFilterClick(key)}
              >
                {t(key)}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <div className="portfolio-item" key={item.id}>
                <div className="portfolio-img">
                  <img
                    src={item.image}
                    alt={t(item.titleKey)}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg";
                    }}
                  />
                </div>
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{t(item.titleKey)}</h3>
                  <p>{t(item.descKey)}</p>
                  <span className="portfolio-category">
                    {t(item.categoryKey)}
                  </span>
                  <button
                    className="portfolio-link"
                    onClick={() => console.log("فتح التفاصيل", item.id)}
                    aria-label={t("viewProject")}
                  >
                    <i
                      className={`fas ${language === "ar" ? "fa-arrow-left" : "fa-arrow-right"}`}
                    ></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
