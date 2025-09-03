import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './EmailMarketing.css';

const translations = {
  en: {
    heroTitle: "Boost Engagement with Email Marketing",
    sectionTitle: "Email Marketing",
    sectionDesc: "Email marketing is one of the most effective ways to nurture leads, build customer loyalty, and drive conversions. Our team designs personalized campaigns, automates workflows, and analyzes performance to ensure your messages reach the right audience at the right time.",
    sectionList: [
      "Campaign Strategy & Planning",
      "Automated Email Sequences",
      "Personalized Content & Design",
      "Performance Tracking & Optimization"
    ],
    servicesHeading: "Email Marketing Services",
    cards: [
      {
        frontTitle: "Strategy & Planning",
        frontDesc: "We craft targeted email strategies to engage your audience and achieve your goals.",
        backDesc: "From segmentation to scheduling, we plan campaigns for maximum impact and ROI.",
        btn: "Learn More"
      },
      {
        frontTitle: "Automation & Personalization",
        frontDesc: "Automated workflows and personalized content for every stage of the customer journey.",
        backDesc: "We set up triggers, drip campaigns, and dynamic content to boost engagement and conversions.",
        btn: "Learn More"
      },
      {
        frontTitle: "Analytics & Optimization",
        frontDesc: "We track open rates, clicks, and conversions to continually improve your campaigns.",
        backDesc: "Our team analyzes data and refines your strategy for better results every month.",
        btn: "Learn More"
      }
    ],
    spotlightHeading: "Client Spotlight: TechStart's Email Revival",
    spotlightDesc: "TechStart reinvented its email marketing strategy by implementing personalized journeys and automated campaigns. In just 4 months, open rates doubled and lead nurturing became seamless, resulting in a 40% increase in conversions.",
    spotlightDetails: [
      { label: "Industry:", value: "B2B SaaS" },
      { label: "Timeframe:", value: "4 Months" },
      { label: "Services:", value: "Email Automation, Personalization, Analytics" },
      { label: "Key Challenge:", value: "Low Engagement, Manual Processes" }
    ],
    spotlightResults: [
      { value: "2x", label: "Increase in Open Rates" },
      { value: "40%", label: "Increase in Conversions" },
      { value: "100%", label: "Automated Lead Nurturing" }
    ],
    spotlightQuote: '"Our email campaigns are now automated and highly effective. The team helped us connect with subscribers and grow our business."',
    spotlightAuthor: "- Priya Sharma, Marketing Lead at TechStart",
    processHeading: "Our Email Marketing Process",
    processSubheading: "From strategy to automation and optimization, we deliver campaigns that convert.",
    processSteps: [
      {
        step: "1",
        title: "Strategy & Segmentation",
        desc: "We analyze your audience and goals to create targeted segments and campaign plans."
      },
      {
        step: "2",
        title: "Content & Design",
        desc: "We craft engaging emails with compelling copy and eye-catching visuals."
      },
      {
        step: "3",
        title: "Automation & Delivery",
        desc: "We set up automated workflows to deliver the right message at the right time."
      },
      {
        step: "4",
        title: "Analytics & Optimization",
        desc: "We monitor performance and refine your campaigns for continuous improvement."
      }
    ],
    ctaHeading: "Ready to Transform Your Email Marketing?",
    ctaDesc: "Contact us today to launch automated, personalized campaigns that drive real engagement and results.",
    ctaBtn: "Start Your Email Campaign"
  },
  ar: {
    heroTitle: "عزز التفاعل مع التسويق عبر البريد الإلكتروني",
    sectionTitle: "التسويق عبر البريد الإلكتروني",
    sectionDesc: "يعد التسويق عبر البريد الإلكتروني من أكثر الطرق فعالية لرعاية العملاء المحتملين، وبناء الولاء، وزيادة التحويلات. يصمم فريقنا حملات مخصصة، ويؤتمت سير العمل، ويحلل الأداء لضمان وصول رسائلك للجمهور المناسب في الوقت المناسب.",
    sectionList: [
      "استراتيجية وتخطيط الحملات",
      "سلاسل بريد إلكتروني مؤتمتة",
      "محتوى وتصميم مخصص",
      "تتبع الأداء والتحسين"
    ],
    servicesHeading: "خدمات التسويق عبر البريد الإلكتروني",
    cards: [
      {
        frontTitle: "الاستراتيجية والتخطيط",
        frontDesc: "نضع استراتيجيات بريد إلكتروني مستهدفة لجذب جمهورك وتحقيق أهدافك.",
        backDesc: "من التقسيم إلى الجدولة، نخطط الحملات لتحقيق أقصى تأثير وعائد.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "الأتمتة والتخصيص",
        frontDesc: "سير عمل مؤتمت ومحتوى مخصص لكل مرحلة من رحلة العميل.",
        backDesc: "نقوم بإعداد المشغلات وحملات التنقيط والمحتوى الديناميكي لتعزيز التفاعل والتحويل.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "التحليلات والتحسين",
        frontDesc: "نتتبع معدلات الفتح والنقر والتحويل لتحسين الحملات باستمرار.",
        backDesc: "يحلل فريقنا البيانات ويطور الاستراتيجية لتحقيق نتائج أفضل كل شهر.",
        btn: "اعرف المزيد"
      }
    ],
    spotlightHeading: "تسليط الضوء: إحياء البريد الإلكتروني لـ TechStart",
    spotlightDesc: "أعادت TechStart ابتكار استراتيجيتها عبر البريد الإلكتروني من خلال تنفيذ رحلات مخصصة وحملات مؤتمتة. خلال 4 أشهر فقط، تضاعفت معدلات الفتح وأصبح رعاية العملاء المحتملين تلقائيًا، مما أدى إلى زيادة التحويلات بنسبة 40٪.",
    spotlightDetails: [
      { label: "الصناعة:", value: "برمجيات B2B SaaS" },
      { label: "الإطار الزمني:", value: "4 أشهر" },
      { label: "الخدمات:", value: "أتمتة البريد، التخصيص، التحليلات" },
      { label: "التحدي الرئيسي:", value: "تفاعل منخفض، عمليات يدوية" }
    ],
    spotlightResults: [
      { value: "2x", label: "زيادة في معدلات الفتح" },
      { value: "40%", label: "زيادة في التحويلات" },
      { value: "100%", label: "رعاية العملاء المؤتمتة" }
    ],
    spotlightQuote: '"حملات البريد الإلكتروني لدينا أصبحت مؤتمتة وفعالة للغاية. ساعدنا الفريق في التواصل مع المشتركين ونمو الأعمال."',
    spotlightAuthor: "- بريا شارما، قائدة التسويق في TechStart",
    processHeading: "عملية التسويق عبر البريد الإلكتروني لدينا",
    processSubheading: "من الاستراتيجية إلى الأتمتة والتحسين، نقدم حملات تحقق النتائج.",
    processSteps: [
      {
        step: "1",
        title: "الاستراتيجية والتقسيم",
        desc: "نحلل جمهورك وأهدافك لإنشاء شرائح مستهدفة وخطط حملات."
      },
      {
        step: "2",
        title: "المحتوى والتصميم",
        desc: "نصمم رسائل بريد إلكتروني جذابة بنصوص قوية وتصاميم ملفتة."
      },
      {
        step: "3",
        title: "الأتمتة والتسليم",
        desc: "نقوم بإعداد سير عمل مؤتمت لإرسال الرسائل المناسبة في الوقت المناسب."
      },
      {
        step: "4",
        title: "التحليلات والتحسين",
        desc: "نراقب الأداء ونطور الحملات للتحسين المستمر."
      }
    ],
    ctaHeading: "جاهز لتحويل التسويق عبر البريد الإلكتروني؟",
    ctaDesc: "اتصل بنا اليوم لإطلاق حملات مؤتمتة ومخصصة تحقق التفاعل والنتائج الفعلية.",
    ctaBtn: "ابدأ حملتك البريدية"
  },
  he: {
    heroTitle: "הגבר מעורבות עם שיווק בדוא\"ל",
    sectionTitle: "שיווק בדוא\"ל",
    sectionDesc: "שיווק בדוא\"ל הוא אחת הדרכים היעילות ביותר לטפח לידים, לבנות נאמנות לקוחות ולהגדיל המרות. הצוות שלנו מעצב קמפיינים מותאמים אישית, מאוטומט תהליכים ומנתח ביצועים כדי להבטיח שהמסרים שלך יגיעו לקהל הנכון בזמן הנכון.",
    sectionList: [
      "אסטרטגיה ותכנון קמפיינים",
      "רצפי דוא\"ל אוטומטיים",
      "תוכן ועיצוב מותאמים אישית",
      "מעקב ביצועים ואופטימיזציה"
    ],
    servicesHeading: "שירותי שיווק בדוא\"ל",
    cards: [
      {
        frontTitle: "אסטרטגיה ותכנון",
        frontDesc: "אנו יוצרים אסטרטגיות דוא\"ל ממוקדות למעורבות והגעה ליעדים שלך.",
        backDesc: "מהסגמנטציה ועד לתזמון, אנו מתכננים קמפיינים להשפעה ומקסום ROI.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "אוטומציה והתאמה אישית",
        frontDesc: "תהליכים אוטומטיים ותוכן מותאם לכל שלב במסע הלקוח.",
        backDesc: "אנו מגדירים טריגרים, קמפיינים מטפטפים ותוכן דינמי להגברת מעורבות והמרות.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "אנליטיקה ואופטימיזציה",
        frontDesc: "אנו עוקבים אחרי פתיחות, קליקים והמרות לשיפור מתמיד של הקמפיינים.",
        backDesc: "הצוות מנתח נתונים ומשפר את האסטרטגיה לתוצאות טובות יותר בכל חודש.",
        btn: "למידע נוסף"
      }
    ],
    spotlightHeading: "ספוטלייט לקוח: תחיית הדוא\"ל של TechStart",
    spotlightDesc: "TechStart חידשה את אסטרטגיית הדוא\"ל שלה עם מסעות מותאמים וקמפיינים אוטומטיים. תוך 4 חודשים בלבד, שיעורי הפתיחה הוכפלו וטיפוח הלידים הפך לאוטומטי, מה שהוביל לעלייה של 40% בהמרות.",
    spotlightDetails: [
      { label: "ענף:", value: "B2B SaaS" },
      { label: "תקופת זמן:", value: "4 חודשים" },
      { label: "שירותים:", value: "אוטומציה, התאמה אישית, אנליטיקה" },
      { label: "אתגר מרכזי:", value: "מעורבות נמוכה, תהליכים ידניים" }
    ],
    spotlightResults: [
      { value: "2x", label: "עלייה בשיעור פתיחה" },
      { value: "40%", label: "עלייה בהמרות" },
      { value: "100%", label: "טיפוח לידים אוטומטי" }
    ],
    spotlightQuote: '"הקמפיינים שלנו בדוא"ל אוטומטיים ויעילים מאוד. הצוות עזר לנו להתחבר למנויים ולצמוח."',
    spotlightAuthor: "- פריה שארמה, מובילת שיווק ב-TechStart",
    processHeading: "תהליך שיווק הדוא\"ל שלנו",
    processSubheading: "מאסטרטגיה לאוטומציה ואופטימיזציה, אנו מספקים קמפיינים שממירים.",
    processSteps: [
      {
        step: "1",
        title: "אסטרטגיה וסגמנטציה",
        desc: "אנו מנתחים את הקהל והיעדים שלך ליצירת סגמנטים וקמפיינים ממוקדים."
      },
      {
        step: "2",
        title: "תוכן ועיצוב",
        desc: "אנו יוצרים דוא\"לים מושכים עם טקסטים חזקים ועיצובים מרהיבים."
      },
      {
        step: "3",
        title: "אוטומציה ומשלוח",
        desc: "אנו מגדירים תהליכים אוטומטיים לשליחת המסר הנכון בזמן הנכון."
      },
      {
        step: "4",
        title: "אנליטיקה ואופטימיזציה",
        desc: "אנו עוקבים אחרי ביצועים ומשפרים את הקמפיינים לשיפור מתמיד."
      }
    ],
    ctaHeading: "מוכן לשדרג את השיווק בדוא\"ל שלך?",
    ctaDesc: "צור קשר היום להשקת קמפיינים אוטומטיים ומותאמים שמביאים תוצאות אמיתיות.",
    ctaBtn: "התחל את קמפיין הדוא\"ל שלך"
  }
};

const EmailMarketing = () => {
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
          src="/images/email-m.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-services">
          <h1 className="hero-tagline-services">{t.heroTitle}</h1>
        </div>
      </div>

      {/* Email Marketing Section */}
      <section className="corporate-events-section">
        <div className="corporate-events-wrapper">
          <div className="corporate-events-image-container">
            <img
              src="images/emailm.jpg"
              alt="Email marketing analytics dashboard"
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
                src="images/email-m.mp4"
                alt="Email marketing dashboard showing campaign performance"
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
      {/* Email Marketing Process Section */}
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

export default EmailMarketing;