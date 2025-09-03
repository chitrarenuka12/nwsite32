import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import "./Services.css";

// Add translations for all visible text
const translations = {
  en: {
    heroTitle: "Digital Marketing That Drives Growth",
    heroDesc: "We transform businesses through data-driven digital marketing strategies that deliver measurable results.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    ourServices: "Our Digital Marketing Services",
    servicesIntro: "Comprehensive digital",
    seoTitle: "Search Engine Optimization",
    seoDesc: "Increase visibility and drive organic traffic with our comprehensive SEO strategies.",
    ppcTitle: "PPC Advertising",
    ppcDesc: "Maximize ROI with targeted pay-per-click campaigns across search and social platforms.",
    socialTitle: "Social Media Marketing",
    socialDesc: "Build brand awareness and engagement with strategic social media campaigns.",
    contentTitle: "Content Marketing",
    contentDesc: "Attract and convert audiences with compelling content strategies.",
    emailTitle: "Email Marketing",
    emailDesc: "Nurture leads and drive conversions with personalized email campaigns.",
    analyticsTitle: "Analytics & Reporting",
    analyticsDesc: "Gain actionable insights with comprehensive tracking and performance analysis.",
    explore: "Explore",
    getResults: "Get Results",
    seeExamples: "See Examples",
    portfolioHeading: "Proven Results: Client Success Stories",
    portfolioIntro: "We deliver measurable outcomes through strategic digital marketing. Here's how we transformed one client's online presence.",
    caseStudyTag: "E-commerce Success",
    caseStudyTitle: "Increasing Online Revenue by 247% in 6 Months",
    caseStudyChallenge: "*Challenge:* A fashion e-commerce brand was struggling with low conversion rates and declining organic traffic despite having quality products and a functional website.",
    caseStudySolution: "*Our Solution:* We implemented a comprehensive digital strategy including technical SEO optimization, content marketing, retargeting campaigns, and conversion rate optimization that transformed their online performance.",
    viewCaseStudy: "View Full Case Study",
    whyChooseHeading: "Why Choose Our Digital Marketing Services",
    whyChooseIntro: "We combine data-driven strategies with creative excellence to deliver exceptional results for your business.",
    dataDriven: "Data-Driven Approach",
    dataDrivenDesc: "Our strategies are built on comprehensive data analysis and continuous optimization.",
    targeted: "Targeted Strategies",
    targetedDesc: "We create customized campaigns that reach your ideal customers at the right time.",
    transparent: "Transparent Reporting",
    transparentDesc: "Get clear, comprehensive reports showing exactly how your investment is performing.",
    expertTeam: "Expert Team",
    expertTeamDesc: "Work with certified specialists",
    innovative: "Innovative Solutions",
    innovativeDesc: "We stay ahead of trends to implement cutting-edge strategies that deliver results.",
    partnership: "Partnership Approach",
    partnershipDesc: "We become an extension of your team, invested in your long-term success.",
    packagesHeading: "Strategic Marketing Packages",
    packagesIntro: "Customized solutions designed to meet your business goals and budget requirements.",
    starter: "Starter Package",
    starterDesc: "Ideal for businesses looking to establish their online presence.",
    starterFeatures: [
      "Basic SEO Optimization",
      "Social Media Setup",
      "Google Business Profile Optimization",
      "Monthly Performance Report"
    ],
    growth: "Growth Package",
    growthDesc: "Comprehensive digital marketing for businesses ready to scale.",
    growthFeatures: [
      "Advanced SEO Strategy",
      "PPC Campaign Management",
      "Content Marketing",
      "Social Media Advertising",
      "Conversion Rate Optimization",
      "Bi-Weekly Performance Reports"
    ],
    enterprise: "Enterprise Package",
    enterpriseDesc: "Full-service digital marketing for maximum growth and market dominance.",
    enterpriseFeatures: [
      "Complete Digital Strategy",
      "Multi-Channel Campaign Management",
      "Marketing Automation",
      "Advanced Analytics & Attribution",
      "Dedicated Account Team",
      "Weekly Strategy Sessions"
    ],
    mostPopular: "Most Popular",
    faqHeading: "Digital Marketing FAQs",
    faqIntro: "Get answers to common questions about our digital marketing services and processes.",
    faqs: [
      {
        question: "How long does it take to see results from digital marketing?",
        answer: "Timelines vary based on strategy and goals. PPC campaigns can show immediate results, while SEO typically takes 3-6 months to gain significant traction. Our transparent reporting keeps you informed of progress throughout the process."
      },
      {
        question: "How do you measure campaign success?",
        answer: "We establish clear KPIs aligned with your business objectives before launching any campaign. We track metrics like conversion rates, ROI, customer acquisition cost, organic traffic growth, and engagement rates, providing detailed monthly reports."
      },
      {
        question: "Do you work with businesses in our industry?",
        answer: "Our team has experience across multiple industries including e-commerce, healthcare, professional services, technology, and more. We customize strategies based on your specific industry challenges and opportunities."
      }
    ],
    ctaHeading: "Ready to Grow Your Business?",
    ctaParagraph: "Take the next step with our expert digital marketing team. Let’s create your success story together!",
    ctaBtn: "Get Your Free Consultation"
  },
  ar: {
    heroTitle: "التسويق الرقمي الذي يدفع النمو",
    heroDesc: "نحوّل الأعمال من خلال استراتيجيات تسويق رقمية تعتمد على البيانات وتحقق نتائج ملموسة.",
    getStarted: "ابدأ الآن",
    learnMore: "اعرف المزيد",
    ourServices: "خدمات التسويق الرقمي لدينا",
    servicesIntro: "حلول رقمية شاملة",
    seoTitle: "تحسين محركات البحث",
    seoDesc: "زيادة الظهور وجذب الزيارات العضوية من خلال استراتيجيات تحسين محركات البحث الشاملة.",
    ppcTitle: "إعلانات الدفع بالنقرة",
    ppcDesc: "زيادة العائد من خلال حملات الدفع بالنقرة المستهدفة عبر محركات البحث ومنصات التواصل.",
    socialTitle: "التسويق عبر وسائل التواصل الاجتماعي",
    socialDesc: "بناء الوعي بالعلامة التجارية والتفاعل من خلال حملات التواصل الاجتماعي الاستراتيجية.",
    contentTitle: "تسويق المحتوى",
    contentDesc: "جذب وتحويل الجمهور من خلال استراتيجيات محتوى جذابة.",
    emailTitle: "التسويق عبر البريد الإلكتروني",
    emailDesc: "رعاية العملاء المحتملين وزيادة التحويلات من خلال حملات بريد إلكتروني مخصصة.",
    analyticsTitle: "التحليلات والتقارير",
    analyticsDesc: "احصل على رؤى قابلة للتنفيذ من خلال تتبع وتحليل الأداء الشامل.",
    explore: "استكشف",
    getResults: "احصل على النتائج",
    seeExamples: "شاهد الأمثلة",
    portfolioHeading: "نتائج مثبتة: قصص نجاح العملاء",
    portfolioIntro: "نحقق نتائج ملموسة من خلال التسويق الرقمي الاستراتيجي. إليك كيف حولنا حضور أحد العملاء عبر الإنترنت.",
    caseStudyTag: "نجاح التجارة الإلكترونية",
    caseStudyTitle: "زيادة الإيرادات عبر الإنترنت بنسبة 247% خلال 6 أشهر",
    caseStudyChallenge: "*التحدي:* علامة تجارية للأزياء الإلكترونية كانت تعاني من انخفاض معدلات التحويل وتراجع الزيارات العضوية رغم جودة المنتجات والموقع.",
    caseStudySolution: "*الحل:* نفذنا استراتيجية رقمية شاملة تضمنت تحسين تقني لمحركات البحث، تسويق المحتوى، حملات إعادة الاستهداف، وتحسين معدل التحويل مما غيّر أداءهم الرقمي.",
    viewCaseStudy: "عرض دراسة الحالة كاملة",
    whyChooseHeading: "لماذا تختار خدماتنا للتسويق الرقمي",
    whyChooseIntro: "نجمع بين الاستراتيجيات المعتمدة على البيانات والإبداع لتحقيق نتائج استثنائية لعملك.",
    dataDriven: "نهج قائم على البيانات",
    dataDrivenDesc: "استراتيجياتنا مبنية على تحليل بيانات شامل وتحسين مستمر.",
    targeted: "استراتيجيات مستهدفة",
    targetedDesc: "ننشئ حملات مخصصة تصل إلى عملائك المثاليين في الوقت المناسب.",
    transparent: "تقارير شفافة",
    transparentDesc: "احصل على تقارير واضحة وشاملة توضح أداء استثمارك بالضبط.",
    expertTeam: "فريق خبراء",
    expertTeamDesc: "اعمل مع متخصصين معتمدين",
    innovative: "حلول مبتكرة",
    innovativeDesc: "نواكب الاتجاهات لنطبق استراتيجيات متقدمة تحقق النتائج.",
    partnership: "نهج الشراكة",
    partnershipDesc: "نصبح امتدادًا لفريقك، نستثمر في نجاحك طويل الأمد.",
    packagesHeading: "باقات التسويق الاستراتيجي",
    packagesIntro: "حلول مخصصة مصممة لتلبية أهداف عملك وميزانيتك.",
    starter: "باقة البداية",
    starterDesc: "مثالية للأعمال التي ترغب في تأسيس حضورها الرقمي.",
    starterFeatures: [
      "تحسين أساسي لمحركات البحث",
      "إعداد وسائل التواصل الاجتماعي",
      "تحسين ملف الأعمال على Google",
      "تقرير أداء شهري"
    ],
    growth: "باقة النمو",
    growthDesc: "تسويق رقمي شامل للأعمال الجاهزة للتوسع.",
    growthFeatures: [
      "استراتيجية تحسين متقدمة لمحركات البحث",
      "إدارة حملات الدفع بالنقرة",
      "تسويق المحتوى",
      "إعلانات وسائل التواصل الاجتماعي",
      "تحسين معدل التحويل",
      "تقارير أداء نصف شهرية"
    ],
    enterprise: "باقة الشركات",
    enterpriseDesc: "تسويق رقمي متكامل لتحقيق أقصى نمو وهيمنة على السوق.",
    enterpriseFeatures: [
      "استراتيجية رقمية كاملة",
      "إدارة حملات متعددة القنوات",
      "أتمتة التسويق",
      "تحليلات متقدمة ونسب الأداء",
      "فريق حسابات مخصص",
      "اجتماعات استراتيجية أسبوعية"
    ],
    mostPopular: "الأكثر شعبية",
    faqHeading: "أسئلة شائعة حول التسويق الرقمي",
    faqIntro: "احصل على إجابات لأكثر الأسئلة شيوعًا حول خدماتنا وعملياتنا في التسويق الرقمي.",
    faqs: [
      {
        question: "كم يستغرق ظهور نتائج التسويق الرقمي؟",
        answer: "تختلف الجداول الزمنية حسب الاستراتيجية والأهداف. حملات الدفع بالنقرة تظهر نتائج فورية، بينما يستغرق تحسين محركات البحث عادةً من 3 إلى 6 أشهر لتحقيق نتائج ملموسة. تقاريرنا الشفافة تبقيك على اطلاع دائم بالتقدم."
      },
      {
        question: "كيف تقيسون نجاح الحملات؟",
        answer: "نحدد مؤشرات الأداء الرئيسية (KPIs) aligned with your business objectives before launching any campaign. We track metrics like conversion rates, ROI, customer acquisition cost, organic traffic growth, and engagement rates, providing detailed monthly reports."
      },
      {
        question: "هل تعملون مع شركات في مجالنا؟",
        answer: "لدينا خبرة عبر العديد من القطاعات مثل التجارة الإلكترونية، الرعاية الصحية، الخدمات المهنية، التكنولوجيا والمزيد. نخصص الاستراتيجيات حسب تحديات وفرص كل قطاع."
      }
    ],
    ctaHeading: "جاهز لتنمية عملك؟",
    ctaParagraph: "اتخذ الخطوة التالية مع فريقنا الخبير في التسويق الرقمي. دعنا نكتب قصة نجاحك معًا!",
    ctaBtn: "احصل على استشارة مجانية"
  },
  he: {
    heroTitle: "שיווק דיגיטלי שמניע צמיחה",
    heroDesc: "אנחנו משנים עסקים באמצעות אסטרטגיות שיווק דיגיטליות מבוססות נתונים שמביאות תוצאות מדידות.",
    getStarted: "התחל עכשיו",
    learnMore: "למידע נוסף",
    ourServices: "שירותי השיווק הדיגיטלי שלנו",
    servicesIntro: "שיווק דיגיטלי מקיף",
    seoTitle: "קידום אתרים (SEO)",
    seoDesc: "הגדל נראות והבא תנועה אורגנית עם אסטרטגיות SEO מקיפות.",
    ppcTitle: "פרסום PPC",
    ppcDesc: "מקסם ROI עם קמפיינים ממוקדים במנועי חיפוש וברשתות חברתיות.",
    socialTitle: "שיווק ברשתות חברתיות",
    socialDesc: "בנה מודעות למותג ומעורבות עם קמפיינים אסטרטגיים ברשתות חברתיות.",
    contentTitle: "שיווק תוכן",
    contentDesc: "משוך והמר קהלים עם אסטרטגיות תוכן משכנעות.",
    emailTitle: "שיווק בדוא\"ל",
    emailDesc: "טפח לידים והגדל המרות עם קמפיינים מותאמים אישית בדוא\"ל.",
    analyticsTitle: "אנליטיקה ודיווח",
    analyticsDesc: "קבל תובנות מעשיות עם מעקב וניתוח ביצועים מקיפים.",
    explore: "גלה",
    getResults: "קבל תוצאות",
    seeExamples: "ראה דוגמאות",
    portfolioHeading: "תוצאות מוכחות: סיפורי הצלחה של לקוחות",
    portfolioIntro: "אנחנו מספקים תוצאות מדידות באמצעות שיווק דיגיטלי אסטרטגי. כך שינינו את הנוכחות הדיגיטלית של לקוח.",
    caseStudyTag: "הצלחה במסחר אלקטרוני",
    caseStudyTitle: "הגדלת הכנסות אונליין ב-247% תוך 6 חודשים",
    caseStudyChallenge: "*האתגר:* מותג אופנה אונליין התקשה בהמרות נמוכות וירידה בתנועה אורגנית למרות מוצרים איכותיים ואתר מתפקד.",
    caseStudySolution: "*הפתרון:* יישמנו אסטרטגיה דיגיטלית מלאה כולל אופטימיזציה טכנית ל-SEO, שיווק תוכן, קמפיינים ריטרגטינג ואופטימיזציה להמרות ששינו את הביצועים.",
    viewCaseStudy: "צפה בכל המחקר",
    whyChooseHeading: "למה לבחור בשירותי השיווק הדיגיטלי שלנו",
    whyChooseIntro: "אנחנו משלבים אסטרטגיות מבוססות נתונים עם יצירתיות כדי להביא תוצאות יוצאות דופן לעסק שלך.",
    dataDriven: "גישה מבוססת נתונים",
    dataDrivenDesc: "האסטרטגיות שלנו מבוססות על ניתוח נתונים מקיף ואופטימיזציה מתמדת.",
    targeted: "אסטרטגיות ממוקדות",
    targetedDesc: "אנחנו יוצרים קמפיינים מותאמים שמגיעים ללקוחות האידיאליים שלך בזמן הנכון.",
    transparent: "דיווח שקוף",
    transparentDesc: "קבל דוחות ברורים ומפורטים שמראים בדיוק איך ההשקעה שלך מתפקדת.",
    expertTeam: "צוות מומחים",
    expertTeamDesc: "עבוד עם מומחים מוסמכים",
    innovative: "פתרונות חדשניים",
    innovativeDesc: "אנחנו תמיד צעד אחד לפני כולם ומיישמים אסטרטגיות מתקדמות שמביאות תוצאות.",
    partnership: "גישה שותפותית",
    partnershipDesc: "אנחנו הופכים לחלק מהצוות שלך, מושקעים בהצלחה ארוכת הטווח שלך.",
    packagesHeading: "חבילות שיווק אסטרטגיות",
    packagesIntro: "פתרונות מותאמים אישית שנבנו לפי מטרות העסק והתקציב שלך.",
    starter: "חבילת מתחילים",
    starterDesc: "מתאים לעסקים שרוצים להקים נוכחות דיגיטלית.",
    starterFeatures: [
      "אופטימיזציה בסיסית ל-SEO",
      "הקמת רשתות חברתיות",
      "אופטימיזציה לפרופיל עסקי בגוגל",
      "דוח ביצועים חודשי"
    ],
    growth: "חבילת צמיחה",
    growthDesc: "שיווק דיגיטלי מלא לעסקים שמוכנים להתרחב.",
    growthFeatures: [
      "אסטרטגיית SEO מתקדמת",
      "ניהול קמפיינים PPC",
      "שיווק תוכן",
      "פרסום ברשתות חברתיות",
      "אופטימיזציה להמרות",
      "דוחות ביצועים דו-שבועיים"
    ],
    enterprise: "חבילת ארגונים",
    enterpriseDesc: "שיווק דיגיטלי מלא לצמיחה מקסימלית ודומיננטיות בשוק.",
    enterpriseFeatures: [
      "אסטרטגיה דיגיטלית מלאה",
      "ניהול קמפיינים רב-ערוציים",
      "אוטומציה שיווקית",
      "אנליטיקה מתקדמת וייחוס",
      "צוות חשבון ייעודי",
      "פגישות אסטרטגיה שבועיות"
    ],
    mostPopular: "הכי פופולרי",
    faqHeading: "שאלות נפוצות על שיווק דיגיטלי",
    faqIntro: "קבל תשובות לשאלות נפוצות על השירותים והתהליכים שלנו בשיווק דיגיטלי.",
    faqs: [
      {
        question: "כמה זמן לוקח לראות תוצאות משיווק דיגיטלי?",
        answer: "הזמן משתנה לפי אסטרטגיה ומטרות. קמפיינים PPC מראים תוצאות מיידיות, בעוד ש-SEO לוקח לרוב 3-6 חודשים. הדיווח השקוף שלנו ישאיר אותך מעודכן בכל שלב."
      },
      {
        question: "איך אתם מודדים הצלחת קמפיין?",
        answer: "אנחנו מגדירים KPIs ברורים לפני כל קמפיין. אנחנו עוקבים אחרי שיעורי המרה, ROI, עלות רכישת לקוח, גידול בתנועה אורגנית ומעורבות, ומספקים דוחות חודשיים מפורטים."
      },
      {
        question: "האם אתם עובדים עם עסקים בענף שלנו?",
        answer: "לצוות שלנו ניסיון בענפים רבים כולל מסחר אלקטרוני, בריאות, שירותים מקצועיים, טכנולוגיה ועוד. אנחנו מתאימים אסטרטגיות לפי אתגרי והזדמנויות הענף שלך."
      }
    ],
    ctaHeading: "מוכן לצמוח עם העסק שלך?",
    ctaParagraph: "קח את הצעד הבא עם צוות השיווק הדיגיטלי שלנו. בוא ניצור יחד את סיפור ההצלחה שלך!",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

const Services = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

  const handleFaqToggle = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "service-page dark-mode" : "service-page light-mode"}>
      <div className="hero-section-service">
        <video
          className="hero-video-service"
          src="/images/aboutus-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content-service">
          <h1 className="hero-tagline-service">{t.heroTitle}</h1>
          <p className="hero-paragraph-service">{t.heroDesc}</p>
          <div className="hero-btns-service">
            <button className="btn primary" onClick={() => handleGetStarted("/contact")}>{t.getStarted}</button>
            <button className="btn secondary" onClick={() => handleGetStarted("/about")}>{t.learnMore}</button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section-service">
        <div className="services-container-service">
          <h2 className="services-heading-service">{t.ourServices}</h2>
          <p className="services-intro-service">{t.servicesIntro}</p>
          <div className="services-grid-service">
            <div className="service-card-service">
              <img src="/images/seo-s.jpg" alt={t.seoTitle} className="service-image-service" />
              <h3>{t.seoTitle}</h3>
              <p>{t.seoDesc}</p>
              <button className="service-btn-service seo-btn" onClick={()=>handleGetStarted("/search-engine")}>{t.learnMore}</button>
            </div>
            <div className="service-card-service">
              <img src="/images/ppc-s.jpg" alt={t.ppcTitle} className="service-image-service" />
              <h3>{t.ppcTitle}</h3>
              <p>{t.ppcDesc}</p>
              <button className="service-btn-service ppc-btn" onClick={()=>handleGetStarted("/ppc-advertising")}>{t.learnMore}</button>
            </div>
            <div className="service-card-service">
              <img src="/images/socialm-s.jpg" alt={t.socialTitle} className="service-image-service" />
              <h3>{t.socialTitle}</h3>
              <p>{t.socialDesc}</p>
              <button className="service-btn-service social-btn" onClick={()=>handleGetStarted("/social-media")}>{t.learnMore}</button>
            </div>
            <div className="service-card-service">
              <img src="/images/content-s.jpg" alt={t.contentTitle} className="service-image-service" />
              <h3>{t.contentTitle}</h3>
              <p>{t.contentDesc}</p>
              <button className="service-btn-service content-btn" onClick={()=>handleGetStarted("/content-marketing")}>{t.explore}</button>
            </div>
            <div className="service-card-service">
              <img src="/images/email-s.jpg" alt={t.emailTitle} className="service-image-service" />
              <h3>{t.emailTitle}</h3>
              <p>{t.emailDesc}</p>
              <button className="service-btn-service email-btn" onClick={()=>handleGetStarted("/email-marketing")}>{t.getResults}</button>
            </div>
            <div className="service-card-service">
              <img src="/images/analytics-s.jpg" alt={t.analyticsTitle} className="service-image-service" />
              <h3>{t.analyticsTitle}</h3>
              <p>{t.analyticsDesc}</p>
              <button className="service-btn-service analytics-btn" onClick={()=>handleGetStarted("/analytics-reporting")}>{t.seeExamples}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio & Case Studies Section */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-content">
            <h2 className="portfolio-heading">{t.portfolioHeading}</h2>
            <p className="portfolio-intro">{t.portfolioIntro}</p>
            <div className="case-study-card">
              <img
                src="/images/case-study.jpg"
                alt="Digital marketing case study"
                className="case-study-image"
              />
              <div className="case-study-details">
                <span className="case-study-tag">{t.caseStudyTag}</span>
                <h3>{t.caseStudyTitle}</h3>
                <p>{t.caseStudyChallenge}</p>
                <p>{t.caseStudySolution}</p>
                <button className="case-study-btn" onClick={()=>handleGetStarted("/case-studies")}>{t.viewCaseStudy}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="why-choose-us-container">
          <h2 className="why-choose-us-heading">{t.whyChooseHeading}</h2>
          <p className="why-choose-us-intro">{t.whyChooseIntro}</p>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-chart-line"></i>
              <h3>{t.dataDriven}</h3>
              <p>{t.dataDrivenDesc}</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-bullseye"></i>
              <h3>{t.targeted}</h3>
              <p>{t.targetedDesc}</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-tachometer-alt"></i>
              <h3>{t.transparent}</h3>
              <p>{t.transparentDesc}</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>{t.expertTeam}</h3>
              <p>{t.expertTeamDesc}</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-lightbulb"></i>
              <h3>{t.innovative}</h3>
              <p>{t.innovativeDesc}</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-handshake"></i>
              <h3>{t.partnership}</h3>
              <p>{t.partnershipDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Packages Section */}
      <section className="packages-section">
        <div className="packages-container">
          <h2 className="packages-heading">{t.packagesHeading}</h2>
          <p className="packages-intro">{t.packagesIntro}</p>
          <div className="package-tiers">
            <div className="package-box">
              <h3>{t.starter}</h3>
              <p className="package-description">{t.starterDesc}</p>
              <ul className="package-features">
                {t.starterFeatures.map((feature, idx) => (
                  <li key={idx}><i className="fas fa-check-circle"></i> {feature}</li>
                ))}
              </ul>
              <button className="package-btn" onClick={()=>handleGetStarted("/contact")}>{t.getStarted}</button>
            </div>
            <div className="package-box featured-package">
              <span>{t.mostPopular}</span>
              <h3>{t.growth}</h3>
              <p className="package-description">{t.growthDesc}</p>
              <ul className="package-features">
                {t.growthFeatures.map((feature, idx) => (
                  <li key={idx}><i className="fas fa-check-circle"></i> {feature}</li>
                ))}
              </ul>
              <button className="package-btn" onClick={()=>handleGetStarted("/contact")}>{t.learnMore}</button>
            </div>
            <div className="package-box">
              <h3>{t.enterprise}</h3>
              <p className="package-description">{t.enterpriseDesc}</p>
              <ul className="package-features">
                {t.enterpriseFeatures.map((feature, idx) => (
                  <li key={idx}><i className="fas fa-check-circle"></i> {feature}</li>
                ))}
              </ul>
              <button className="package-btn" onClick={()=>handleGetStarted("/contact")}>{t.learnMore}</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-heading">{t.faqHeading}</h2>
          <p className="faq-intro">{t.faqIntro}</p>
          {t.faqs.map((faq, idx) => (
            <div className="faq-item" key={idx}>
              <button
                className={`faq-question${openFaq === idx ? " open" : ""}`}
                onClick={() => handleFaqToggle(idx)}
              >
                <h4>{faq.question}</h4>
                <i className={`fas fa-chevron-down${openFaq === idx ? " rotate" : ""}`}></i>
              </button>
              <div className={`faq-answer${openFaq === idx ? " open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-service">
        <div className="cta-container_service">
          <h2 className="cta-heading-service">{t.ctaHeading}</h2>
          <p className="cta-paragraph-service">{t.ctaParagraph}</p>
          <button className="cta-btn-service" onClick={() => handleGetStarted("/contact")}>
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;