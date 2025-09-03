import React from "react";
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  en: {
    aiTitle: "AI & Automation Revolutionizing Web Development",
    aiDesc: "Artificial Intelligence and automation tools are transforming how websites are built and maintained. From AI-powered code generation to automated testing and deployment, developers can now create smarter, faster, and more personalized web experiences. Embracing these technologies helps teams boost productivity and deliver innovative solutions.",
    aiList: [
      "AI-driven design and layout suggestions",
      "Automated code review and bug detection",
      "Personalized user experiences using machine learning"
    ],
    pwaTitle: "Progressive Web Apps: The Future of Mobile Web",
    pwaDesc: "PWAs combine the best of web and mobile apps, offering offline access, push notifications, and fast load times. Businesses are adopting PWAs to reach users on any device, improve engagement, and reduce development costs. This trend is set to dominate as users expect seamless, app-like experiences from their browsers.",
    pwaList: [
      "Offline functionality and caching",
      "App-like performance and reliability",
      "Easy installation from the browser"
    ]
  },
  ar: {
    aiTitle: "الذكاء الاصطناعي والأتمتة يغيران تطوير الويب",
    aiDesc: "أدوات الذكاء الاصطناعي والأتمتة تغير طريقة بناء وصيانة المواقع. من توليد الأكواد إلى الاختبار والنشر التلقائي، يمكن للمطورين الآن إنشاء تجارب ويب أكثر ذكاءً وسرعة وتخصيصًا. اعتماد هذه التقنيات يساعد الفرق على زيادة الإنتاجية وتقديم حلول مبتكرة.",
    aiList: [
      "اقتراحات التصميم والتخطيط المدعومة بالذكاء الاصطناعي",
      "مراجعة الأكواد واكتشاف الأخطاء تلقائيًا",
      "تجارب مستخدم مخصصة باستخدام التعلم الآلي"
    ],
    pwaTitle: "تطبيقات الويب التقدمية: مستقبل الويب المحمول",
    pwaDesc: "تجمع تطبيقات الويب التقدمية بين مزايا الويب والتطبيقات، وتوفر الوصول دون اتصال، وإشعارات الدفع، وسرعة التحميل. تعتمد الشركات PWAs للوصول إلى المستخدمين على أي جهاز وتحسين التفاعل وتقليل التكاليف. هذا الاتجاه سيهيمن مع توقع المستخدمين لتجارب سلسة تشبه التطبيقات.",
    pwaList: [
      "وظائف دون اتصال وتخزين مؤقت",
      "أداء وموثوقية تشبه التطبيقات",
      "تثبيت سهل من المتصفح"
    ]
  },
  he: {
    aiTitle: "בינה מלאכותית ואוטומציה משנות את פיתוח האתרים",
    aiDesc: "כלי AI ואוטומציה משנים את הדרך שבה אתרים נבנים ומנוהלים. מהפקת קוד אוטומטית ועד בדיקות ופריסה אוטומטית, מפתחים יכולים ליצור חוויות אינטרנט חכמות, מהירות ומותאמות אישית. אימוץ הטכנולוגיות הללו מסייע לצוותים להגדיל את הפרודוקטיביות ולספק פתרונות חדשניים.",
    aiList: [
      "הצעות עיצוב ופריסה מבוססות AI",
      "בדיקת קוד אוטומטית וזיהוי באגים",
      "חוויות משתמש מותאמות אישית עם למידת מכונה"
    ],
    pwaTitle: "אפליקציות אינטרנט מתקדמות: עתיד המובייל",
    pwaDesc: "PWAs משלבות את הטוב שבאפליקציות ואתרי אינטרנט, מציעות גישה לא מקוונת, התראות ודפי טעינה מהירים. עסקים מאמצים PWAs כדי להגיע לכל משתמש, לשפר מעורבות ולהפחית עלויות פיתוח. המגמה הזו צפויה לשלוט כשהמשתמשים מצפים לחוויה חלקה כמו אפליקציה.",
    pwaList: [
      "פונקציונליות לא מקוונת ואחסון זמני",
      "ביצועים ואמינות כמו אפליקציה",
      "התקנה קלה מהדפדפן"
    ]
  }
};

const Blog1 = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

  // Set RTL direction for Arabic/Hebrew
  React.useEffect(() => {
    if (language === "ar" || language === "he") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [language]);

  return (
    <div className={`blog1-page${darkMode ? " dark-mode" : ""}`}>
      {/* Section 1: AI & Automation in Web Development */}
      <section className="trend-section ai-section">
        <h2>{t.aiTitle}</h2>
        <p>{t.aiDesc}</p>
        <ul>
          {t.aiList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Section 2: Progressive Web Apps (PWAs) */}
      <section className="trend-section pwa-section">
        <h2>{t.pwaTitle}</h2>
        <p>{t.pwaDesc}</p>
        <ul>
          {t.pwaList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Inline CSS for styling */}
      <style>{`
        .blog1-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background: #f7f9fc;
          padding: 32px 0;
          color: #222;
          transition: background 0.3s, color 0.3s;
        }
        .blog1-page.dark-mode {
          background: #111;
          color: #fff;
        }
        .blog1-page.dark-mode .trend-section {
          background: #222;
          color: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.25);
        }
        .trend-section {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          max-width: 700px;
          margin: 32px auto;
          padding: 32px 28px;
          transition: background 0.3s, color 0.3s;
        }
        .trend-section h2 {
          color: #007bff;
          font-size: 2rem;
          margin-bottom: 18px;
        }
        .blog1-page.dark-mode .trend-section h2 {
          color: #66b2ff;
        }
        .trend-section p {
          color: #222;
          font-size: 1.08rem;
          margin-bottom: 18px;
        }
        .blog1-page.dark-mode .trend-section p,
        .blog1-page.dark-mode .trend-section ul,
        .blog1-page.dark-mode .trend-section li {
          color: #fff;
        }
        .trend-section ul {
          padding-left: 20px;
          color: #444;
          font-size: 1rem;
        }
        .trend-section li {
          margin-bottom: 10px;
        }
        .ai-section {
          border-left: 6px solid #007bff;
        }
        .blog1-page.dark-mode .ai-section {
          border-left: 6px solid #66b2ff;
        }
        .pwa-section {
          border-left: 6px solid #28a745;
        }
        .blog1-page.dark-mode .pwa-section {
          border-left: 6px solid #85e0a0;
        }
      `}</style>
    </div>
  );
};

export default Blog1;