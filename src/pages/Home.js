import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    heroTitle: "Your Digital Marketing Journey Starts Here",
    heroDesc: "Your business has a story, and we're here to help you tell it.",
    startProject: "Start Your Project Today",
    aboutUs: "ABOUT US",
    strategicAgency: "We're a Strategic Digital Marketing Agency",
    aboutDesc: "In today's fast-paced digital landscape, a clear, results-driven strategy is essential. We work with you to understand your goals and craft a roadmap that delivers measurable growth and a strong return on your investment.",
    clientRetention: "Client Retention Rate",
    avgROI: "Average ROI Increase",
    aboutBtn: "About Us",
    happyClients: "15k+ Happy Clients",
    methodology: "OUR METHODOLOGY",
    cascade: "The Cascade to Sustainable Growth",
    processDesc: "We don't just execute campaigns—we build a system that works for you. Our process is a continuous loop of strategy, action, and refinement.",
    portfolio: "Our Portfolio: Success Stories",
    portfolioSub: "See how our strategic approach has helped businesses like yours achieve remarkable results.",
    testimonial: "What Our Clients Say",
    testimonialSub: "Real feedback from businesses we've helped grow.",
    ctaTitle: "Ready to Grow Your Business?",
    ctaDesc: "Let's turn your digital dreams into a reality. Contact us today for a free consultation and see how we can transform your online presence.",
    getInTouch: "Get in Touch",
    growthLineTitle: "Your Path to Digital Success",
    strategyVision: "Strategy & Vision",
    strategyVisionDesc: "We begin by deeply understanding your goals and your audience to build a strategy that's both ambitious and achievable.",
    executionOpt: "Execution & Optimization",
    executionOptDesc: "With a plan in place, we launch targeted campaigns, constantly monitoring and refining them for peak performance.",
    growthImpact: "Growth & Impact",
    growthImpactDesc: "The results speak for themselves. Watch as your brand awareness, lead flow, and revenue grow month after month.",
    processStages: [
      {
        id: 1,
        title: 'Strategy & Planning',
        description: 'We analyze your market and goals to build a precise, data-backed roadmap for success.'
      },
      {
        id: 2,
        title: 'Creative Execution',
        description: 'Our team brings the strategy to life with compelling content and seamless campaign launches.'
      },
      {
        id: 3,
        title: 'Performance Analysis',
        description: 'We relentlessly track metrics to gain insights and identify opportunities for optimization.'
      },
      {
        id: 4,
        title: 'Scale & Sustain',
        description: 'We use our insights to refine your strategy, ensuring your growth is predictable and long-term.'
      }
    ],
    portfolio1Title: "E-commerce Conversion Boost",
    portfolio1Desc: "Helped a new online store increase its conversion rate by **150%** in just three months with targeted PPC and SEO.",
    portfolio2Title: "Social Media Brand Launch",
    portfolio2Desc: "Managed a comprehensive social media campaign that generated **50,000+** new followers and significant engagement.",
    portfolio3Title: "B2B Lead Generation",
    portfolio3Desc: "Designed and executed a successful lead generation campaign that resulted in a **40%** increase in qualified leads.",
    viewCaseStudy: "View Case Study",
    testimonial1: "\"Our leads and sales have doubled! The team's strategy and support are unmatched.\"",
    testimonial1Name: "Priya Sharma",
    testimonial1Role: "Founder, EcoMart",
    testimonial2: "\"Their creative campaigns made our brand stand out. We saw instant engagement!\"",
    testimonial2Name: "Amit Verma",
    testimonial2Role: "CMO, FinTechPro",
    testimonial3: "\"Professional, proactive, and results-driven. Highly recommended for digital growth.\"",
    testimonial3Name: "Sara Lee",
    testimonial3Role: "Marketing Lead, HealthPlus",
  },
  ar: {
    heroTitle: "رحلتك في التسويق الرقمي تبدأ هنا",
    heroDesc: "لدى عملك قصة، ونحن هنا لمساعدتك في سردها.",
    startProject: "ابدأ مشروعك اليوم",
    aboutUs: "من نحن",
    strategicAgency: "نحن وكالة تسويق رقمي استراتيجية",
    aboutDesc: "في عالم اليوم السريع، الاستراتيجية الواضحة ضرورية. نعمل معك لفهم أهدافك وصياغة خطة تحقق نموًا ملموسًا وعائدًا قويًا على الاستثمار.",
    clientRetention: "معدل الاحتفاظ بالعملاء",
    avgROI: "متوسط زيادة العائد",
    aboutBtn: "من نحن",
    happyClients: "+15k عملاء سعداء",
    methodology: "منهجيتنا",
    cascade: "التسلسل نحو النمو المستدام",
    processDesc: "نحن لا ننفذ الحملات فقط، بل نبني نظامًا يعمل من أجلك. عمليتنا حلقة مستمرة من الاستراتيجية والعمل والتحسين.",
    portfolio: "محفظتنا: قصص النجاح",
    portfolioSub: "شاهد كيف ساعدنا نهجنا الاستراتيجي الشركات على تحقيق نتائج رائعة.",
    testimonial: "ماذا يقول عملاؤنا",
    testimonialSub: "آراء حقيقية من شركات ساعدناها على النمو.",
    ctaTitle: "هل أنت جاهز لتنمية عملك؟",
    ctaDesc: "دعنا نحول أحلامك الرقمية إلى واقع. اتصل بنا اليوم لاستشارة مجانية وشاهد كيف يمكننا تحويل حضورك الرقمي.",
    getInTouch: "تواصل معنا",
    growthLineTitle: "طريقك إلى النجاح الرقمي",
    strategyVision: "استراتيجية ورؤية",
    strategyVisionDesc: "نبدأ بفهم عميق لأهدافك وجمهورك لبناء استراتيجية طموحة وقابلة للتحقيق.",
    executionOpt: "تنفيذ وتحسين",
    executionOptDesc: "مع وجود خطة في مكانها، نطلق حملات مستهدفة، نراقبها باستمرار ونقوم بتحسينها لتحقيق أفضل أداء.",
    growthImpact: "نمو وتأثير",
    growthImpactDesc: "تتحدث النتائج عن نفسها. شاهد كيف يزداد وعي علامتك التجارية، وتدفق العملاء المحتملين، والإيرادات شهرًا بعد شهر.",
    processStages: [
      {
        id: 1,
        title: 'استراتيجية وتخطيط',
        description: 'نحلل سوقك وأهدافك لبناء خارطة طريق دقيقة مدعومة بالبيانات لتحقيق النجاح.'
      },
      {
        id: 2,
        title: 'تنفيذ إبداعي',
        description: 'فريقنا يجسد الاستراتيجية بمحتوى جذاب وإطلاق حملات سلس.'
      },
      {
        id: 3,
        title: 'تحليل الأداء',
        description: 'نتتبع المقاييس بلا هوادة لاكتساب رؤى وتحديد فرص التحسين.'
      },
      {
        id: 4,
        title: 'توسيع واستدامة',
        description: 'نستخدم رؤانا لتنقيح استراتيجيتك، مما يضمن أن يكون نموك قابلاً للتنبؤ وطويل الأجل.'
      }
    ],
    portfolio1Title: "زيادة تحويلات التجارة الإلكترونية",
    portfolio1Desc: "ساعد متجرًا جديدًا عبر الإنترنت على زيادة معدل تحويله بنسبة **150%** في ثلاثة أشهر فقط من خلال PPC المستهدف وSEO.",
    portfolio2Title: "إطلاق علامة تجارية عبر وسائل التواصل الاجتماعي",
    portfolio2Desc: "أدارت حملة شاملة على وسائل التواصل الاجتماعي ولدت أكثر من **50,000** متابع جديد وتفاعل كبير.",
    portfolio3Title: "توليد العملاء المحتملين B2B",
    portfolio3Desc: "صممت ونفذت حملة ناجحة لتوليد العملاء المحتملين أدت إلى زيادة قدرها **40%** في العملاء المحتملين المؤهلين.",
    viewCaseStudy: "عرض دراسة الحالة",
    testimonial1: "\"تضاعف عدد العملاء المحتملين والمبيعات لدينا! استراتيجية الفريق ودعمه لا يعلى عليه.\"",
    testimonial1Name: "بريا شارما",
    testimonial1Role: "المؤسس، EcoMart",
    testimonial2: "\"حملاتهم الإبداعية جعلت علامتنا التجارية تبرز. شهدنا تفاعلًا فوريًا!\"",
    testimonial2Name: "أميت فيرما",
    testimonial2Role: "المدير التسويقي، FinTechPro",
    testimonial3: "\"احترافيون، استباقيون، ومدفوعون بالنتائج. موصى بهم بشدة للنمو الرقمي.\"",
    testimonial3Name: "سارة لي",
    testimonial3Role: "قائدة التسويق، HealthPlus",
  },
  he: {
    heroTitle: "המסע שלך לשיווק דיגיטלי מתחיל כאן",
    heroDesc: "לעסק שלך יש סיפור, ואנחנו כאן כדי לעזור לך לספר אותו.",
    startProject: "התחל את הפרויקט שלך היום",
    aboutUs: "אודות",
    strategicAgency: "אנחנו סוכנות שיווק דיגיטלי אסטרטגית",
    aboutDesc: "בעידן הדיגיטלי המהיר של היום, אסטרטגיה ברורה וממוקדת חיונית. אנו עובדים איתך כדי להבין את מטרותיך ולבנות תוכנית שמביאה לצמיחה מדידה ולהחזר השקעה גבוה.",
    clientRetention: "שיעור שימור לקוחות",
    avgROI: "עלייה ממוצעת ב-ROI",
    aboutBtn: "אודות",
    happyClients: "+15k לקוחות מרוצים",
    methodology: "המתודולוגיה שלנו",
    cascade: "המסלול לצמיחה בת קיימא",
    processDesc: "אנחנו לא רק מבצעים קמפיינים—אנחנו בונים מערכת שעובדת בשבילך. התהליך שלנו הוא לולאה מתמשכת של אסטרטגיה, פעולה ושיפור.",
    portfolio: "התיק שלנו: סיפורי הצלחה",
    portfolioSub: "ראו כיצד הגישה האסטרטגית שלנו עזרה לעסקים להשיג תוצאות יוצאות דופן.",
    testimonial: "מה הלקוחות שלנו אומרים",
    testimonialSub: "משוב אמיתי מעסקים שעזרנו להם לצמוח.",
    ctaTitle: "מוכן לצמוח עם העסק שלך?",
    ctaDesc: "בואו נהפוך את החלומות הדיגיטליים שלכם למציאות. צרו קשר היום לייעוץ חינם וראו כיצד נוכל לשדרג את הנוכחות שלכם ברשת.",
    getInTouch: "צור קשר",
    growthLineTitle: "הדרך שלך להצלחה דיגיטלית",
    strategyVision: "אסטרטגיה וחזון",
    strategyVisionDesc: "אנו מתחילים בהבנה מעמיקה של המטרות שלך ושל הקהל שלך כדי לבנות אסטרטגיה שהיא גם שאפתנית וגם ברת השגה.",
    executionOpt: "ביצוע ואופטימיזציה",
    executionOptDesc: "עם תוכנית במקום, אנו משיקים קמפיינים ממומנים, עוקבים אחריהם ללא הרף ומשפרים אותם לביצועים מיטביים.",
    growthImpact: "צמיחה והשפעה",
    growthImpactDesc: "התוצאות מדברות בעד עצמן. ראה כיצד המודעות למותג שלך, זרימת הלידים וההכנסות גדלות חודש אחרי חודש.",
    processStages: [
      {
        id: 1,
        title: 'אסטרטגיה ותכנון',
        description: 'אנו מנתחים את השוק ואת המטרות שלך כדי לבנות מפת דרכים מדויקת, מבוססת נתונים, להצלחה.'
      },
      {
        id: 2,
        title: 'ביצוע יצירתי',
        description: 'הצוות שלנו מביא את האסטרטגיה לחיים עם תוכן משכנע והשקות קמפיינים חלקות.'
      },
      {
        id: 3,
        title: 'ניתוח ביצועים',
        description: 'אנו עוקבים ללא הרף אחרי מדדים כדי להשיג תובנות ולזהות הזדמנויות לאופטימיזציה.'
      },
      {
        id: 4,
        title: 'הרחבה ותחזוקה',
        description: 'אנו משתמשים בתובנות שלנו כדי לחדד את האסטרטגיה שלך, ומוודאים שהצמיחה שלך היא צפויה ולטווח ארוך.'
      }
    ],
    portfolio1Title: "הגברת המרות מסחר אלקטרוני",
    portfolio1Desc: "סייע לחנות מקוונת חדשה להגדיל את שיעור ההמרה שלה ב- **150%** תוך שלושה חודשים בלבד באמצעות PPC ממוקד ו-SEO.",
    portfolio2Title: "השקת מותג במדיה חברתית",
    portfolio2Desc: "ניהל קמפיין מקיף במדיה החברתית שהניב למעלה מ- **50,000** עוקבים חדשים ומעורבות משמעותית.",
    portfolio3Title: "הפקת לידים B2B",
    portfolio3Desc: "תכנן וביצע קמפיין מוצלח להפקת לידים שהניב עלייה של **40%** בלידים איכותיים.",
    viewCaseStudy: "צפה במקרה מבחן",
    testimonial1: "\"ההכנסות והמכירות שלנו הכפילו את עצמם! האסטרטגיה והתמיכה של הצוות חסרות תקדים.\"",
    testimonial1Name: "פְּרִיָּה שַׁרְמָה",
    testimonial1Role: "מייסדת, EcoMart",
    testimonial2: "\"הקמפיינים היצירתיים שלהם גרמו למותג שלנו לבלוט. ראינו מעורבות מיידית!\"",
    testimonial2Name: "אֲמִת וֶרְמָה",
    testimonial2Role: "מנהל שיווק, FinTechPro",
    testimonial3: "\"מקצוענים, יזמים ומונעים תוצאות. מומלץ בחום לצמיחה דיגיטלית.\"",
    testimonial3Name: "סָארָה לִי",
    testimonial3Role: "מנהלת שיווק, HealthPlus",
  }
};

function Home() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const handleGetStarted = (path) => {
    navigate(path);
  };
  const [isVisible, setIsVisible] = useState(false);
  const processRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (processRef.current) observer.observe(processRef.current);
    return () => observer.disconnect();
  }, []);
  
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAboutVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  // Use translated process stages
  const processStages = translations[language].processStages;

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="background-video-container">
          <video autoPlay muted loop className="background-video">
            <source src="/images/hero-home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <h1>{translations[language].heroTitle}</h1>
          <p>{translations[language].heroDesc}</p>
          <button className="cta-button" onClick={() => handleGetStarted("/contact")}>
            {translations[language].startProject}
          </button>
        </div>
      </section>

      {/* Second Section: Growth Line */}
      <section className="growth-line-section">
        <h2 className="line-heading">{translations[language].growthLineTitle}</h2>
        <div className="line-container">
          <div className="line-item">
            <div className="line-icon-wrapper">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="line-content">
              <h3>{translations[language].strategyVision}</h3>
              <p>{translations[language].strategyVisionDesc}</p>
            </div>
          </div>
          <div className="line-item">
            <div className="line-icon-wrapper">
              <i className="fas fa-bullhorn"></i>
            </div>
            <div className="line-content">
              <h3>{translations[language].executionOpt}</h3>
              <p>{translations[language].executionOptDesc}</p>
            </div>
          </div>
          <div className="line-item">
            <div className="line-icon-wrapper">
              <i className="fas fa-rocket"></i>
            </div>
            <div className="line-content">
              <h3>{translations[language].growthImpact}</h3>
              <p>{translations[language].growthImpactDesc}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <div className="container-about" ref={aboutRef}>
        <div className="contentWrapper">
          <div className={`textContent${aboutVisible ? " slide-in-left" : ""}`}>
            <span className="eyebrow">{translations[language].aboutUs}</span>
            <h2 className="title">{translations[language].strategicAgency}</h2>
            <p className="description">
              {translations[language].aboutDesc}
            </p>
            <div className="statsContainer">
              <div className="statItem">
                <span className="statValue">94%</span>
                <p className="statLabel">{translations[language].clientRetention}</p>
              </div>
              <div className="statItem">
                <span className="statValue">65%</span>
                <p className="statLabel">{translations[language].avgROI}</p>
              </div>
            </div>
            <div className="ctaContainer">
              <Link to="/about" className="ctaButton" onClick={() => handleGetStarted("/contact")}>{translations[language].aboutBtn}</Link>
              <a href="#" className="playButton" aria-label="Play video">
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
          <div className={`imageContent${aboutVisible ? " slide-in-right" : ""}`}>
            <div className="imagePlaceholder">
              <img src="/images/digital-about.jpg" alt="Strategic Digital Marketing" className="mainImage" />
            </div>
            <div className="socialProof">
              <div className="avatars">
                <img src="/images/client-1.jpg" alt="Client 1" className="avatar" />
                <img src="/images/client-2.jpg" alt="Client 2" className="avatar" />
                <img src="/images/client-3.jpg" alt="Client 3" className="avatar" />
              </div>
              <span className="socialText">{translations[language].happyClients}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Process Section */}
      <section className="section">
        <div className="innerContainer" ref={processRef}>
          <div className={`textContent${isVisible ? " slide-in-left" : ""}`}>
            <div className="eyebrow">{translations[language].methodology}</div>
            <h2 className="title">
              {translations[language].cascade}
            </h2>
            <p className="description">
              {translations[language].processDesc}
            </p>
          </div>
          <div className="processFlow">
            {processStages.map((stage, index) => (
              <div
                key={stage.id}
                className={`stageItem${isVisible ? " isVisible" : ""}`}
                style={{ transitionDelay: isVisible ? `${index * 0.2}s` : '0s' }}
              >
                <div className="stageCircle">
                  <div className="stageNumber">{stage.id}</div>
                </div>
                <div className="stageContent">
                  <h3 className="stageTitle">{stage.title}</h3>
                  <p className="stageDescription">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <h2 className="portfolio-heading">{translations[language].portfolio}</h2>
        <p className="portfolio-subheading">{translations[language].portfolioSub}</p>
        <div className="portfolio-grid">
          {/* Portfolio Card 1 */}
          <div className="portfolio-card">
            <div className="portfolio-image-container">
              <img src="/images/Portfolio-1.png" alt="E-commerce store launch" />
            </div>
            <div className="portfolio-content">
              <h3>{translations[language].portfolio1Title}</h3>
              <p>{translations[language].portfolio1Desc}</p>
              <a href="#" className="portfolio-link">{translations[language].viewCaseStudy} <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          {/* Portfolio Card 2 */}
          <div className="portfolio-card">
            <div className="portfolio-image-container">
              <img src="/images/Portfolio-2.png" alt="Social media branding campaign" />
            </div>
            <div className="portfolio-content">
              <h3>{translations[language].portfolio2Title}</h3>
              <p>{translations[language].portfolio2Desc}</p>
              <a href="#" className="portfolio-link">{translations[language].viewCaseStudy} <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          {/* Portfolio Card 3 */}
          <div className="portfolio-card">
            <div className="portfolio-image-container">
              <img src="/images/Portfolio-3.png" alt="Lead generation campaign" />
            </div>
            <div className="portfolio-content">
              <h3>{translations[language].portfolio3Title}</h3>
              <p>{translations[language].portfolio3Desc}</p>
              <a href="#" className="portfolio-link">{translations[language].viewCaseStudy} <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2 className="testimonial-heading">{translations[language].testimonial}</h2>
        <p className="testimonial-subheading">{translations[language].testimonialSub}</p>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-quote">{translations[language].testimonial1}</div>
            <div className="testimonial-client">
              <img src="/images/team1.jpg" alt="Client 1" className="testimonial-avatar" />
              <div>
                <div className="client-name">{translations[language].testimonial1Name}</div>
                <div className="client-role">{translations[language].testimonial1Role}</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">{translations[language].testimonial2}</div>
            <div className="testimonial-client">
              <img src="/images/team2.jpg" alt="Client 2" className="testimonial-avatar" />
              <div>
                <div className="client-name">{translations[language].testimonial2Name}</div>
                <div className="client-role">{translations[language].testimonial2Role}</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">{translations[language].testimonial3}</div>
            <div className="testimonial-client">
              <img src="/images/team3.jpg" alt="Client 3" className="testimonial-avatar" />
              <div>
                <div className="client-name">{translations[language].testimonial3Name}</div>
                <div className="client-role">{translations[language].testimonial3Role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-parallax-section">
        <div className="cta-overlay">
          <h2 style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{translations[language].ctaTitle}</h2>
          <p>{translations[language].ctaDesc}</p>
          <button className="cta-button secondary-cta-button"onClick={() => handleGetStarted("/contact")}>{translations[language].getInTouch}</button>
        </div>
      </section>
    </div>
  );
}

export default Home;