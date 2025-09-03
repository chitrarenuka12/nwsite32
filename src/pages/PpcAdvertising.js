import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './PpcAdvertising.css';

const translations = {
  en: {
    heroTitle: "Maximize Your ROI with PPC Advertising",
    sectionTitle: "PPC Advertising",
    sectionDesc: "PPC (Pay-Per-Click) advertising is the fastest way to reach your ideal customers online. Our team creates, manages, and optimizes campaigns across Google, Bing, and social platforms to drive high-quality leads and sales. We focus on data-driven strategies, compelling ad copy, and precise targeting to maximize your ad spend and deliver measurable results.",
    sectionList: [
      "Google & Bing Ads Management",
      "Social Media Ad Campaigns",
      "Conversion Tracking & Analytics",
      "Landing Page Optimization"
    ],
    servicesHeading: "PPC Services for Instant Impact",
    cards: [
      {
        frontTitle: "Campaign Setup & Strategy",
        frontDesc: "We design custom PPC campaigns tailored to your business goals and target audience.",
        backDesc: "From keyword selection to ad group structure, we set up campaigns for maximum efficiency and ROI.",
        btn: "Learn More"
      },
      {
        frontTitle: "Ad Copy & Creative",
        frontDesc: "Engaging ad copy and visuals that capture attention and drive clicks.",
        backDesc: "We test and refine ad creatives to boost click-through rates and conversions.",
        btn: "Learn More"
      },
      {
        frontTitle: "Optimization & Reporting",
        frontDesc: "Continuous monitoring and optimization to improve performance and reduce costs.",
        backDesc: "Transparent reporting and actionable insights to help you make informed decisions.",
        btn: "Learn More"
      }
    ],
    spotlightHeading: "Client Spotlight: EcomPro's PPC Success Story",
    spotlightDesc: "EcomPro wanted to scale online sales quickly. Our PPC experts launched targeted campaigns, optimized landing pages, and tracked conversions. In just 3 months, EcomPro saw a 220% increase in sales and a 35% reduction in cost per acquisition.",
    spotlightDetails: [
      { label: "Industry:", value: "E-commerce" },
      { label: "Timeframe:", value: "3 Months" },
      { label: "Services:", value: "PPC Management, Landing Page Optimization" },
      { label: "Key Challenge:", value: "High Ad Spend, Low ROI" }
    ],
    spotlightResults: [
      { value: "220%", label: "Increase in Sales" },
      { value: "35%", label: "Reduction in Cost Per Acquisition" },
      { value: "18", label: "New Top Performing Keywords" }
    ],
    spotlightQuote: '"Our PPC campaigns delivered instant results. The team’s expertise helped us scale profitably and reach new customers."',
    spotlightAuthor: "- Michael Lee, CEO at EcomPro",
    processHeading: "Our Proven PPC Process",
    processSubheading: "From campaign setup to ongoing optimization, we drive results every step of the way.",
    processSteps: [
      {
        step: "1",
        title: "Strategy & Planning",
        desc: "We analyze your goals and market to develop a custom PPC strategy for your business."
      },
      {
        step: "2",
        title: "Campaign Launch",
        desc: "We set up and launch your ads on the right platforms for maximum reach and impact."
      },
      {
        step: "3",
        title: "Optimization",
        desc: "We monitor performance, adjust bids, and refine targeting to improve results and lower costs."
      },
      {
        step: "4",
        title: "Reporting & Insights",
        desc: "We provide transparent reports and actionable insights to help you make smart decisions."
      }
    ],
    ctaHeading: "Ready to Accelerate Your Growth?",
    ctaDesc: "Contact us today to launch your PPC campaign and start seeing results fast.",
    ctaBtn: "Start Your PPC Campaign"
  },
  ar: {
    heroTitle: "حقق أقصى عائد مع إعلانات الدفع بالنقرة",
    sectionTitle: "إعلانات الدفع بالنقرة",
    sectionDesc: "إعلانات الدفع بالنقرة (PPC) هي أسرع طريقة للوصول إلى العملاء المثاليين عبر الإنترنت. ينشئ فريقنا حملات ويُديرها ويُحسنها عبر Google وBing ومنصات التواصل الاجتماعي لجذب العملاء وزيادة المبيعات. نركز على الاستراتيجيات المعتمدة على البيانات ونصوص الإعلانات الجذابة والاستهداف الدقيق لتحقيق أقصى استفادة من ميزانية الإعلانات وتحقيق نتائج ملموسة.",
    sectionList: [
      "إدارة إعلانات Google وBing",
      "حملات إعلانات وسائل التواصل الاجتماعي",
      "تتبع التحويلات والتحليلات",
      "تحسين صفحات الهبوط"
    ],
    servicesHeading: "خدمات PPC لتحقيق نتائج فورية",
    cards: [
      {
        frontTitle: "إعداد الحملة والاستراتيجية",
        frontDesc: "نصمم حملات PPC مخصصة تتماشى مع أهداف عملك وجمهورك المستهدف.",
        backDesc: "من اختيار الكلمات المفتاحية إلى هيكلة مجموعات الإعلانات، نعد الحملات لتحقيق أعلى كفاءة وعائد.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "نص الإعلان والإبداع",
        frontDesc: "نصوص إعلانات جذابة وتصاميم تلفت الانتباه وتزيد النقرات.",
        backDesc: "نختبر ونحسن الإعلانات لزيادة معدلات النقر والتحويل.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "التحسين والتقارير",
        frontDesc: "مراقبة وتحسين مستمر لتحسين الأداء وتقليل التكاليف.",
        backDesc: "تقارير شفافة ورؤى عملية لمساعدتك في اتخاذ قرارات ذكية.",
        btn: "اعرف المزيد"
      }
    ],
    spotlightHeading: "تسليط الضوء: قصة نجاح EcomPro مع PPC",
    spotlightDesc: "أرادت EcomPro زيادة المبيعات بسرعة. أطلق خبراؤنا حملات مستهدفة، وحسنوا صفحات الهبوط، وتتبعوا التحويلات. خلال 3 أشهر فقط، زادت مبيعات EcomPro بنسبة 220٪ وانخفضت تكلفة الاستحواذ بنسبة 35٪.",
    spotlightDetails: [
      { label: "الصناعة:", value: "التجارة الإلكترونية" },
      { label: "الإطار الزمني:", value: "3 أشهر" },
      { label: "الخدمات:", value: "إدارة PPC، تحسين صفحات الهبوط" },
      { label: "التحدي الرئيسي:", value: "إنفاق إعلاني مرتفع، عائد منخفض" }
    ],
    spotlightResults: [
      { value: "220%", label: "زيادة في المبيعات" },
      { value: "35%", label: "انخفاض تكلفة الاستحواذ" },
      { value: "18", label: "كلمات مفتاحية جديدة عالية الأداء" }
    ],
    spotlightQuote: '"حملات PPC لدينا حققت نتائج فورية. خبرة الفريق ساعدتنا على النمو بشكل مربح والوصول لعملاء جدد."',
    spotlightAuthor: "- مايكل لي، الرئيس التنفيذي لـ EcomPro",
    processHeading: "عملية PPC المثبتة لدينا",
    processSubheading: "من إعداد الحملة إلى التحسين المستمر، نحقق النتائج في كل خطوة.",
    processSteps: [
      {
        step: "1",
        title: "الاستراتيجية والتخطيط",
        desc: "نحلل أهدافك والسوق لبناء استراتيجية PPC مخصصة لعملك."
      },
      {
        step: "2",
        title: "إطلاق الحملة",
        desc: "نعد ونطلق إعلاناتك على المنصات المناسبة لتحقيق أقصى انتشار وتأثير."
      },
      {
        step: "3",
        title: "التحسين",
        desc: "نراقب الأداء ونعدل العروض ونحسن الاستهداف لتحسين النتائج وتقليل التكاليف."
      },
      {
        step: "4",
        title: "التقارير والرؤى",
        desc: "نوفر تقارير شفافة ورؤى عملية لمساعدتك في اتخاذ قرارات ذكية."
      }
    ],
    ctaHeading: "جاهز لتسريع نموك؟",
    ctaDesc: "اتصل بنا اليوم لإطلاق حملتك في PPC وابدأ في رؤية النتائج بسرعة.",
    ctaBtn: "ابدأ حملتك في PPC"
  },
  he: {
    heroTitle: "מקסם את ה-ROI שלך עם פרסום PPC",
    sectionTitle: "פרסום PPC",
    sectionDesc: "פרסום PPC (תשלום לפי קליק) הוא הדרך המהירה ביותר להגיע ללקוחות האידיאליים שלך אונליין. הצוות שלנו יוצר, מנהל וממטב קמפיינים בגוגל, בינג וברשתות חברתיות כדי להביא לידים איכותיים ומכירות. אנו מתמקדים באסטרטגיות מבוססות נתונים, טקסטים יצירתיים ומיקוד מדויק למקסום תקציב הפרסום שלך ולהשגת תוצאות מדידות.",
    sectionList: [
      "ניהול מודעות Google ו-Bing",
      "קמפיינים ברשתות חברתיות",
      "מעקב המרות וניתוח נתונים",
      "אופטימיזציה לדפי נחיתה"
    ],
    servicesHeading: "שירותי PPC להשפעה מיידית",
    cards: [
      {
        frontTitle: "הקמת קמפיין ואסטרטגיה",
        frontDesc: "אנו מעצבים קמפיינים PPC מותאמים למטרות העסק והקהל שלך.",
        backDesc: "מבחירת מילות מפתח ועד מבנה קבוצות מודעות, אנו מקימים קמפיינים ליעילות מקסימלית ו-ROI גבוה.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "טקסטים יצירתיים וקריאייטיב",
        frontDesc: "טקסטים ויזואליים שמושכים תשומת לב ומביאים קליקים.",
        backDesc: "אנו בודקים ומשפרים קריאייטיבים להגדלת CTR והמרות.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "אופטימיזציה ודיווח",
        frontDesc: "מעקב ואופטימיזציה מתמשכת לשיפור ביצועים והפחתת עלויות.",
        backDesc: "דיווח שקוף ותובנות מעשיות לקבלת החלטות חכמות.",
        btn: "למידע נוסף"
      }
    ],
    spotlightHeading: "ספוטלייט לקוח: סיפור ההצלחה של EcomPro עם PPC",
    spotlightDesc: "EcomPro רצתה להגדיל מכירות אונליין במהירות. מומחי ה-PPC שלנו השיקו קמפיינים ממוקדים, אופטימיזציה לדפי נחיתה ומעקב המרות. תוך 3 חודשים, EcomPro הגדילה מכירות ב-220% והפחיתה את עלות הרכישה ב-35%.",
    spotlightDetails: [
      { label: "ענף:", value: "מסחר אלקטרוני" },
      { label: "תקופת זמן:", value: "3 חודשים" },
      { label: "שירותים:", value: "ניהול PPC, אופטימיזציה לדפי נחיתה" },
      { label: "אתגר מרכזי:", value: "תקציב גבוה, ROI נמוך" }
    ],
    spotlightResults: [
      { value: "220%", label: "עלייה במכירות" },
      { value: "35%", label: "הפחתת עלות רכישה" },
      { value: "18", label: "מילות מפתח חדשות מובילות" }
    ],
    spotlightQuote: '"הקמפיינים שלנו ב-PPC הביאו תוצאות מיידיות. מומחיות הצוות עזרה לנו לצמוח ולהגיע ללקוחות חדשים."',
    spotlightAuthor: "- מייקל לי, מנכ\"ל EcomPro",
    processHeading: "תהליך ה-PPC המוכח שלנו",
    processSubheading: "מהקמת קמפיין ועד אופטימיזציה שוטפת, אנו מביאים תוצאות בכל שלב.",
    processSteps: [
      {
        step: "1",
        title: "אסטרטגיה ותכנון",
        desc: "אנו מנתחים את המטרות והשוק שלך לבניית אסטרטגיית PPC מותאמת."
      },
      {
        step: "2",
        title: "השקת קמפיין",
        desc: "אנו מקימים ומשיקים את המודעות שלך בפלטפורמות הנכונות להגעה והשפעה מקסימלית."
      },
      {
        step: "3",
        title: "אופטימיזציה",
        desc: "אנו עוקבים אחרי ביצועים, משנים הצעות מחיר ומשפרים מיקוד לתוצאות טובות יותר ועלויות נמוכות יותר."
      },
      {
        step: "4",
        title: "דיווח ותובנות",
        desc: "אנו מספקים דוחות שקופים ותובנות מעשיות לקבלת החלטות חכמות."
      }
    ],
    ctaHeading: "מוכן להאיץ את הצמיחה שלך?",
    ctaDesc: "צור קשר היום להשקת קמפיין PPC ולהתחיל לראות תוצאות במהירות.",
    ctaBtn: "התחל את קמפיין ה-PPC שלך"
  }
};

const PpcAdvertising = () => {
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
          src="/images/ppc.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-services">
          <h1 className="hero-tagline-services">{t.heroTitle}</h1>
        </div>
      </div>

      {/* PPC Advertising Section */}
      <section className="corporate-events-section">
        <div className="corporate-events-wrapper">
          <div className="corporate-events-image-container">
            <img
              src="images/ppc.jpg"
              alt="PPC advertising dashboard"
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
                src="images/ppc.mp4"
                alt="PPC dashboard showing campaign performance"
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
      {/* PPC Process Section */}
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

export default PpcAdvertising;