import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './AnalyticsReporting.css';

const translations = {
  en: {
    heroTitle: "Unlock Growth with Analytics & Reporting",
    sectionTitle: "Analytics & Reporting",
    sectionDesc: "Analytics and reporting are the backbone of successful digital marketing. We track, measure, and analyze your campaigns to provide actionable insights that drive smarter decisions and better results. Our team sets up advanced tracking, custom dashboards, and regular reports so you always know what’s working and where to improve.",
    sectionList: [
      "Campaign Performance Tracking",
      "Custom Dashboard Setup",
      "Conversion & ROI Analysis",
      "Monthly Reporting & Insights"
    ],
    servicesHeading: "Analytics & Reporting Services",
    cards: [
      {
        frontTitle: "Performance Tracking",
        frontDesc: "Monitor every campaign and channel to understand what drives results.",
        backDesc: "We set up tracking for website, ads, and social media to capture key metrics.",
        btn: "Learn More"
      },
      {
        frontTitle: "Custom Dashboards",
        frontDesc: "Visualize your data with easy-to-understand dashboards tailored to your goals.",
        backDesc: "We build dashboards in Google Analytics, Data Studio, and other platforms for real-time insights.",
        btn: "Learn More"
      },
      {
        frontTitle: "Reporting & Insights",
        frontDesc: "Receive regular reports and expert analysis to guide your marketing strategy.",
        backDesc: "Our team delivers monthly reports and recommendations for continuous improvement.",
        btn: "Learn More"
      }
    ],
    spotlightHeading: "Client Spotlight: FinTechPro's Data-Driven Success",
    spotlightDesc: "FinTechPro needed deeper insights into their digital campaigns. We implemented advanced analytics, custom dashboards, and monthly reporting. In 6 months, FinTechPro improved ROI by 55% and identified new growth opportunities through data-driven decisions.",
    spotlightDetails: [
      { label: "Industry:", value: "Finance Technology" },
      { label: "Timeframe:", value: "6 Months" },
      { label: "Services:", value: "Analytics Setup, Dashboard Reporting, ROI Analysis" },
      { label: "Key Challenge:", value: "Limited Visibility, Unclear ROI" }
    ],
    spotlightResults: [
      { value: "55%", label: "Increase in ROI" },
      { value: "20+", label: "Custom Reports Delivered" },
      { value: "3", label: "New Growth Channels Identified" }
    ],
    spotlightQuote: '"The analytics and reporting services gave us clarity and confidence. We now make decisions based on real data and see measurable growth."',
    spotlightAuthor: "- Rajiv Mehta, CMO at FinTechPro",
    processHeading: "Our Analytics & Reporting Process",
    processSubheading: "From setup to insights, we empower your marketing with data.",
    processSteps: [
      {
        step: "1",
        title: "Setup & Integration",
        desc: "We implement tracking tools and integrate all your marketing channels for complete data."
      },
      {
        step: "2",
        title: "Dashboard Creation",
        desc: "We build custom dashboards to visualize your KPIs and campaign performance."
      },
      {
        step: "3",
        title: "Reporting & Analysis",
        desc: "We deliver regular reports and analyze results to uncover opportunities and challenges."
      },
      {
        step: "4",
        title: "Optimization & Recommendations",
        desc: "We provide actionable insights and recommendations to improve your marketing ROI."
      }
    ],
    ctaHeading: "Ready to Make Data-Driven Decisions?",
    ctaDesc: "Contact us today to unlock the power of analytics and reporting for your digital marketing success.",
    ctaBtn: "Get Started with Analytics"
  },
  ar: {
    heroTitle: "حقق النمو مع التحليلات والتقارير",
    sectionTitle: "التحليلات والتقارير",
    sectionDesc: "التحليلات والتقارير هي أساس نجاح التسويق الرقمي. نحن نتتبع ونقيس ونحلل حملاتك لتقديم رؤى قابلة للتنفيذ تدفع لاتخاذ قرارات أكثر ذكاءً ونتائج أفضل. يقوم فريقنا بإعداد تتبع متقدم ولوحات معلومات مخصصة وتقارير منتظمة حتى تعرف دائمًا ما الذي يعمل وأين يجب التحسين.",
    sectionList: [
      "تتبع أداء الحملات",
      "إعداد لوحات معلومات مخصصة",
      "تحليل التحويل والعائد على الاستثمار",
      "تقارير ورؤى شهرية"
    ],
    servicesHeading: "خدمات التحليلات والتقارير",
    cards: [
      {
        frontTitle: "تتبع الأداء",
        frontDesc: "راقب كل حملة وقناة لفهم ما يحقق النتائج.",
        backDesc: "نقوم بإعداد تتبع للموقع والإعلانات ووسائل التواصل الاجتماعي لقياس المؤشرات الرئيسية.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "لوحات معلومات مخصصة",
        frontDesc: "تصور بياناتك من خلال لوحات معلومات سهلة الفهم مصممة لأهدافك.",
        backDesc: "نبني لوحات معلومات في Google Analytics وData Studio ومنصات أخرى لرؤى فورية.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "التقارير والرؤى",
        frontDesc: "احصل على تقارير منتظمة وتحليل خبراء لتوجيه استراتيجيتك التسويقية.",
        backDesc: "يقدم فريقنا تقارير شهرية وتوصيات للتحسين المستمر.",
        btn: "اعرف المزيد"
      }
    ],
    spotlightHeading: "تسليط الضوء على العميل: نجاح FinTechPro المعتمد على البيانات",
    spotlightDesc: "احتاجت FinTechPro إلى رؤى أعمق حول حملاتها الرقمية. قمنا بتنفيذ تحليلات متقدمة ولوحات معلومات مخصصة وتقارير شهرية. خلال 6 أشهر، حسنت FinTechPro العائد على الاستثمار بنسبة 55% وحددت فرص نمو جديدة من خلال اتخاذ قرارات قائمة على البيانات.",
    spotlightDetails: [
      { label: "الصناعة:", value: "تكنولوجيا المالية" },
      { label: "الإطار الزمني:", value: "6 أشهر" },
      { label: "الخدمات:", value: "إعداد التحليلات، تقارير اللوحات، تحليل العائد" },
      { label: "التحدي الرئيسي:", value: "رؤية محدودة، عائد غير واضح" }
    ],
    spotlightResults: [
      { value: "55%", label: "زيادة في العائد على الاستثمار" },
      { value: "20+", label: "تقارير مخصصة تم تقديمها" },
      { value: "3", label: "قنوات نمو جديدة تم تحديدها" }
    ],
    spotlightQuote: '"خدمات التحليلات والتقارير منحتنا وضوحًا وثقة. الآن نتخذ قرارات بناءً على بيانات حقيقية ونرى نموًا ملموسًا."',
    spotlightAuthor: "- راجيف ميهتا، مدير التسويق في FinTechPro",
    processHeading: "عملية التحليلات والتقارير لدينا",
    processSubheading: "من الإعداد إلى الرؤى، نعزز تسويقك بالبيانات.",
    processSteps: [
      {
        step: "1",
        title: "الإعداد والتكامل",
        desc: "نقوم بتنفيذ أدوات التتبع ودمج جميع قنوات التسويق الخاصة بك للحصول على بيانات كاملة."
      },
      {
        step: "2",
        title: "إنشاء لوحة المعلومات",
        desc: "نبني لوحات معلومات مخصصة لتصور مؤشرات الأداء وأداء الحملات."
      },
      {
        step: "3",
        title: "التقارير والتحليل",
        desc: "نقدم تقارير منتظمة ونحلل النتائج لاكتشاف الفرص والتحديات."
      },
      {
        step: "4",
        title: "التحسين والتوصيات",
        desc: "نقدم رؤى قابلة للتنفيذ وتوصيات لتحسين عائدك التسويقي."
      }
    ],
    ctaHeading: "جاهز لاتخاذ قرارات قائمة على البيانات؟",
    ctaDesc: "اتصل بنا اليوم لتكتشف قوة التحليلات والتقارير لنجاحك في التسويق الرقمي.",
    ctaBtn: "ابدأ مع التحليلات"
  },
  he: {
    heroTitle: "העצם את הצמיחה עם אנליטיקה ודיווח",
    sectionTitle: "אנליטיקה ודיווח",
    sectionDesc: "אנליטיקה ודיווח הם הבסיס להצלחת השיווק הדיגיטלי. אנו עוקבים, מודדים ומנתחים את הקמפיינים שלך כדי לספק תובנות מעשיות שמובילות להחלטות חכמות יותר ותוצאות טובות יותר. הצוות שלנו מגדיר מעקב מתקדם, לוחות מחוונים מותאמים אישית ודוחות קבועים כך שתמיד תדע מה עובד ואיפה לשפר.",
    sectionList: [
      "מעקב ביצועי קמפיינים",
      "הקמת לוחות מחוונים מותאמים",
      "ניתוח המרות ו-ROI",
      "דיווח ותובנות חודשיות"
    ],
    servicesHeading: "שירותי אנליטיקה ודיווח",
    cards: [
      {
        frontTitle: "מעקב ביצועים",
        frontDesc: "נטר כל קמפיין וערוץ כדי להבין מה מביא תוצאות.",
        backDesc: "אנו מגדירים מעקב לאתר, מודעות ורשתות חברתיות למדידת מדדים מרכזיים.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "לוחות מחוונים מותאמים",
        frontDesc: "הצג את הנתונים שלך עם לוחות מחוונים ברורים המותאמים למטרותיך.",
        backDesc: "אנו בונים לוחות מחוונים ב-Google Analytics, Data Studio ופלטפורמות נוספות לתובנות בזמן אמת.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "דיווח ותובנות",
        frontDesc: "קבל דוחות קבועים וניתוח מומחים להכוונת אסטרטגיית השיווק שלך.",
        backDesc: "הצוות שלנו מספק דוחות חודשיים והמלצות לשיפור מתמיד.",
        btn: "למידע נוסף"
      }
    ],
    spotlightHeading: "ספוטלייט לקוח: ההצלחה מבוססת הנתונים של FinTechPro",
    spotlightDesc: "FinTechPro נזקקה לתובנות עמוקות יותר על הקמפיינים הדיגיטליים שלה. יישמנו אנליטיקה מתקדמת, לוחות מחוונים מותאמים אישית ודיווח חודשי. תוך 6 חודשים, FinTechPro שיפרה את ה-ROI ב-55% וזיהתה ערוצי צמיחה חדשים באמצעות החלטות מבוססות נתונים.",
    spotlightDetails: [
      { label: "ענף:", value: "טכנולוגיה פיננסית" },
      { label: "תקופת זמן:", value: "6 חודשים" },
      { label: "שירותים:", value: "הגדרת אנליטיקה, דיווח לוחות מחוונים, ניתוח ROI" },
      { label: "אתגר מרכזי:", value: "ראות מוגבלת, ROI לא ברור" }
    ],
    spotlightResults: [
      { value: "55%", label: "עלייה ב-ROI" },
      { value: "20+", label: "דוחות מותאמים שנמסרו" },
      { value: "3", label: "ערוצי צמיחה חדשים שזוהו" }
    ],
    spotlightQuote: '"השירותים של אנליטיקה ודיווח נתנו לנו בהירות וביטחון. עכשיו אנחנו מקבלים החלטות על סמך נתונים אמיתיים ורואים צמיחה מדידה."',
    spotlightAuthor: "- רג'יב מהטה, סמנכ\"ל שיווק ב-FinTechPro",
    processHeading: "תהליך האנליטיקה והדיווח שלנו",
    processSubheading: "מההגדרה ועד התובנות, אנו מעצימים את השיווק שלך עם נתונים.",
    processSteps: [
      {
        step: "1",
        title: "הגדרה ואינטגרציה",
        desc: "אנו מיישמים כלי מעקב ומשלבים את כל ערוצי השיווק שלך לקבלת נתונים מלאים."
      },
      {
        step: "2",
        title: "יצירת לוח מחוונים",
        desc: "אנו בונים לוחות מחוונים מותאמים להצגת KPI וביצועי קמפיינים."
      },
      {
        step: "3",
        title: "דיווח וניתוח",
        desc: "אנו מספקים דוחות קבועים ומנתחים תוצאות כדי לגלות הזדמנויות ואתגרים."
      },
      {
        step: "4",
        title: "אופטימיזציה והמלצות",
        desc: "אנו מספקים תובנות והמלצות לשיפור ה-ROI השיווקי שלך."
      }
    ],
    ctaHeading: "מוכן לקבל החלטות מבוססות נתונים?",
    ctaDesc: "צור קשר היום כדי לגלות את כוח האנליטיקה והדיווח להצלחת השיווק הדיגיטלי שלך.",
    ctaBtn: "התחל עם אנליטיקה"
  }
};

const AnalyticsReporting = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      {/* Hero Section */}
      <div className="hero-container-services">
        <video
          className="hero-video-services"
          src="/images/analytics.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-services">
          <h1 className="hero-tagline-services">{t.heroTitle}</h1>
        </div>
      </div>

      {/* Analytics & Reporting Section */}
      <section className="corporate-events-section">
        <div className="corporate-events-wrapper">
          <div className="corporate-events-image-container">
            <img
              src="images/analyticss.jpg"
              alt="Analytics and reporting dashboard"
            />
          </div>
          <div className="corporate-events-content">
            <h2>{t.sectionTitle}</h2>
            <p style={{ textAlign: "justify" }}>{t.sectionDesc}</p>
            <ul>
              {t.sectionList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Showcase Section with Flip-Card Style */}
      <section className={`services-section ${darkMode ? 'dark-mode' : ''}`}>
        <div className="services-wrapper">
          <h2 className="services-heading">{t.servicesHeading}</h2>
          <div className="services-grid">
            {t.cards.map((card, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-card-inner">
                  <div className="service-card-front">
                    {idx === 0 && <FaHandshake className="service-icon" />}
                    {idx === 1 && <FaTrophy className="service-icon" />}
                    {idx === 2 && <FaAward className="service-icon" />}
                    <h3>{card.frontTitle}</h3>
                    <p>{card.frontDesc}</p>
                  </div>
                  <div className="service-card-back">
                    <p>{card.backDesc}</p>
                    <button className="btn">{card.btn}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="seo-spotlight-section">
        <div className="seo-spotlight-wrapper">
          <div className="seo-spotlight-content">
            <h2 className="seo-spotlight-heading">{t.spotlightHeading}</h2>
            <p className="seo-spotlight-paragraph">{t.spotlightDesc}</p>
            <div className="seo-spotlight-details">
              {t.spotlightDetails.map((detail, idx) => (
                <div className="seo-detail-item" key={idx}>
                  <span className="seo-detail-label">{detail.label}</span>
                  <span className="seo-detail-value">{detail.value}</span>
                </div>
              ))}
            </div>
            <div className="seo-results-highlight">
              {t.spotlightResults.map((result, idx) => (
                <div className="seo-result-metric" key={idx}>
                  <span className="seo-metric-value">{result.value}</span>
                  <span className="seo-metric-label">{result.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="seo-spotlight-visual">
            <div className="seo-video-container">
              <video
                src="images/analytics.mp4"
                alt="Analytics dashboard showing campaign performance"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="seo-spotlight-quote">
              <blockquote>
                {t.spotlightQuote}
                <footer>{t.spotlightAuthor}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* Analytics & Reporting Process Section */}
      <section className="event-process-section">
        <div className="event-process-wrapper">
          <h2 className="event-process-heading">{t.processHeading}</h2>
          <p className="event-process-subheading">{t.processSubheading}</p>
          <div className="process-grid">
            {t.processSteps.map((step, idx) => (
              <div className="process-step" key={idx}>
                <div className="step-icon">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final Call to Action Section */}
      <section className="cta-final-section">
        <div className="cta-final-content">
          <h2>{t.ctaHeading}</h2>
          <p>{t.ctaDesc}</p>
          <a href="#contact" className="cta-final-btn" onClick={() => handleGetStarted("/contact")}>
            {t.ctaBtn}
          </a>
        </div>
      </section>
    </div >
  );
};

export default AnalyticsReporting;