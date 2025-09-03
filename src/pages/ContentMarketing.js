import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './ContentMarketing.css';

const translations = {
  en: {
    heroTitle: "Drive Growth with Content Marketing",
    sectionTitle: "Content Marketing",
    sectionDesc: "Content marketing is the key to building trust, educating your audience, and driving organic growth. Our team creates compelling blogs, guides, videos, and infographics that attract, engage, and convert your ideal customers. We focus on strategy, storytelling, and SEO to ensure your content delivers measurable results.",
    sectionList: [
      "Content Strategy & Planning",
      "Blog & Article Writing",
      "Video & Infographic Production",
      "SEO Content Optimization"
    ],
    servicesHeading: "Content Marketing Services",
    cards: [
      {
        frontTitle: "Content Strategy",
        frontDesc: "We develop a custom content plan aligned with your business goals and audience needs.",
        backDesc: "From topic research to editorial calendars, we lay the foundation for consistent, impactful content.",
        btn: "Learn More"
      },
      {
        frontTitle: "Content Creation",
        frontDesc: "Engaging blogs, articles, videos, and infographics that educate and inspire your audience.",
        backDesc: "Our writers and designers craft high-quality content tailored to your brand voice and goals.",
        btn: "Learn More"
      },
      {
        frontTitle: "SEO Optimization",
        frontDesc: "We optimize your content for search engines to boost visibility and organic traffic.",
        backDesc: "Our team uses keyword research and on-page SEO best practices for maximum reach.",
        btn: "Learn More"
      }
    ],
    spotlightHeading: "Client Spotlight: TechBrand's Content Transformation",
    spotlightDesc: "TechBrand wanted to educate its audience and improve organic traffic. Our content marketing experts developed a blog strategy, produced educational videos, and optimized all content for SEO. In 6 months, TechBrand tripled its website visits and saw a 50% increase in lead generation.",
    spotlightDetails: [
      { label: "Industry:", value: "Technology" },
      { label: "Timeframe:", value: "6 Months" },
      { label: "Services:", value: "Content Strategy, Blog Writing, SEO Optimization" },
      { label: "Key Challenge:", value: "Low Organic Traffic, Limited Engagement" }
    ],
    spotlightResults: [
      { value: "3x", label: "Increase in Website Visits" },
      { value: "50%", label: "Increase in Lead Generation" },
      { value: "40", label: "New Educational Blog Posts" }
    ],
    spotlightQuote: '"Our content strategy delivered real results. The team’s expertise helped us educate our audience and grow our business."',
    spotlightAuthor: "- Sarah Patel, Marketing Manager at TechBrand",
    processHeading: "Our Content Marketing Process",
    processSubheading: "From strategy to creation and optimization, we deliver content that drives growth.",
    processSteps: [
      {
        step: "1",
        title: "Discovery & Strategy",
        desc: "We research your audience and goals to build a custom content plan."
      },
      {
        step: "2",
        title: "Content Creation",
        desc: "Our team produces blogs, videos, and infographics that engage and inform."
      },
      {
        step: "3",
        title: "SEO Optimization",
        desc: "We optimize every piece for search engines to maximize reach and impact."
      },
      {
        step: "4",
        title: "Performance Tracking",
        desc: "We monitor results and refine your strategy for continuous improvement."
      }
    ],
    ctaHeading: "Ready to Elevate Your Brand with Content?",
    ctaDesc: "Contact us today to build a powerful content strategy and drive real business growth.",
    ctaBtn: "Start Your Content Journey"
  },
  ar: {
    heroTitle: "نمِّ عملك من خلال تسويق المحتوى",
    sectionTitle: "تسويق المحتوى",
    sectionDesc: "تسويق المحتوى هو المفتاح لبناء الثقة وتثقيف جمهورك وتحقيق النمو العضوي. ينشئ فريقنا مدونات وأدلة وفيديوهات وإنفوجرافيك جذابة تجذب العملاء المثاليين وتزيد التفاعل والتحويل. نركز على الاستراتيجية والسرد وتحسين محركات البحث لضمان تحقيق نتائج ملموسة.",
    sectionList: [
      "استراتيجية وتخطيط المحتوى",
      "كتابة المدونات والمقالات",
      "إنتاج الفيديوهات والإنفوجرافيك",
      "تحسين المحتوى لمحركات البحث"
    ],
    servicesHeading: "خدمات تسويق المحتوى",
    cards: [
      {
        frontTitle: "استراتيجية المحتوى",
        frontDesc: "نطور خطة محتوى مخصصة تتماشى مع أهداف عملك واحتياجات جمهورك.",
        backDesc: "من البحث عن المواضيع إلى جداول التحرير، نضع الأساس لمحتوى فعال ومستمر.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "إنشاء المحتوى",
        frontDesc: "مدونات ومقالات وفيديوهات وإنفوجرافيك جذابة تثقف وتلهم جمهورك.",
        backDesc: "يكتب فريقنا محتوى عالي الجودة يتناسب مع صوت علامتك التجارية وأهدافك.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "تحسين SEO",
        frontDesc: "نحسن محتواك لمحركات البحث لزيادة الظهور والزيارات العضوية.",
        backDesc: "نستخدم البحث عن الكلمات المفتاحية وأفضل ممارسات SEO لتحقيق أقصى انتشار.",
        btn: "اعرف المزيد"
      }
    ],
    spotlightHeading: "تسليط الضوء: تحول محتوى TechBrand",
    spotlightDesc: "أرادت TechBrand تثقيف جمهورها وزيادة الزيارات العضوية. طور خبراؤنا استراتيجية مدونات، وأنتجوا فيديوهات تعليمية، وحسنوا كل المحتوى لمحركات البحث. خلال 6 أشهر، تضاعفت زيارات الموقع ثلاث مرات وزادت توليد العملاء المحتملين بنسبة 50٪.",
    spotlightDetails: [
      { label: "الصناعة:", value: "تكنولوجيا" },
      { label: "الإطار الزمني:", value: "6 أشهر" },
      { label: "الخدمات:", value: "استراتيجية المحتوى، كتابة المدونات، تحسين SEO" },
      { label: "التحدي الرئيسي:", value: "زيارات عضوية منخفضة، تفاعل محدود" }
    ],
    spotlightResults: [
      { value: "3x", label: "زيادة زيارات الموقع" },
      { value: "50%", label: "زيادة توليد العملاء المحتملين" },
      { value: "40", label: "مدونات تعليمية جديدة" }
    ],
    spotlightQuote: '"استراتيجيتنا في المحتوى حققت نتائج حقيقية. خبرة الفريق ساعدتنا في تثقيف الجمهور ونمو الأعمال."',
    spotlightAuthor: "- سارة باتيل، مديرة التسويق في TechBrand",
    processHeading: "عملية تسويق المحتوى لدينا",
    processSubheading: "من الاستراتيجية إلى الإنشاء والتحسين، نقدم محتوى يدفع النمو.",
    processSteps: [
      {
        step: "1",
        title: "الاكتشاف والاستراتيجية",
        desc: "نبحث جمهورك وأهدافك لبناء خطة محتوى مخصصة."
      },
      {
        step: "2",
        title: "إنشاء المحتوى",
        desc: "ينتج فريقنا مدونات وفيديوهات وإنفوجرافيك تجذب وتثقف."
      },
      {
        step: "3",
        title: "تحسين SEO",
        desc: "نحسن كل قطعة لمحركات البحث لتحقيق أقصى انتشار وتأثير."
      },
      {
        step: "4",
        title: "تتبع الأداء",
        desc: "نراقب النتائج ونطور الاستراتيجية للتحسين المستمر."
      }
    ],
    ctaHeading: "جاهز لتعزيز علامتك التجارية بالمحتوى؟",
    ctaDesc: "اتصل بنا اليوم لبناء استراتيجية محتوى قوية وتحقيق نمو فعلي للأعمال.",
    ctaBtn: "ابدأ رحلة المحتوى"
  },
  he: {
    heroTitle: "העצם את הצמיחה עם שיווק תוכן",
    sectionTitle: "שיווק תוכן",
    sectionDesc: "שיווק תוכן הוא המפתח לבניית אמון, חינוך הקהל והגדלת הצמיחה האורגנית. הצוות שלנו יוצר בלוגים, מדריכים, סרטונים ואינפוגרפיקות שמושכים, מעוררים וממירים את הלקוחות האידיאליים שלך. אנו מתמקדים באסטרטגיה, סיפור וסביבת SEO כדי להבטיח שהתוכן שלך יביא תוצאות מדידות.",
    sectionList: [
      "אסטרטגיית ותכנון תוכן",
      "כתיבת בלוגים ומאמרים",
      "הפקת סרטונים ואינפוגרפיקות",
      "אופטימיזציית תוכן ל-SEO"
    ],
    servicesHeading: "שירותי שיווק תוכן",
    cards: [
      {
        frontTitle: "אסטרטגיית תוכן",
        frontDesc: "אנו מפתחים תוכנית תוכן מותאמת למטרות העסק והקהל שלך.",
        backDesc: "ממחקר נושאים ועד לוחות עריכה, אנו מניחים את הבסיס לתוכן עקבי ומשמעותי.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "יצירת תוכן",
        frontDesc: "בלוגים, מאמרים, סרטונים ואינפוגרפיקות שמחנכים ומעוררים את הקהל שלך.",
        backDesc: "כותבי ומעצבי הצוות יוצרים תוכן איכותי המותאם לקול המותג ולמטרותיך.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "אופטימיזציית SEO",
        frontDesc: "אנו ממטבים את התוכן שלך למנועי חיפוש כדי להגדיל נראות ותנועה אורגנית.",
        backDesc: "הצוות משתמש במחקר מילות מפתח ובשיטות SEO מיטביות להגעה מקסימלית.",
        btn: "למידע נוסף"
      }
    ],
    spotlightHeading: "ספוטלייט לקוח: טרנספורמציית התוכן של TechBrand",
    spotlightDesc: "TechBrand רצתה לחנך את הקהל ולשפר תנועה אורגנית. מומחי התוכן שלנו פיתחו אסטרטגיית בלוגים, הפיקו סרטונים חינוכיים ומטבו את כל התוכן ל-SEO. תוך 6 חודשים, TechBrand שילשה את ביקורי האתר והגדילה לידים ב-50%.",
    spotlightDetails: [
      { label: "ענף:", value: "טכנולוגיה" },
      { label: "תקופת זמן:", value: "6 חודשים" },
      { label: "שירותים:", value: "אסטרטגיית תוכן, כתיבת בלוגים, אופטימיזציית SEO" },
      { label: "אתגר מרכזי:", value: "תנועה אורגנית נמוכה, מעורבות מוגבלת" }
    ],
    spotlightResults: [
      { value: "3x", label: "עלייה בביקורי האתר" },
      { value: "50%", label: "עלייה ביצירת לידים" },
      { value: "40", label: "פוסטים חינוכיים חדשים" }
    ],
    spotlightQuote: '"אסטרטגיית התוכן שלנו הביאה תוצאות אמיתיות. מומחיות הצוות עזרה לנו לחנך את הקהל ולצמוח."',
    spotlightAuthor: "- שרה פאטל, מנהלת שיווק ב-TechBrand",
    processHeading: "תהליך שיווק התוכן שלנו",
    processSubheading: "מאסטרטגיה ליצירה ואופטימיזציה, אנו מספקים תוכן שמניע צמיחה.",
    processSteps: [
      {
        step: "1",
        title: "גילוי ואסטרטגיה",
        desc: "אנו חוקרים את הקהל והמטרות שלך כדי לבנות תוכנית תוכן מותאמת."
      },
      {
        step: "2",
        title: "יצירת תוכן",
        desc: "הצוות שלנו יוצר בלוגים, סרטונים ואינפוגרפיקות שמערבים ומחנכים."
      },
      {
        step: "3",
        title: "אופטימיזציית SEO",
        desc: "אנו ממטבים כל תוכן למנועי חיפוש להגעה והשפעה מקסימלית."
      },
      {
        step: "4",
        title: "מעקב ביצועים",
        desc: "אנו עוקבים אחרי התוצאות ומשפרים את האסטרטגיה לשיפור מתמיד."
      }
    ],
    ctaHeading: "מוכן להעצים את המותג שלך עם תוכן?",
    ctaDesc: "צור קשר היום לבניית אסטרטגיית תוכן חזקה ולהשגת צמיחה אמיתית.",
    ctaBtn: "התחל את מסע התוכן שלך"
  }
};

const ContentMarketing = () => {
  const navigate = useNavigate();
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

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      {/* Hero Section */}
      <div className="hero-container-services">
        <video
          className="hero-video-services"
          src="/images/content-m.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-services">
          <h1 className="hero-tagline-services">{t.heroTitle}</h1>
        </div>
      </div>

      {/* Content Marketing Section */}
      <section className="corporate-events-section">
        <div className="corporate-events-wrapper">
          <div className="corporate-events-image-container">
            <img
              src="images/conent-m.jpg"
              alt="Content marketing analytics dashboard"
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
                src="images/content-m.mp4"
                alt="Content marketing dashboard showing performance metrics"
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
      {/* Content Marketing Process Section */}
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

export default ContentMarketing;