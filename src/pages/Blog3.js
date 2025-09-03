import React from "react";
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  en: {
    predictiveTitle: "Predictive Analytics in Business",
    predictiveDesc: "Predictive analytics uses historical data and machine learning to forecast future outcomes. Businesses leverage these insights to optimize marketing campaigns, manage inventory, and improve customer retention. By anticipating trends and behaviors, organizations can make smarter, data-driven decisions.",
    predictiveList: [
      "Forecast sales and demand",
      "Personalize marketing strategies",
      "Reduce churn and improve retention"
    ],
    visualizationTitle: "Data Visualization for Decision Making",
    visualizationDesc: "Effective data visualization turns complex datasets into clear, actionable insights. Interactive dashboards and visual reports help teams spot patterns, track KPIs, and communicate findings. Good visualization empowers stakeholders to make informed decisions quickly and confidently.",
    visualizationList: [
      "Build interactive dashboards",
      "Highlight key metrics and trends",
      "Enable faster, evidence-based decisions"
    ]
  },
  ar: {
    predictiveTitle: "تحليلات التنبؤ في الأعمال",
    predictiveDesc: "تستخدم تحليلات التنبؤ البيانات التاريخية وتعلم الآلة للتنبؤ بالنتائج المستقبلية. تستفيد الشركات من هذه الرؤى لتحسين الحملات التسويقية وإدارة المخزون وزيادة الاحتفاظ بالعملاء. من خلال توقع الاتجاهات والسلوكيات، يمكن للمؤسسات اتخاذ قرارات أكثر ذكاءً قائمة على البيانات.",
    predictiveList: [
      "توقع المبيعات والطلب",
      "تخصيص استراتيجيات التسويق",
      "تقليل فقدان العملاء وزيادة الاحتفاظ"
    ],
    visualizationTitle: "تصوير البيانات لاتخاذ القرار",
    visualizationDesc: "يحول تصوير البيانات الفعال مجموعات البيانات المعقدة إلى رؤى واضحة وقابلة للتنفيذ. تساعد لوحات المعلومات التفاعلية والتقارير المرئية الفرق على اكتشاف الأنماط وتتبع مؤشرات الأداء والتواصل. التصوير الجيد يمكّن أصحاب المصلحة من اتخاذ قرارات مستنيرة بسرعة وثقة.",
    visualizationList: [
      "بناء لوحات معلومات تفاعلية",
      "تسليط الضوء على المؤشرات والاتجاهات الرئيسية",
      "تمكين قرارات أسرع قائمة على الأدلة"
    ]
  },
  he: {
    predictiveTitle: "אנליטיקה חזויה בעסקים",
    predictiveDesc: "אנליטיקה חזויה משתמשת בנתונים היסטוריים ולמידת מכונה כדי לחזות תוצאות עתידיות. עסקים מנצלים תובנות אלו כדי לשפר קמפיינים שיווקיים, לנהל מלאי ולשפר שימור לקוחות. על ידי חיזוי מגמות והתנהגויות, ארגונים יכולים לקבל החלטות חכמות ומבוססות נתונים.",
    predictiveList: [
      "חיזוי מכירות וביקוש",
      "התאמת אסטרטגיות שיווק אישיות",
      "הפחתת נטישה ושיפור שימור"
    ],
    visualizationTitle: "ויזואליזציית נתונים לקבלת החלטות",
    visualizationDesc: "ויזואליזציה יעילה הופכת נתונים מורכבים לתובנות ברורות ויישומיות. לוחות מחוונים אינטראקטיביים ודוחות חזותיים עוזרים לצוותים לזהות דפוסים, לעקוב אחרי KPI ולהעביר ממצאים. ויזואליזציה טובה מאפשרת קבלת החלטות מהירה ובטוחה.",
    visualizationList: [
      "בניית לוחות מחוונים אינטראקטיביים",
      "הדגשת מדדים ומגמות מרכזיות",
      "העצמת החלטות מהירות ומבוססות נתונים"
    ]
  }
};

const Blog3 = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

  React.useEffect(() => {
    if (language === "ar" || language === "he") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [language]);

  return (
    <div className={`blog3-page${darkMode ? " dark-mode" : ""}`}>
      {/* Section 1: Predictive Analytics in Business */}
      <section className="ds-section predictive-section">
        <h2>{t.predictiveTitle}</h2>
        <p>{t.predictiveDesc}</p>
        <ul>
          {t.predictiveList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 2: Data Visualization for Decision Making */}
      <section className="ds-section visualization-section">
        <h2>{t.visualizationTitle}</h2>
        <p>{t.visualizationDesc}</p>
        <ul>
          {t.visualizationList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <style>{`
        .blog3-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background: #f7f9fc;
          padding: 32px 0;
          color: #222;
          transition: background 0.3s, color 0.3s;
        }
        .blog3-page.dark-mode {
          background: #111;
          color: #fff;
        }
        .blog3-page.dark-mode .ds-section {
          background: #222;
          color: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.25);
        }
        .ds-section {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          max-width: 700px;
          margin: 32px auto;
          padding: 32px 28px;
          transition: background 0.3s, color 0.3s;
        }
        .ds-section h2 {
          color: #007bff;
          font-size: 2rem;
          margin-bottom: 18px;
        }
        .blog3-page.dark-mode .ds-section h2 {
          color: #007bff;
        }
        .ds-section p {
          color: #222;
          font-size: 1.08rem;
          margin-bottom: 18px;
        }
        .blog3-page.dark-mode .ds-section p,
        .blog3-page.dark-mode .ds-section ul,
        .blog3-page.dark-mode .ds-section li {
          color: #fff;
        }
        .ds-section ul {
          padding-left: 20px;
          color: #444;
          font-size: 1rem;
        }
        .ds-section li {
          margin-bottom: 10px;
        }
        .predictive-section {
          border-left: 6px solid #007bff;
        }
        .blog3-page.dark-mode .predictive-section {
          border-left: 6px solid #007bff;
        }
        .visualization-section {
          border-left: 6px solid #007bff;
        }
        .blog3-page.dark-mode .visualization-section {
          border-left: 6px solid #007bff;
        }
      `}</style>
    </div>
  );
};

export default Blog3;