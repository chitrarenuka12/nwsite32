import React, { useRef, useEffect, useState } from "react";
import { useDarkMode } from "../context/Darkmodecontext";
import "./Home2.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

// ImageComponent defined within Home2.js
const ImageComponent = ({ imageUrl, serviceName }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={serviceName} className="image" />
      <div className="overlay">
        <div className="text-container">{serviceName}</div>
      </div>
    </div>
  );
};

const clients = [
  { id: 1, logoUrl: '/images/ggogle.jpg', alt: 'Google' },
  { id: 2, logoUrl: '/images/microsoft.jpg', alt: 'Microsoft' },
  { id: 3, logoUrl: '/images/amazon.jpg', alt: 'Amazon' },
  { id: 4, logoUrl: '/images/twitter-home2.jpg', alt: 'Facebook' },
  { id: 5, logoUrl: '/images/apple.jpg', alt: 'Apple' },
  { id: 6, logoUrl: '/images/netflix.jpg', alt: 'Netflix' },
];

function Home2() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => {
    navigate(path);
  };

  const videoRef = useRef(null);
  const clientsRef = useRef(null);
  const [isClientsVisible, setIsClientsVisible] = useState(false);

  useEffect(() => {
    const node = clientsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsClientsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const { darkMode } = useDarkMode();

  // Data for the service images
  const serviceImagesData = [
    { id: 1, url: '/images/seo-m.jpg', nameKey: 'serviceSeo' },
    { id: 2, url: '/images/ppc.jpg', nameKey: 'servicePpc' },
    { id: 3, url: '/images/social-marketing.jpg', nameKey: 'serviceSocial' },
    { id: 4, url: '/images/content-marketing.jpg', nameKey: 'serviceContent' },
  ];

  const { language } = useLanguage();
  const translations = {
    en: {
      heroTitle: "Amplify Your Digital Presence",
      heroDescription: "We craft data-driven marketing strategies that drive growth, engagement, and conversions.",
      whoWeAreTitle: "Who We Are",
      whoWeAreDescription: "We are a team of digital marketing experts dedicated to helping businesses thrive in the digital landscape. With over a decade of expertise, we specialize in SEO, PPC, social media marketing, and content strategy. Our mission is to transform your digital presence into a powerful growth engine, handling every aspect from strategy to execution with precision and innovation.",
      whoWeAreList: [
        "Proven track record of delivering measurable results",
        "Customized strategies for every business type",
        "Expertise in the latest digital marketing tools",
        "Dedicated support and transparent communication"
      ],
      whyChooseUs: "WHY CHOOSE US",
      whyChooseUsTitle: "Maximize Your Digital ROI",
      whyChooseUsDescription: "Our digital marketing strategies are meticulously crafted to provide unparalleled value. From SEO optimization to social media campaigns, we ensure every tactic aligns with your business goals, delivering a significant return on investment. You'll gain access to expert insights, cutting-edge tools, and innovative solutions that propel your business forward in the digital space.",
      getStarted: "Get Started",
      growthFocused: "Growth Focused",
      growthFocusedDesc: "We drive measurable results and ROI for every client.",
      creativeSolutions: "Creative Solutions",
      creativeSolutionsDesc: "Innovative campaigns tailored to your brand vision.",
      trustedExpertise: "Trusted Expertise",
      trustedExpertiseDesc: "A dedicated team with proven digital marketing experience.",
      gallerySubtitle: "Our Services",
      galleryTitle: "Explore Our Digital Marketing Solutions",
      serviceSeo: "SEO Optimization",
      servicePpc: "PPC Advertising",
      serviceSocial: "Social Media Marketing",
      serviceContent: "Content Marketing",
      trustedByTitle: "TRUSTED BY INDUSTRY LEADERS",
      readyToTransform: "Ready to transform your digital presence? We're committed to delivering exceptional results that drive growth and maximize your ROI.",
      freeConsultation: "GET FREE CONSULTATION",
    },
    ar: {
      heroTitle: "عزز حضورك الرقمي",
      heroDescription: "نصمم استراتيجيات تسويق رقمية تعتمد على البيانات لتحقيق النمو والتفاعل والتحويلات.",
      whoWeAreTitle: "من نحن",
      whoWeAreDescription: "نحن فريق من خبراء التسويق الرقمي ملتزمون بمساعدة الشركات على النجاح في العالم الرقمي. مع أكثر من عقد من الخبرة، نحن متخصصون في تحسين محركات البحث، وإعلانات الدفع بالنقرة، والتسويق عبر وسائل التواصل الاجتماعي، واستراتيجية المحتوى. مهمتنا هي تحويل حضورك الرقمي إلى محرك نمو قوي، ونتعامل مع كل جانب من الاستراتيجية إلى التنفيذ بدقة وابتكار.",
      whoWeAreList: [
        "سجل مثبت في تحقيق نتائج قابلة للقياس",
        "استراتيجيات مخصصة لكل نوع عمل",
        "خبرة في أحدث أدوات التسويق الرقمي",
        "دعم مخصص وتواصل شفاف"
      ],
      whyChooseUs: "لماذا تختارنا",
      whyChooseUsTitle: "حقق أقصى عائد رقمي",
      whyChooseUsDescription: "استراتيجياتنا الرقمية مصممة بعناية لتقديم قيمة لا مثيل لها. من تحسين محركات البحث إلى الحملات الاجتماعية، نضمن توافق كل تكتيك مع أهداف عملك، ونقدم عائدًا كبيرًا على الاستثمار. ستحصل على رؤى خبراء وأدوات متقدمة وحلول مبتكرة تدفع عملك للأمام في الفضاء الرقمي.",
      getStarted: "ابدأ الآن",
      growthFocused: "التركيز على النمو",
      growthFocusedDesc: "نحقق نتائج قابلة للقياس وعائد استثمار لكل عميل.",
      creativeSolutions: "حلول إبداعية",
      creativeSolutionsDesc: "حملات مبتكرة مصممة لرؤية علامتك التجارية.",
      trustedExpertise: "خبرة موثوقة",
      trustedExpertiseDesc: "فريق مخصص ذو خبرة مثبتة في التسويق الرقمي.",
      gallerySubtitle: "خدماتنا",
      galleryTitle: "استكشف حلول التسويق الرقمي لدينا",
      serviceSeo: "تحسين محركات البحث",
      servicePpc: "إعلانات الدفع بالنقرة",
      serviceSocial: "التسويق عبر وسائل التواصل الاجتماعي",
      serviceContent: "تسويق المحتوى",
      trustedByTitle: "موثوق به من قبل رواد الصناعة",
      readyToTransform: "هل أنت جاهز لتحويل حضورك الرقمي؟ نحن ملتزمون بتقديم نتائج استثنائية تحقق النمو وتزيد من عائد الاستثمار.",
      freeConsultation: "احصل على استشارة مجانية",
    },
    he: {
      heroTitle: "העצם את הנוכחות הדיגיטלית שלך",
      heroDescription: "אנחנו יוצרים אסטרטגיות שיווק דיגיטליות מבוססות נתונים שמניעות צמיחה, מעורבות והמרות.",
      whoWeAreTitle: "מי אנחנו",
      whoWeAreDescription: "אנחנו צוות מומחי שיווק דיגיטלי שמסייע לעסקים להצליח בזירה הדיגיטלית. עם ניסיון של מעל עשור, אנו מתמחים בקידום אתרים, פרסום PPC, שיווק ברשתות חברתיות ואסטרטגיית תוכן. המשימה שלנו היא להפוך את הנוכחות הדיגיטלית שלך למנוע צמיחה חזק, תוך טיפול בכל שלב מהאסטרטגיה ועד הביצוע בדיוק וחדשנות.",
      whoWeAreList: [
        "הוכחה לתוצאות מדידות",
        "אסטרטגיות מותאמות לכל סוג עסק",
        "מומחיות בכלי השיווק הדיגיטלי החדישים ביותר",
        "תמיכה מסורה ותקשורת שקופה"
      ],
      whyChooseUs: "למה לבחור בנו",
      whyChooseUsTitle: "מקסם את ה-ROI הדיגיטלי שלך",
      whyChooseUsDescription: "האסטרטגיות שלנו מותאמות בקפידה כדי לספק ערך שאין שני לו. מקידום אתרים ועד קמפיינים חברתיים, אנו מבטיחים שכל טקטיקה תתאים למטרות העסק שלך ותספק החזר השקעה משמעותי. תקבל תובנות מומחים, כלים מתקדמים ופתרונות חדשניים שיקדמו את העסק שלך בזירה הדיגיטלית.",
      getStarted: "התחל עכשיו",
      growthFocused: "ממוקד צמיחה",
      growthFocusedDesc: "אנחנו מניעים תוצאות מדידות ו-ROI לכל לקוח.",
      creativeSolutions: "פתרונות יצירתיים",
      creativeSolutionsDesc: "קמפיינים חדשניים המותאמים לחזון המותג שלך.",
      trustedExpertise: "מומחיות מוכחת",
      trustedExpertiseDesc: "צוות מסור עם ניסיון מוכח בשיווק דיגיטלי.",
      gallerySubtitle: "השירותים שלנו",
      galleryTitle: "גלה את פתרונות השיווק הדיגיטלי שלנו",
      serviceSeo: "קידום אתרים",
      servicePpc: "פרסום PPC",
      serviceSocial: "שיווק ברשתות חברתיות",
      serviceContent: "שיווק תוכן",
      trustedByTitle: "מובילי התעשייה סומכים עלינו",
      readyToTransform: "מוכן לשדרג את הנוכחות הדיגיטלית שלך? אנו מחויבים לספק תוצאות יוצאות דופן שמניעות צמיחה וממקסמות את ה-ROI שלך.",
      freeConsultation: "קבל ייעוץ חינם",
    }
  };

  const t = translations[language] || translations["en"];

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      {/* Hero Section */}
      <div className="hero-container-home2">
        <video
          ref={videoRef}
          className="hero-video-home2"
          src="/images/home2-hero.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-overlay-home2"></div>
        <div className="hero-content-home2">
          <h1 className="hero-tagline-home2">{t.heroTitle}</h1>
          <p className="hero-paragraph-home2">{t.heroDescription}</p>
          <div className="hero-btns-home2">
            <button className="btn" onClick={() => handleGetStarted("/services")}>
              {t.gallerySubtitle}
            </button>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="who-we-are-container">
          <div className="who-we-are-text">
            <h2 className="who-we-are-title">{t.whoWeAreTitle}</h2>
            <p className="who-we-are-description" style={{ textAlign: "justify" }}>
              {t.whoWeAreDescription}
            </p>
            <ul className="who-we-are-list">
              {t.whoWeAreList.map((item, idx) => (
                <li key={idx}>
                  <i className="fas fa-check-circle" style={{ color: '#007bff', marginRight: '8px' }}></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="who-we-are-image">
            <img src="/images/who-we-are.jpg" alt="Digital Marketing Team" className="who-we-are-photo" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-attend-section">
        <div className="why-attend-container innovative-why-attend">
          <div className="why-attend-left">
            <p className="why-attend-subtitle">{t.whyChooseUs}</p>
            <h2 className="why-attend-title">{t.whyChooseUsTitle}</h2>
            <div className="why-attend-divider"></div>
            <p className="why-attend-description">{t.whyChooseUsDescription}</p>
            <button className="why-attend-button" onClick={() => handleGetStarted("/contact")}>
              <i className="fas fa-arrow-right"></i> {t.getStarted}
            </button>
          </div>
          <div className="why-attend-right">
            <div className="why-attend-card">
              <i className="fas fa-chart-line card-icon"></i>
              <div>
                <h3 className="card-title">{t.growthFocused}</h3>
                <p className="card-desc">{t.growthFocusedDesc}</p>
              </div>
            </div>
            <div className="why-attend-card">
              <i className="fas fa-lightbulb card-icon"></i>
              <div>
                <h3 className="card-title">{t.creativeSolutions}</h3>
                <p className="card-desc">{t.creativeSolutionsDesc}</p>
              </div>
            </div>
            <div className="why-attend-card">
              <i className="fas fa-user-shield card-icon"></i>
              <div>
                <h3 className="card-title">{t.trustedExpertise}</h3>
                <p className="card-desc">{t.trustedExpertiseDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery Section */}
      <section className="event-gallery-section">
        <div className="gallery-header-container">
          <p className="gallery-subtitle">{t.gallerySubtitle}</p>
          <h2 className="gallery-title">{t.galleryTitle}</h2>
        </div>
        <div className="gallery-container">
          {serviceImagesData.map((image) => (
            <ImageComponent
              key={image.id}
              imageUrl={image.url}
              serviceName={t[image.nameKey]}
            />
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section" ref={clientsRef}>
        <div className="clients-header">
          <h2>{t.trustedByTitle}</h2>
          <div className="header-line">
            <span className="dot"></span>
          </div>
        </div>
        <div className={`logos-container ${isClientsVisible ? 'animated' : ''}`}>
          {clients.map(client => (
            <div className="logo-item" key={client.id}>
              <img src={client.logoUrl} alt={client.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <div className="simple-hero-container-contact">
        <div className="simple-hero-background-contact"></div>
        <div className="simple-hero-content-contact">
          <p className="simple-hero-paragraph-contact" style={{ textAlign: "center" }}>
            {t.readyToTransform}
          </p>
          <button className="simple-hero-button-contact" style={{ alignSelf: "center" }} onClick={() => handleGetStarted("/contact")}>
            {t.freeConsultation}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home2;