import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './SocialMedia.css';

const translations = {
  en: {
    heroTitle: "Grow Your Brand with Social Media Marketing",
    sectionTitle: "Social Media Marketing",
    sectionDesc: "Social media marketing is essential for building brand awareness, engaging your audience, and driving conversions. Our team creates and manages campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter to help you connect with your ideal customers. We focus on creative content, targeted ads, and real-time analytics to maximize your reach and impact.",
    sectionList: [
      "Social Media Strategy & Planning",
      "Content Creation & Scheduling",
      "Community Management",
      "Paid Social Advertising"
    ],
    servicesHeading: "Social Media Services for Engagement",
    cards: [
      {
        frontTitle: "Strategy & Planning",
        frontDesc: "We develop custom social media strategies tailored to your brand and goals.",
        backDesc: "From audience research to platform selection, we set the foundation for your social success.",
        btn: "Learn More"
      },
      {
        frontTitle: "Content Creation",
        frontDesc: "Engaging posts, stories, and videos that capture attention and spark conversation.",
        backDesc: "We craft creative content calendars and visuals to keep your audience coming back.",
        btn: "Learn More"
      },
      {
        frontTitle: "Community & Ads Management",
        frontDesc: "We manage your community and run targeted ad campaigns for measurable results.",
        backDesc: "Our team responds to comments, monitors engagement, and optimizes paid ads for ROI.",
        btn: "Learn More"
      }
    ],
    spotlightHeading: "Client Spotlight: CafeConnect's Social Growth",
    spotlightDesc: "CafeConnect wanted to build a loyal online community. Our social media experts launched creative campaigns, managed daily engagement, and ran targeted ads. In 4 months, CafeConnect doubled its followers and increased in-store visits by 60%.",
    spotlightDetails: [
      { label: "Industry:", value: "Hospitality" },
      { label: "Timeframe:", value: "4 Months" },
      { label: "Services:", value: "Social Media Management, Paid Ads" },
      { label: "Key Challenge:", value: "Low Engagement, Small Audience" }
    ],
    spotlightResults: [
      { value: "2x", label: "Increase in Followers" },
      { value: "60%", label: "Increase in In-Store Visits" },
      { value: "120%", label: "Increase in Engagement" }
    ],
    spotlightQuote: '"Our social media presence exploded! The team\'s creativity and responsiveness made all the difference."',
    spotlightAuthor: "- Emily Carter, Owner at CafeConnect",
    processHeading: "Our Social Media Process",
    processSubheading: "From strategy to daily engagement, we help your brand thrive online.",
    processSteps: [
      {
        step: "1",
        title: "Discovery & Strategy",
        desc: "We learn about your brand and audience to create a custom social media plan."
      },
      {
        step: "2",
        title: "Content Creation",
        desc: "We design and schedule posts, stories, and videos that reflect your brand voice."
      },
      {
        step: "3",
        title: "Engagement & Community",
        desc: "We interact with your audience, respond to comments, and foster a loyal community."
      },
      {
        step: "4",
        title: "Analytics & Optimization",
        desc: "We track results and refine your strategy for continuous growth and improvement."
      }
    ],
    ctaHeading: "Ready to Grow Your Social Presence?",
    ctaDesc: "Contact us today to boost your brand, engage your audience, and drive real results with social media marketing.",
    ctaBtn: "Start Your Social Campaign"
  },
  ar: {
    heroTitle: "نمِّ علامتك التجارية مع التسويق عبر وسائل التواصل الاجتماعي",
    sectionTitle: "التسويق عبر وسائل التواصل الاجتماعي",
    sectionDesc: "يعد التسويق عبر وسائل التواصل الاجتماعي ضروريًا لبناء الوعي بالعلامة التجارية، وزيادة التفاعل، وتحقيق التحويلات. ينشئ فريقنا حملات ويديرها عبر منصات مثل فيسبوك، إنستغرام، لينكدإن، وتويتر لمساعدتك على التواصل مع عملائك المثاليين. نركز على المحتوى الإبداعي، الإعلانات المستهدفة، والتحليلات الفورية لتعظيم الوصول والتأثير.",
    sectionList: [
      "استراتيجية وتخطيط وسائل التواصل الاجتماعي",
      "إنشاء وجدولة المحتوى",
      "إدارة المجتمع",
      "الإعلانات المدفوعة على وسائل التواصل"
    ],
    servicesHeading: "خدمات التواصل الاجتماعي لتعزيز التفاعل",
    cards: [
      {
        frontTitle: "الاستراتيجية والتخطيط",
        frontDesc: "نطور استراتيجيات مخصصة لوسائل التواصل الاجتماعي تتناسب مع علامتك التجارية وأهدافك.",
        backDesc: "من بحث الجمهور إلى اختيار المنصة، نضع الأساس لنجاحك الاجتماعي.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "إنشاء المحتوى",
        frontDesc: "منشورات وقصص وفيديوهات جذابة تلفت الانتباه وتثير الحوار.",
        backDesc: "نصمم جداول محتوى إبداعية ومرئية لإبقاء جمهورك متفاعلاً.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "إدارة المجتمع والإعلانات",
        frontDesc: "ندير مجتمعك ونشغل حملات إعلانية مستهدفة لتحقيق نتائج ملموسة.",
        backDesc: "يستجيب فريقنا للتعليقات، ويراقب التفاعل، ويُحسن الإعلانات المدفوعة لتحقيق العائد.",
        btn: "اعرف المزيد"
      }
    ],
    spotlightHeading: "تسليط الضوء: نمو CafeConnect الاجتماعي",
    spotlightDesc: "أرادت CafeConnect بناء مجتمع إلكتروني وفي. أطلق خبراؤنا حملات إبداعية، وأداروا التفاعل اليومي، وشغلوا إعلانات مستهدفة. خلال 4 أشهر فقط، تضاعف عدد المتابعين وزادت زيارات المتجر بنسبة 60٪.",
    spotlightDetails: [
      { label: "الصناعة:", value: "الضيافة" },
      { label: "الإطار الزمني:", value: "4 أشهر" },
      { label: "الخدمات:", value: "إدارة وسائل التواصل، الإعلانات المدفوعة" },
      { label: "التحدي الرئيسي:", value: "تفاعل منخفض، جمهور صغير" }
    ],
    spotlightResults: [
      { value: "2x", label: "زيادة في عدد المتابعين" },
      { value: "60%", label: "زيادة في زيارات المتجر" },
      { value: "120%", label: "زيادة في التفاعل" }
    ],
    spotlightQuote: '"وجودنا على وسائل التواصل الاجتماعي انفجر! إبداع الفريق واستجابته أحدثا فرقًا كبيرًا."',
    spotlightAuthor: "- إميلي كارتر، مالكة CafeConnect",
    processHeading: "عملية التواصل الاجتماعي لدينا",
    processSubheading: "من الاستراتيجية إلى التفاعل اليومي، نساعد علامتك التجارية على النجاح عبر الإنترنت.",
    processSteps: [
      {
        step: "1",
        title: "الاكتشاف والاستراتيجية",
        desc: "نتعرف على علامتك التجارية وجمهورك لإنشاء خطة مخصصة لوسائل التواصل الاجتماعي."
      },
      {
        step: "2",
        title: "إنشاء المحتوى",
        desc: "نصمم ونجدول المنشورات والقصص والفيديوهات التي تعكس صوت علامتك التجارية."
      },
      {
        step: "3",
        title: "التفاعل والمجتمع",
        desc: "نتفاعل مع جمهورك، ونرد على التعليقات، ونبني مجتمعًا وفيًا."
      },
      {
        step: "4",
        title: "التحليلات والتحسين",
        desc: "نتابع النتائج ونطور الاستراتيجية لتحقيق نمو وتحسين مستمر."
      }
    ],
    ctaHeading: "جاهز لتعزيز حضورك الاجتماعي؟",
    ctaDesc: "اتصل بنا اليوم لتعزيز علامتك التجارية، وزيادة التفاعل، وتحقيق نتائج حقيقية عبر وسائل التواصل الاجتماعي.",
    ctaBtn: "ابدأ حملتك الاجتماعية"
  },
  he: {
    heroTitle: "צמח את המותג שלך עם שיווק ברשתות חברתיות",
    sectionTitle: "שיווק ברשתות חברתיות",
    sectionDesc: "שיווק ברשתות חברתיות חיוני לבניית מודעות למותג, מעורבות קהל והגדלת המרות. הצוות שלנו יוצר ומנהל קמפיינים בפייסבוק, אינסטגרם, לינקדאין וטוויטר כדי לעזור לך להתחבר ללקוחות האידיאליים שלך. אנו מתמקדים בתוכן יצירתי, מודעות ממוקדות וניתוח בזמן אמת למקסום ההגעה וההשפעה.",
    sectionList: [
      "אסטרטגיה ותכנון לרשתות חברתיות",
      "יצירת ותזמון תוכן",
      "ניהול קהילה",
      "פרסום ממומן ברשתות חברתיות"
    ],
    servicesHeading: "שירותי רשתות חברתיות למעורבות",
    cards: [
      {
        frontTitle: "אסטרטגיה ותכנון",
        frontDesc: "אנו מפתחים אסטרטגיות מותאמות אישית לרשתות חברתיות לפי המותג והמטרות שלך.",
        backDesc: "ממחקר קהל ועד בחירת פלטפורמה, אנו מניחים את הבסיס להצלחה החברתית שלך.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "יצירת תוכן",
        frontDesc: "פוסטים, סטוריז וסרטונים שמושכים תשומת לב ומעודדים שיחה.",
        backDesc: "אנו יוצרים לוחות תוכן יצירתיים וחזותיים לשימור הקהל שלך.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "ניהול קהילה ומודעות",
        frontDesc: "אנו מנהלים את הקהילה שלך ומריצים קמפיינים ממוקדים לתוצאות מדידות.",
        backDesc: "הצוות מגיב לתגובות, עוקב אחרי מעורבות וממטב מודעות ממומנות ל-ROI.",
        btn: "למידע נוסף"
      }
    ],
    spotlightHeading: "ספוטלייט לקוח: הצמיחה החברתית של CafeConnect",
    spotlightDesc: "CafeConnect רצתה לבנות קהילה נאמנה אונליין. המומחים שלנו השיקו קמפיינים יצירתיים, ניהלו מעורבות יומית והריצו מודעות ממוקדות. תוך 4 חודשים, CafeConnect הכפילה עוקבים והגדילה ביקורים בחנות ב-60%.",
    spotlightDetails: [
      { label: "ענף:", value: "אירוח" },
      { label: "תקופת זמן:", value: "4 חודשים" },
      { label: "שירותים:", value: "ניהול רשתות חברתיות, מודעות ממומנות" },
      { label: "אתגר מרכזי:", value: "מעורבות נמוכה, קהל קטן" }
    ],
    spotlightResults: [
      { value: "2x", label: "עלייה בעוקבים" },
      { value: "60%", label: "עלייה בביקורים בחנות" },
      { value: "120%", label: "עלייה במעורבות" }
    ],
    spotlightQuote: '"הנוכחות שלנו ברשתות חברתיות זינקה! היצירתיות והתגובה של הצוות עשו את כל ההבדל."',
    spotlightAuthor: "- אמילי קרטר, בעלת CafeConnect",
    processHeading: "תהליך הרשתות החברתיות שלנו",
    processSubheading: "מאסטרטגיה ועד מעורבות יומית, אנו עוזרים למותג שלך להצליח אונליין.",
    processSteps: [
      {
        step: "1",
        title: "גילוי ואסטרטגיה",
        desc: "אנו לומדים על המותג והקהל שלך כדי ליצור תוכנית מותאמת אישית."
      },
      {
        step: "2",
        title: "יצירת תוכן",
        desc: "מעצבים ומזמנים פוסטים, סטוריז וסרטונים שמשקפים את קול המותג שלך."
      },
      {
        step: "3",
        title: "מעורבות וקהילה",
        desc: "אנו מתקשרים עם הקהל, מגיבים לתגובות ובונים קהילה נאמנה."
      },
      {
        step: "4",
        title: "אנליטיקה ואופטימיזציה",
        desc: "עוקבים אחרי תוצאות ומשפרים את האסטרטגיה לצמיחה מתמשכת."
      }
    ],
    ctaHeading: "מוכן להגדיל את הנוכחות החברתית שלך?",
    ctaDesc: "צור קשר היום להעצמת המותג, הגדלת המעורבות והשגת תוצאות אמיתיות ברשתות חברתיות.",
    ctaBtn: "התחל את הקמפיין החברתי שלך"
  }
};

const SocialMedia = () => {
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
          src="/images/socialm.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-services">
          <h1 className="hero-tagline-services">{t.heroTitle}</h1>
        </div>
      </div>

      {/* Social Media Marketing Section */}
      <section className="corporate-events-section">
        <div className="corporate-events-wrapper">
          <div className="corporate-events-image-container">
            <img
              src="images/social-m.jpg"
              alt="Social media analytics dashboard"
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
                src="images/socialm.mp4"
                alt="Social media dashboard showing engagement metrics"
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
      {/* Social Media Process Section */}
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

export default SocialMedia;