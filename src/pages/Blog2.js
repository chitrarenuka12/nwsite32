import React from "react";
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  en: {
    userCenteredTitle: "User-Centered Design",
    userCenteredDesc: "UX design starts with understanding the needs, behaviors, and goals of your users. By conducting research, creating personas, and mapping user journeys, designers ensure every interaction is intuitive and meaningful. Empathy and feedback are key to crafting experiences that delight and engage.",
    userCenteredList: [
      "Conduct user interviews and surveys",
      "Create personas and journey maps",
      "Iterate designs based on user feedback"
    ],
    consistencyTitle: "Consistency & Simplicity",
    consistencyDesc: "Consistent layouts, colors, and navigation help users feel comfortable and confident. Simplicity reduces cognitive load, making it easy for users to find what they need and complete tasks efficiently. Clear visual hierarchy and familiar patterns are essential for great UX.",
    consistencyList: [
      "Use consistent colors, fonts, and icons",
      "Keep navigation simple and predictable",
      "Prioritize clarity and reduce clutter"
    ]
  },
  ar: {
    userCenteredTitle: "تصميم يركز على المستخدم",
    userCenteredDesc: "يبدأ تصميم تجربة المستخدم بفهم احتياجات وسلوكيات وأهداف المستخدمين. من خلال إجراء الأبحاث وإنشاء الشخصيات ورسم رحلات المستخدم، يضمن المصممون أن كل تفاعل يكون بديهيًا وذا معنى. التعاطف والتغذية الراجعة هما مفتاحا خلق تجارب تثير إعجاب المستخدمين.",
    userCenteredList: [
      "إجراء مقابلات واستطلاعات مع المستخدمين",
      "إنشاء شخصيات المستخدم ورسم خرائط الرحلة",
      "تكرار التصاميم بناءً على ملاحظات المستخدم"
    ],
    consistencyTitle: "الاتساق والبساطة",
    consistencyDesc: "التصاميم والألوان والتنقل المتسق تساعد المستخدمين على الشعور بالراحة والثقة. البساطة تقلل العبء الذهني وتجعل من السهل على المستخدمين العثور على ما يحتاجون إليه وإكمال المهام بكفاءة. التسلسل البصري الواضح والأنماط المألوفة ضرورية لتجربة مستخدم رائعة.",
    consistencyList: [
      "استخدم ألوانًا وخطوطًا وأيقونات متسقة",
      "اجعل التنقل بسيطًا ويمكن التنبؤ به",
      "أعط الأولوية للوضوح وقلل الفوضى"
    ]
  },
  he: {
    userCenteredTitle: "עיצוב ממוקד משתמש",
    userCenteredDesc: "עיצוב UX מתחיל בהבנת הצרכים, ההתנהגויות והמטרות של המשתמשים שלך. באמצעות מחקר, יצירת פרסונות ומיפוי מסעות משתמש, המעצבים מבטיחים שכל אינטראקציה תהיה אינטואיטיבית ובעלת משמעות. אמפתיה ומשוב הם המפתח ליצירת חוויות שמרגשות ומערבות.",
    userCenteredList: [
      "בצעו ראיונות וסקרים עם משתמשים",
      "צרו פרסונות ומפות מסע משתמש",
      "שפרו עיצובים לפי משוב משתמשים"
    ],
    consistencyTitle: "עקביות ופשטות",
    consistencyDesc: "פריסות, צבעים וניווט עקביים עוזרים למשתמשים להרגיש בנוח ובביטחון. פשטות מפחיתה עומס קוגניטיבי ומקלה על המשתמשים למצוא את מה שהם צריכים ולבצע משימות ביעילות. היררכיה ויזואלית ברורה ודפוסים מוכרים חיוניים ל-UX מצוין.",
    consistencyList: [
      "השתמשו בצבעים, פונטים ואייקונים עקביים",
      "שמרו על ניווט פשוט וצפוי",
      "העדיפו בהירות וצמצמו עומס"
    ]
  }
};

const Blog2 = () => {
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
    <div className={`blog2-page${darkMode ? " dark-mode" : ""}`}>
      {/* Section 1: User-Centered Design */}
      <section className="ux-section user-centered-section">
        <h2>{t.userCenteredTitle}</h2>
        <p>{t.userCenteredDesc}</p>
        <ul>
          {t.userCenteredList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 2: Consistency & Simplicity */}
      <section className="ux-section consistency-section">
        <h2>{t.consistencyTitle}</h2>
        <p>{t.consistencyDesc}</p>
        <ul>
          {t.consistencyList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <style>{`
        .blog2-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background: #f7f9fc;
          padding: 32px 0;
          color: #222;
          transition: background 0.3s, color 0.3s;
        }
        .blog2-page.dark-mode {
          background: #111;
          color: #fff;
        }
        .blog2-page.dark-mode .ux-section {
          background: #222;
          color: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.25);
        }
        .ux-section {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          max-width: 700px;
          margin: 32px auto;
          padding: 32px 28px;
          transition: background 0.3s, color 0.3s;
        }
        .ux-section h2 {
          color: #007bff;
          font-size: 2rem;
          margin-bottom: 18px;
        }
        .blog2-page.dark-mode .ux-section h2 {
          color: #66b2ff;
        }
        .ux-section p {
          color: #222;
          font-size: 1.08rem;
          margin-bottom: 18px;
        }
        .blog2-page.dark-mode .ux-section p,
        .blog2-page.dark-mode .ux-section ul,
        .blog2-page.dark-mode .ux-section li {
          color: #fff;
        }
        .ux-section ul {
          padding-left: 20px;
          color: #444;
          font-size: 1rem;
        }
        .ux-section li {
          margin-bottom: 10px;
        }
        .user-centered-section {
          border-left: 6px solid #007bff;
        }
        .blog2-page.dark-mode .user-centered-section {
          border-left: 6px solid #66b2ff;
        }
        .consistency-section {
          border-left: 6px solid #007bff;
        }
        .blog2-page.dark-mode .consistency-section {
          border-left: 6px solid #66b2ff;
        }
      `}</style>
    </div>
  );
};

export default Blog2;