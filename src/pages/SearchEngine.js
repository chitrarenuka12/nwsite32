import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './SearchEngine.css';

const translations = {
  en: {
    heroTitle: "Crafting Unforgettable Moments",
    heroDesc: "From corporate galas to dream weddings, we handle every detail with precision and creativity. Let us bring your vision to life.",
    heroBtn: "Discover Our Services",
    sectionTitle: "Search Engine Optimization",
    sectionDesc: "SEO is the foundation of digital visibility, helping your business rank higher on search engines and attract qualified traffic. Our approach combines technical expertise, strategic content creation, and data-driven analysis to boost your online presence and drive sustainable growth. Search Engine Optimization involves optimizing your website structure, content, and authority to improve rankings for relevant keywords—ensuring your brand is found by the right audience at the right time.",
    sectionList: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page & Off-Page Optimization",
      "Content Creation & Link Building"
    ],
    servicesHeading: "SEO Services for Maximum Visibility",
    cards: [
      {
        frontTitle: "Technical SEO Audits",
        frontDesc: "Identify and resolve site issues to ensure search engines can crawl and index your website efficiently.",
        backDesc: "Our comprehensive audits cover site speed, mobile usability, structured data, and more to boost your rankings.",
        btn: "Learn More"
      },
      {
        frontTitle: "Keyword Research & Strategy",
        frontDesc: "Discover high-value keywords and create a targeted strategy to attract qualified traffic to your site.",
        backDesc: "We analyze your market and competitors to build a keyword plan that drives measurable growth.",
        btn: "Learn More"
      },
      {
        frontTitle: "Content & Link Building",
        frontDesc: "Create valuable content and earn authoritative backlinks to improve your site’s relevance and authority.",
        backDesc: "Our team crafts SEO-optimized content and builds relationships for high-quality links that boost your rankings.",
        btn: "Learn More"
      }
    ],
    spotlightHeading: "Client Spotlight: TechStart's Organic Growth Transformation",
    spotlightDesc: "Facing declining organic visibility and stagnant website traffic, TechStart needed a comprehensive SEO strategy to increase search rankings and drive qualified leads. We implemented technical optimizations, content creation, and strategic link building that delivered remarkable results in just 6 months.",
    spotlightDetails: [
      { label: "Industry:", value: "B2B SaaS" },
      { label: "Timeframe:", value: "6 Months" },
      { label: "Services:", value: "Technical SEO, Content Strategy, Link Building" },
      { label: "Key Challenge:", value: "Low Organic Visibility" }
    ],
    spotlightResults: [
      { value: "187%", label: "Increase in Organic Traffic" },
      { value: "12", label: "First Page Rankings" },
      { value: "45%", label: "Reduction in Cost Per Acquisition" }
    ],
    spotlightQuote: '"The SEO strategy implemented by the team transformed our online presence. We\'re now ranking for competitive keywords and seeing a steady stream of qualified leads."',
    spotlightAuthor: "- Sarah Johnson, Marketing Director at TechStart",
    processHeading: "Our Proven SEO Process",
    processSubheading: "From initial audit to ongoing optimization, we guide you every step of the way for lasting results.",
    processSteps: [
      {
        step: "1",
        title: "SEO Audit & Analysis",
        desc: "We begin by evaluating your website’s technical health, content quality, and backlink profile to identify opportunities for improvement."
      },
      {
        step: "2",
        title: "Keyword Research & Strategy",
        desc: "Our team researches high-value keywords and develops a targeted strategy to attract qualified traffic and boost your rankings."
      },
      {
        step: "3",
        title: "On-Page & Off-Page Optimization",
        desc: "We optimize your site’s structure, content, and authority, including technical fixes and strategic link building for maximum visibility."
      },
      {
        step: "4",
        title: "Performance Tracking & Improvement",
        desc: "We monitor results, provide transparent reporting, and continually refine your SEO strategy for sustained growth."
      }
    ],
    ctaHeading: "Ready to Begin Your Event Journey?",
    ctaDesc: "Let's create a memorable experience together. Contact us today to discuss your vision and receive a tailored proposal.",
    ctaBtn: "Plan Your Event"
  },
  ar: {
    heroTitle: "نصنع لحظات لا تُنسى",
    heroDesc: "من الفعاليات الكبرى إلى حفلات الزفاف، نهتم بكل التفاصيل بدقة وإبداع. دعنا نحقق رؤيتك.",
    heroBtn: "اكتشف خدماتنا",
    sectionTitle: "تحسين محركات البحث",
    sectionDesc: "تحسين محركات البحث (SEO) هو أساس الظهور الرقمي، ويساعد عملك على تصدر نتائج البحث وجذب العملاء المناسبين. يجمع نهجنا بين الخبرة التقنية وإنشاء المحتوى والتحليل المعتمد على البيانات لتعزيز حضورك الرقمي وتحقيق نمو مستدام. يتضمن تحسين محركات البحث تحسين هيكل الموقع والمحتوى والسلطة لرفع ترتيبك للكلمات المفتاحية ذات الصلة، وضمان ظهور علامتك للجمهور المناسب في الوقت المناسب.",
    sectionList: [
      "تدقيق تقني لمحركات البحث",
      "بحث الكلمات المفتاحية والاستراتيجية",
      "تحسين داخلي وخارجي للموقع",
      "إنشاء المحتوى وبناء الروابط"
    ],
    servicesHeading: "خدمات SEO لتحقيق أقصى ظهور",
    cards: [
      {
        frontTitle: "تدقيق تقني لمحركات البحث",
        frontDesc: "تحديد وحل مشاكل الموقع لضمان قدرة محركات البحث على الزحف والفهرسة بكفاءة.",
        backDesc: "تشمل تدقيقاتنا الشاملة سرعة الموقع، قابلية الاستخدام على الجوال، البيانات المنظمة والمزيد لتعزيز ترتيبك.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "بحث الكلمات المفتاحية والاستراتيجية",
        frontDesc: "اكتشف كلمات مفتاحية عالية القيمة وضع استراتيجية لجذب العملاء المناسبين.",
        backDesc: "نحلل السوق والمنافسين لبناء خطة كلمات مفتاحية تحقق نموًا ملموسًا.",
        btn: "اعرف المزيد"
      },
      {
        frontTitle: "المحتوى وبناء الروابط",
        frontDesc: "إنشاء محتوى قيم وكسب روابط موثوقة لتعزيز سلطة الموقع وظهوره.",
        backDesc: "يصنع فريقنا محتوى محسّن ويبني علاقات للحصول على روابط عالية الجودة تعزز ترتيبك.",
        btn: "اعرف المزيد"
      }
    ],
    spotlightHeading: "تسليط الضوء: تحول نمو TechStart العضوي",
    spotlightDesc: "واجهت TechStart انخفاضًا في الظهور العضوي وجمودًا في زيارات الموقع، وكانت بحاجة لاستراتيجية SEO شاملة لرفع الترتيب وجذب العملاء المناسبين. نفذنا تحسينات تقنية، وإنشاء محتوى، وبناء روابط استراتيجية وحققنا نتائج رائعة خلال 6 أشهر فقط.",
    spotlightDetails: [
      { label: "الصناعة:", value: "برمجيات B2B SaaS" },
      { label: "الإطار الزمني:", value: "6 أشهر" },
      { label: "الخدمات:", value: "SEO تقني، استراتيجية محتوى، بناء روابط" },
      { label: "التحدي الرئيسي:", value: "انخفاض الظهور العضوي" }
    ],
    spotlightResults: [
      { value: "187%", label: "زيادة في الزيارات العضوية" },
      { value: "12", label: "ترتيب في الصفحة الأولى" },
      { value: "45%", label: "انخفاض تكلفة الاستحواذ" }
    ],
    spotlightQuote: '"استراتيجية SEO التي طبقها الفريق غيرت حضورنا الرقمي. أصبحنا الآن نتصدر كلمات تنافسية ونحصل على عملاء مؤهلين باستمرار."',
    spotlightAuthor: "- سارة جونسون، مديرة التسويق في TechStart",
    processHeading: "عملية SEO المثبتة لدينا",
    processSubheading: "من التدقيق الأولي إلى التحسين المستمر، نرشدك في كل خطوة لتحقيق نتائج دائمة.",
    processSteps: [
      {
        step: "1",
        title: "تدقيق وتحليل SEO",
        desc: "نبدأ بتقييم الصحة التقنية للموقع وجودة المحتوى والروابط لتحديد فرص التحسين."
      },
      {
        step: "2",
        title: "بحث الكلمات المفتاحية والاستراتيجية",
        desc: "يبحث فريقنا عن كلمات مفتاحية عالية القيمة ويطور استراتيجية لجذب العملاء المناسبين وتعزيز ترتيبك."
      },
      {
        step: "3",
        title: "تحسين داخلي وخارجي",
        desc: "نحسن هيكل الموقع والمحتوى والسلطة، بما في ذلك الإصلاحات التقنية وبناء الروابط لتحقيق أقصى ظهور."
      },
      {
        step: "4",
        title: "تتبع الأداء والتحسين",
        desc: "نراقب النتائج ونقدم تقارير شفافة ونطور استراتيجية SEO لتحقيق نمو مستدام."
      }
    ],
    ctaHeading: "جاهز لبدء رحلتك الرقمية؟",
    ctaDesc: "لنصنع تجربة لا تُنسى معًا. اتصل بنا اليوم لمناقشة رؤيتك والحصول على عرض مخصص.",
    ctaBtn: "خطط لحدثك"
  },
  he: {
    heroTitle: "יוצרים רגעים בלתי נשכחים",
    heroDesc: "מאירועים עסקיים ועד חתונות חלומיות, אנו דואגים לכל פרט בדיוק ויצירתיות. תן לנו להגשים את החזון שלך.",
    heroBtn: "גלה את השירותים שלנו",
    sectionTitle: "קידום אתרים (SEO)",
    sectionDesc: "קידום אתרים הוא הבסיס לנראות דיגיטלית, עוזר לעסק שלך להופיע גבוה יותר במנועי החיפוש ולמשוך תנועה איכותית. הגישה שלנו משלבת מומחיות טכנית, יצירת תוכן אסטרטגי וניתוח מבוסס נתונים כדי להעצים את הנוכחות שלך ולהוביל לצמיחה מתמשכת. SEO כולל אופטימיזציה של מבנה האתר, תוכן וסמכות לשיפור דירוגים עבור מילות מפתח רלוונטיות—כך שהמותג שלך יימצא על ידי הקהל הנכון בזמן הנכון.",
    sectionList: [
      "בדיקות SEO טכניות",
      "מחקר מילות מפתח ואסטרטגיה",
      "אופטימיזציה באתר ומחוץ לאתר",
      "יצירת תוכן ובניית קישורים"
    ],
    servicesHeading: "שירותי SEO לנראות מקסימלית",
    cards: [
      {
        frontTitle: "בדיקות SEO טכניות",
        frontDesc: "זיהוי ופתרון בעיות באתר כדי שמנועי החיפוש יוכלו לסרוק ולאנדקס ביעילות.",
        backDesc: "הבדיקות שלנו כוללות מהירות אתר, מובייל, נתונים מובנים ועוד לשיפור הדירוגים.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "מחקר מילות מפתח ואסטרטגיה",
        frontDesc: "גלה מילות מפתח בעלות ערך ובנה אסטרטגיה ממוקדת למשיכת תנועה איכותית.",
        backDesc: "אנו מנתחים את השוק והמתחרים לבניית תוכנית מילות מפתח שמביאה צמיחה מדידה.",
        btn: "למידע נוסף"
      },
      {
        frontTitle: "תוכן ובניית קישורים",
        frontDesc: "יצירת תוכן איכותי והשגת קישורים סמכותיים לשיפור רלוונטיות וסמכות האתר.",
        backDesc: "הצוות שלנו יוצר תוכן מותאם SEO ובונה קשרים לקישורים איכותיים שמקדמים את הדירוגים.",
        btn: "למידע נוסף"
      }
    ],
    spotlightHeading: "ספוטלייט לקוח: טרנספורמציית הצמיחה האורגנית של TechStart",
    spotlightDesc: "TechStart התמודדה עם ירידה בנראות האורגנית ותנועה תקועה באתר, והייתה זקוקה לאסטרטגיית SEO מקיפה להעלאת הדירוגים ומשיכת לידים איכותיים. יישמנו אופטימיזציות טכניות, יצירת תוכן ובניית קישורים אסטרטגית והשגנו תוצאות מרשימות תוך 6 חודשים בלבד.",
    spotlightDetails: [
      { label: "ענף:", value: "B2B SaaS" },
      { label: "תקופת זמן:", value: "6 חודשים" },
      { label: "שירותים:", value: "SEO טכני, אסטרטגיית תוכן, בניית קישורים" },
      { label: "אתגר מרכזי:", value: "נראות אורגנית נמוכה" }
    ],
    spotlightResults: [
      { value: "187%", label: "עלייה בתנועה האורגנית" },
      { value: "12", label: "דירוגים בעמוד הראשון" },
      { value: "45%", label: "הפחתת עלות רכישה" }
    ],
    spotlightQuote: '"אסטרטגיית ה-SEO של הצוות שינתה את הנוכחות שלנו אונליין. אנחנו מדורגים על מילות מפתח תחרותיות ומקבלים לידים איכותיים באופן קבוע."',
    spotlightAuthor: "- שרה ג'ונסון, מנהלת שיווק ב-TechStart",
    processHeading: "תהליך ה-SEO המוכח שלנו",
    processSubheading: "מהבדיקה הראשונית ועד אופטימיזציה מתמשכת, אנו מלווים אותך בכל שלב לתוצאות מתמשכות.",
    processSteps: [
      {
        step: "1",
        title: "בדיקת וניתוח SEO",
        desc: "מתחילים בהערכת בריאות האתר, איכות התוכן ופרופיל הקישורים לאיתור הזדמנויות לשיפור."
      },
      {
        step: "2",
        title: "מחקר מילות מפתח ואסטרטגיה",
        desc: "הצוות שלנו חוקר מילות מפתח בעלות ערך ובונה אסטרטגיה ממוקדת למשיכת תנועה איכותית והעלאת דירוגים."
      },
      {
        step: "3",
        title: "אופטימיזציה באתר ומחוץ לאתר",
        desc: "אופטימיזציה למבנה האתר, תוכן וסמכות, כולל תיקונים טכניים ובניית קישורים לנראות מקסימלית."
      },
      {
        step: "4",
        title: "מעקב ביצועים ושיפור",
        desc: "עוקבים אחרי התוצאות, מספקים דוחות שקופים ומשפרים את אסטרטגיית ה-SEO לצמיחה מתמשכת."
      }
    ],
    ctaHeading: "מוכן להתחיל את המסע שלך?",
    ctaDesc: "בוא ניצור יחד חוויה בלתי נשכחת. צור קשר היום לשיחה על החזון שלך וקבלת הצעה מותאמת.",
    ctaBtn: "תכנן את האירוע שלך"
  }
};

const SearchEngine = () => {
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
          src="/images/seo-hero.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-services">
          <h1 className="hero-tagline-services">{t.heroTitle}</h1>
          <p className="hero-paragraph-services">{t.heroDesc}</p>
          <div className="hero-btns-services">
            <button className="btn btn-primary" onClick={() => handleGetStarted("/services")}>{t.heroBtn}</button>
          </div>
        </div>
      </div>

      {/* Search Engine Optimization Section */}
      <section className="corporate-events-section">
        <div className="corporate-events-wrapper">
          <div className="corporate-events-image-container">
            <img
              src="images/seo-i.jpg"
              alt="SEO optimization dashboard"
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
                src="images/seo.mp4"
                alt="Dashboard showing SEO performance metrics and growth charts"
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
      {/* SEO Process Section */}
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

export default SearchEngine;