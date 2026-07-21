import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";

const Portfolio = () => {
  const { t, language } = useApp(); // نفترض وجود اللغة في الـ Context
  const [activeFilter, setActiveFilter] = useState("all"); // مفتاح ثابت، ليس نصًا مترجمًا

  // بيانات الأعمال - إضافة id فريد ومفاتيح ترجمة للعنوان والوصف
  const portfolioItems = [
    {
      id: 1,
      categoryKey: "branding",
      titleKey: "brandingDesign",
      descKey: "brandingDesc",
      background: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    },
    {
      id: 2,
      categoryKey: "socialMedia",
      titleKey: "socialMediaDesign",
      descKey: "socialMediaDesc",
      background: "linear-gradient(45deg, #a1c4fd, #c2e9fb)",
    },
    {
      id: 3,
      categoryKey: "print",
      titleKey: "printDesign",
      descKey: "printDesc",
      background: "linear-gradient(45deg, #ffecd2, #fcb69f)",
    },
    {
      id: 4,
      categoryKey: "logos",
      titleKey: "logosDesignTitle", // يجب إضافتها في ملف الترجمة
      descKey: "logosDesignDesc", // يجب إضافتها في ملف الترجمة
      background: "linear-gradient(45deg, #84fab0, #8fd3f4)",
    },
  ];

  // قائمة الفلاتر باستخدام المفاتيح الثابتة
  const filterKeys = ["all", "branding", "socialMedia", "print", "logos"];

  // عند تغيير اللغة، أعد تعيين الفلتر إلى 'all' لتجنب عدم التطابق
  useEffect(() => {
    setActiveFilter("all");
  }, [language]);

  // تصفية العناصر حسب المفتاح النشط
  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.categoryKey === activeFilter);

  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="container">
        <h2 className="section-title">{t("portfolioTitle")}</h2>
        <p className="section-subtitle">{t("portfolioSubtitle")}</p>

        <div className="portfolio-filters">
          {filterKeys.map((filterKey) => (
            <button
              key={filterKey}
              className={`filter-btn ${activeFilter === filterKey ? "active" : ""}`}
              onClick={() => setActiveFilter(filterKey)}
            >
              {t(filterKey)} {/* عرض النص المترجم للمفتاح */}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <div
                className="portfolio-img"
                style={{ background: item.background }}
              >
                {/* يمكن إضافة صورة حقيقية هنا */}
              </div>
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{t(item.titleKey)}</h3>
                <p>{t(item.descKey)}</p>
                <span className="portfolio-category">
                  {t(item.categoryKey)}
                </span>
                {/* استخدام زر بدلاً من الرابط # */}
                <button
                  className="portfolio-link"
                  onClick={() => console.log("عرض التفاصيل", item.id)}
                  aria-label={t("viewProject")}
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
