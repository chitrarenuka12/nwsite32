import React, { useState } from "react";
import "./Blog.css";
import { useNavigate, Link } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";

// Translations for all visible text
const translations = {
  en: {
    heroTagline: "We don't just market—we create a legacy.",
    featuredTitle: "Featured Blog Posts",
    cards: [
      {
        title: "Web Development Trends",
        description: "Discover the latest frameworks, tools, and techniques that are shaping the future of web development in 2023.",
        buttonText: "Read More",
      },
      {
        title: "UX Design Principles",
        description: "Learn about the fundamental principles of user experience design that create intuitive and engaging digital products.",
        buttonText: "Explore UX",
      },
      {
        title: "Data Science Insights",
        description: "Dive into the world of data analytics and machine learning to extract valuable insights from complex datasets.",
        buttonText: "View Insights",
      }
    ],
    storyGalleryTitle: "Marketing Success Stories",
    storyGalleryDesc: "Explore real-world examples of innovative marketing approaches",
    stories: [
      {
        nav: "EcoBrand's Social Shift",
        title: "EcoBrand's Social Shift",
        desc: "How a sustainable products company transformed its digital presence by focusing on authentic storytelling and community engagement rather than traditional advertising.",
        points: [
          "Increased engagement by focusing on community values",
          "Built a loyal following through authentic content",
          "Generated significant sales through social channels"
        ],
        link: "Read full case study →"
      },
      {
        nav: "TechStart's Email Revival",
        title: "TechStart's Email Revival",
        desc: "A B2B SaaS company reinvented its email marketing strategy by implementing personalized content journeys based on user behavior and needs.",
        points: [
          "Dramatically improved open and click-through rates",
          "Created meaningful connections with subscribers",
          "Developed a sustainable lead nurturing system"
        ],
        link: "Read full case study →"
      },
      {
        nav: "Local Cafe's Community Building",
        title: "Local Cafe's Community Building",
        desc: "A neighborhood coffee shop leveraged local partnerships and hyper-targeted content to become a community hub rather than just a coffee provider.",
        points: [
          "Expanded customer base through local collaborations",
          "Created a destination experience rather than just a service",
          "Developed multiple revenue streams through community events"
        ],
        link: "Read full case study →"
      }
    ],
    highlightsTitle: "Digital Marketing Insights & Strategies",
    highlightsSubtitle: "Stay ahead of the curve with expert tips, industry trends, and data-driven strategies to grow your online presence.",
    highlights: [
      {
        category: "SEO",
        title: "Top SEO Trends to Watch in 2023",
        meta: "June 15, 2023 • 8 min read",
        desc: "Discover the emerging SEO trends that will dominate search rankings this year, from AI-powered content to voice search optimization and E-A-T principles.",
        link: "/search-engine",
        linkText: "Read full case study →"
      },
      {
        category: "Social Media",
        title: "Creating a Social Media Strategy That Converts",
        meta: "June 8, 2023 • 6 min read",
        desc: "Learn how to develop a results-driven social media strategy that builds brand awareness, engages your audience, and drives measurable conversions.",
        link: "/blog/social-media-",
        linkText: "Read More"
      },
      {
        category: "PPC Advertising",
        title: "Maximizing ROI with Smart PPC Optimization",
        meta: "June 1, 2023 • 7 min read",
        desc: "Unlock the secrets to PPC success with our comprehensive guide to campaign optimization, keyword strategy, and conversion rate improvement techniques.",
        link: "/blog/ppc-advertising",
        linkText: "Read More"
      }
    ],
    mythbustersTitle: "Marketing Mythbusters",
    mythbustersSubtitle: "We debunk common digital marketing myths so you can focus on what really works.",
    myths: [
      {
        title: 'Myth #1: "SEO is a one-time task."',
        desc: "SEO is an ongoing process. Search engines and competitors are always evolving, so regular optimization is essential for lasting results."
      },
      {
        title: 'Myth #2: "More traffic always means more sales."',
        desc: "Quality matters more than quantity. Targeted traffic from the right audience leads to higher conversion rates and better ROI."
      },
      {
        title: 'Myth #3: "Social media is only for brand awareness."',
        desc: "Social platforms can drive direct sales, customer loyalty, and valuable feedback when used strategically."
      }
    ],
    ctaTitle: "Ready to Elevate Your Digital Strategy?",
    ctaDesc: "Contact us today to unlock new growth opportunities and transform your online presence.",
    ctaBtn1: "Get Started",
    ctaBtn2: "View Services"
  },
  ar: {
    heroTagline: "نحن لا نسوق فقط—بل نصنع إرثاً رقمياً.",
    featuredTitle: "مشاركات المدونة المميزة",
    cards: [
      {
        title: "اتجاهات تطوير الويب",
        description: "اكتشف أحدث الأطر والأدوات والتقنيات التي تشكل مستقبل تطوير الويب في 2023.",
        buttonText: "اقرأ المزيد",
      },
      {
        title: "مبادئ تصميم تجربة المستخدم",
        description: "تعرف على المبادئ الأساسية لتصميم تجربة المستخدم التي تخلق منتجات رقمية جذابة وسهلة الاستخدام.",
        buttonText: "استكشف تجربة المستخدم",
      },
      {
        title: "رؤى علم البيانات",
        description: "انغمس في عالم تحليلات البيانات وتعلم الآلة لاستخلاص رؤى قيمة من مجموعات البيانات المعقدة.",
        buttonText: "عرض الرؤى",
      }
    ],
    storyGalleryTitle: "قصص نجاح التسويق",
    storyGalleryDesc: "استكشف أمثلة واقعية لأساليب التسويق المبتكرة",
    stories: [
      {
        nav: "تحول EcoBrand الاجتماعي",
        title: "تحول EcoBrand الاجتماعي",
        desc: "كيف حولت شركة منتجات مستدامة حضورها الرقمي من خلال التركيز على سرد القصص الأصيل والمشاركة المجتمعية بدلاً من الإعلان التقليدي.",
        points: [
          "زيادة التفاعل بالتركيز على قيم المجتمع",
          "بناء قاعدة متابعين وفية من خلال محتوى أصيل",
          "تحقيق مبيعات كبيرة عبر القنوات الاجتماعية"
        ],
        link: "اقرأ دراسة الحالة كاملة →"
      },
      {
        nav: "إحياء البريد الإلكتروني لـ TechStart",
        title: "إحياء البريد الإلكتروني لـ TechStart",
        desc: "شركة SaaS B2B أعادت ابتكار استراتيجية التسويق عبر البريد الإلكتروني من خلال تنفيذ رحلات محتوى مخصصة بناءً على سلوك واحتياجات المستخدم.",
        points: [
          "تحسين معدلات الفتح والنقر بشكل كبير",
          "إنشاء علاقات قوية مع المشتركين",
          "تطوير نظام رعاية العملاء المحتملين مستدام"
        ],
        link: "اقرأ دراسة الحالة كاملة →"
      },
      {
        nav: "بناء مجتمع لمقهى محلي",
        title: "بناء مجتمع لمقهى محلي",
        desc: "مقهى حي استفاد من الشراكات المحلية والمحتوى المستهدف ليصبح مركزاً مجتمعياً وليس مجرد مقدم خدمة قهوة.",
        points: [
          "توسيع قاعدة العملاء من خلال التعاون المحلي",
          "خلق تجربة وجهة وليس مجرد خدمة",
          "تطوير مصادر دخل متعددة من خلال فعاليات المجتمع"
        ],
        link: "اقرأ دراسة الحالة كاملة →"
      }
    ],
    highlightsTitle: "رؤى واستراتيجيات التسويق الرقمي",
    highlightsSubtitle: "ابق في المقدمة مع نصائح الخبراء واتجاهات الصناعة واستراتيجيات معتمدة على البيانات لتنمية حضورك الرقمي.",
    highlights: [
      {
        category: "SEO",
        title: "أهم اتجاهات SEO لعام 2023",
        meta: "15 يونيو 2023 • 8 دقائق قراءة",
        desc: "اكتشف اتجاهات SEO الناشئة التي ستسيطر على تصنيفات البحث هذا العام، من المحتوى المدعوم بالذكاء الاصطناعي إلى تحسين البحث الصوتي ومبادئ E-A-T.",
        link: "/search-engine",
        linkText: "اقرأ دراسة الحالة كاملة →"
      },
      {
        category: "وسائل التواصل الاجتماعي",
        title: "إنشاء استراتيجية وسائل التواصل الاجتماعي التي تحقق نتائج",
        meta: "8 يونيو 2023 • 6 دقائق قراءة",
        desc: "تعلم كيفية تطوير استراتيجية وسائل التواصل الاجتماعي التي تبني الوعي بالعلامة التجارية وتزيد التفاعل وتحقق تحويلات قابلة للقياس.",
        link: "/blog/social-media-",
        linkText: "اقرأ المزيد"
      },
      {
        category: "إعلانات الدفع بالنقرة",
        title: "تعظيم العائد مع تحسين PPC الذكي",
        meta: "1 يونيو 2023 • 7 دقائق قراءة",
        desc: "اكتشف أسرار نجاح PPC من خلال دليلنا الشامل لتحسين الحملات واستراتيجية الكلمات المفتاحية وتقنيات تحسين معدل التحويل.",
        link: "/blog/ppc-advertising",
        linkText: "اقرأ المزيد"
      }
    ],
    mythbustersTitle: "مفاهيم خاطئة في التسويق",
    mythbustersSubtitle: "نفضح المفاهيم الخاطئة الشائعة في التسويق الرقمي حتى تركز على ما يحقق النتائج فعلاً.",
    myths: [
      {
        title: 'الخرافة #1: "SEO مهمة لمرة واحدة."',
        desc: "SEO عملية مستمرة. محركات البحث والمنافسون يتغيرون دائماً، لذا التحسين المنتظم ضروري لتحقيق نتائج دائمة."
      },
      {
        title: 'الخرافة #2: "المزيد من الزيارات يعني المزيد من المبيعات."',
        desc: "الجودة أهم من الكمية. الزيارات المستهدفة من الجمهور المناسب تؤدي إلى معدلات تحويل أعلى وعائد أفضل."
      },
      {
        title: 'الخرافة #3: "وسائل التواصل الاجتماعي فقط لزيادة الوعي."',
        desc: "المنصات الاجتماعية يمكن أن تحقق مبيعات مباشرة وولاء العملاء وردود فعل قيمة عند استخدامها بشكل استراتيجي."
      }
    ],
    ctaTitle: "جاهز لتعزيز استراتيجيتك الرقمية؟",
    ctaDesc: "اتصل بنا اليوم لفتح فرص نمو جديدة وتحويل حضورك الرقمي.",
    ctaBtn1: "ابدأ الآن",
    ctaBtn2: "عرض الخدمات"
  },
  he: {
    heroTagline: "אנחנו לא רק משווקים—אנחנו יוצרים מורשת.",
    featuredTitle: "פוסטים נבחרים בבלוג",
    cards: [
      {
        title: "מגמות פיתוח אתרים",
        description: "גלה את המסגרות, הכלים והטכניקות החדשות שמעצבות את עתיד פיתוח האתרים ב-2023.",
        buttonText: "קרא עוד",
      },
      {
        title: "עקרונות עיצוב UX",
        description: "למד על העקרונות הבסיסיים של עיצוב חווית משתמש שיוצרים מוצרים דיגיטליים אינטואיטיביים ומרתקים.",
        buttonText: "גלה UX",
      },
      {
        title: "תובנות מדע הנתונים",
        description: "צלול לעולם האנליטיקה ולמידת המכונה כדי להפיק תובנות יקרות מערכות נתונים מורכבות.",
        buttonText: "צפה בתובנות",
      }
    ],
    storyGalleryTitle: "סיפורי הצלחה בשיווק",
    storyGalleryDesc: "גלה דוגמאות אמיתיות לגישות שיווק חדשניות",
    stories: [
      {
        nav: "המעבר החברתי של EcoBrand",
        title: "המעבר החברתי של EcoBrand",
        desc: "איך חברת מוצרים ברי קיימא שינתה את הנוכחות הדיגיטלית שלה על ידי התמקדות בסיפור אותנטי ומעורבות קהילתית במקום פרסום מסורתי.",
        points: [
          "הגברת המעורבות על ידי התמקדות בערכי הקהילה",
          "בניית קהל נאמן באמצעות תוכן אותנטי",
          "יצירת מכירות משמעותיות בערוצים החברתיים"
        ],
        link: "קרא את המחקר המלא →"
      },
      {
        nav: "החייאת הדוא\"ל של TechStart",
        title: "החייאת הדוא\"ל של TechStart",
        desc: "חברת SaaS B2B חידשה את אסטרטגיית השיווק בדוא\"ל שלה באמצעות מסעות תוכן מותאמים אישית לפי התנהגות וצרכי המשתמש.",
        points: [
          "שיפור משמעותי בשיעורי פתיחה והקלקה",
          "יצירת קשרים משמעותיים עם מנויים",
          "פיתוח מערכת טיפוח לידים בת קיימא"
        ],
        link: "קרא את המחקר המלא →"
      },
      {
        nav: "בניית קהילה לבית קפה מקומי",
        title: "בניית קהילה לבית קפה מקומי",
        desc: "בית קפה שכונתי ניצל שותפויות מקומיות ותוכן ממוקד כדי להפוך למרכז קהילתי ולא רק לספק קפה.",
        points: [
          "הרחבת בסיס הלקוחות באמצעות שיתופי פעולה מקומיים",
          "יצירת חווית יעד ולא רק שירות",
          "פיתוח מקורות הכנסה נוספים דרך אירועי קהילה"
        ],
        link: "קרא את המחקר המלא →"
      }
    ],
    highlightsTitle: "תובנות ואסטרטגיות שיווק דיגיטלי",
    highlightsSubtitle: "הישאר מוביל עם טיפים מקצועיים, מגמות ענף ואסטרטגיות מבוססות נתונים לצמיחה דיגיטלית.",
    highlights: [
      {
        category: "SEO",
        title: "מגמות SEO מובילות לשנת 2023",
        meta: "15 ביוני 2023 • 8 דקות קריאה",
        desc: "גלה את מגמות ה-SEO החדשות שישלטו בדירוגי החיפוש השנה, מתוכן מבוסס AI ועד אופטימיזציה לחיפוש קולי ועקרונות E-A-T.",
        link: "/search-engine",
        linkText: "קרא את המחקר המלא →"
      },
      {
        category: "רשתות חברתיות",
        title: "בניית אסטרטגיית רשתות חברתיות שממירה",
        meta: "8 ביוני 2023 • 6 דקות קריאה",
        desc: "למד כיצד לפתח אסטרטגיית רשתות חברתיות שמביאה מודעות, מעורבות והמרות מדידות.",
        link: "/blog/social-media-",
        linkText: "קרא עוד"
      },
      {
        category: "פרסום PPC",
        title: "מקסום ROI עם אופטימיזציית PPC חכמה",
        meta: "1 ביוני 2023 • 7 דקות קריאה",
        desc: "גלה את סודות ההצלחה ב-PPC עם מדריך מלא לאופטימיזציית קמפיינים, אסטרטגיית מילות מפתח וטכניקות שיפור המרות.",
        link: "/blog/ppc-advertising",
        linkText: "קרא עוד"
      }
    ],
    mythbustersTitle: "מפצחי מיתוסים בשיווק",
    mythbustersSubtitle: "אנחנו מפריכים מיתוסים נפוצים בשיווק דיגיטלי כדי שתתמקד במה שבאמת עובד.",
    myths: [
      {
        title: 'מיתוס #1: "SEO זו משימה חד פעמית."',
        desc: "SEO הוא תהליך מתמשך. מנועי חיפוש ומתחרים משתנים כל הזמן, לכן אופטימיזציה שוטפת חיונית לתוצאות מתמשכות."
      },
      {
        title: 'מיתוס #2: "יותר תנועה תמיד אומר יותר מכירות."',
        desc: "איכות חשובה יותר מכמות. תנועה ממוקדת מהקהל הנכון מובילה לשיעורי המרה גבוהים יותר ול-ROI טוב יותר."
      },
      {
        title: 'מיתוס #3: "רשתות חברתיות רק למודעות מותג."',
        desc: "פלטפורמות חברתיות יכולות להניב מכירות ישירות, נאמנות לקוחות ומשוב חשוב בשימוש אסטרטגי."
      }
    ],
    ctaTitle: "מוכן להעצים את האסטרטגיה הדיגיטלית שלך?",
    ctaDesc: "צור קשר היום כדי לפתוח הזדמנויות צמיחה חדשות ולשדרג את הנוכחות שלך ברשת.",
    ctaBtn1: "התחל עכשיו",
    ctaBtn2: "צפה בשירותים"
  }
};

const Blog = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const [activeStory, setActiveStory] = useState(0);

  // Use translated cards
  const t = translations[language] || translations["en"];
  const [cards] = useState([
    {
      id: 1,
      ...t.cards[0],
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      path: "/blog1",
      style: "modern"
    },
    {
      id: 2,
      ...t.cards[1],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      path: "/blog2",
      style: "minimalist"
    },
    {
      id: 3,
      ...t.cards[2],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      path: "/blog3",
      style: "bold"
    }
  ]);

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={`blog-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Hero Section */}
      <div className="hero-container-blog">
        <video
          className="hero-video-blog"
          src="/images/blog-hero.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="video-overlay-blog"></div>
        <div className="hero-content-blog">
          <h1 className="hero-tagline-blog">{t.heroTagline}</h1>
        </div>
      </div>
      {/* Featured Blog Posts */}
      <div className="blog-cards-container">
        <h1 className="blog-cards-title">{t.featuredTitle}</h1>
        <div className="blog-cards-wrapper">
          {cards.map(card => (
            <div key={card.id} className={`blog-card ${card.style}`}>
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <button
                  className="card-button"
                  onClick={() => handleGetStarted(card.path)}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Marketing Story Gallery */}
      <section className="story-gallery">
        <h2>{t.storyGalleryTitle}</h2>
        <p className="section-description" style={{ textAlign: 'center' }}>
          {t.storyGalleryDesc}
        </p>
        <div className="gallery-container">
          <div className="gallery-nav">
            {t.stories.map((story, idx) => (
              <button
                key={idx}
                className={`nav-item ${activeStory === idx ? 'active' : ''}`}
                onClick={() => setActiveStory(idx)}
              >
                {story.nav}
              </button>
            ))}
          </div>
          <div className="gallery-content">
            <div className="story-content">
              <div className="story-visual">
                <div className={`visual-element ${["social", "email", "community"][activeStory]}`}>
                  <img src={
                    activeStory === 0 ? "images/eco-b.jpg"
                      : activeStory === 1 ? "images/email.jpg"
                      : "images/collaborate.jpg"
                  } alt={t.stories[activeStory].title} />
                </div>
              </div>
              <div className="story-text">
                <h3>{t.stories[activeStory].title}</h3>
                <p>{t.stories[activeStory].desc}</p>
                <ul>
                  {t.stories[activeStory].points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <a href="#" className="story-link">{t.stories[activeStory].link}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Highlights Section */}
      <section className={`blog-highlights-section ${darkMode ? "dark-mode" : ""}`}>
        <div className="blog-highlights-wrapper">
          <h2 className="blog-highlights-heading">{t.highlightsTitle}</h2>
          <p className="blog-highlights-subheading">{t.highlightsSubtitle}</p>
          <div className="blog-highlight-grid">
            {t.highlights.map((highlight, idx) => (
              <article className={`blog-highlight-item${idx === 1 ? " reverse-row" : ""}`} key={idx}>
                <div className="blog-highlight-image-container">
                  <img
                    src={
                      idx === 0 ? "images/seo-s.jpg"
                        : idx === 1 ? "images/socialm-s.jpg"
                        : "images/ppc-s.jpg"
                    }
                    alt={highlight.title}
                  />
                  <div className="blog-post-category">{highlight.category}</div>
                </div>
                <div className="blog-highlight-content">
                  <h3>{highlight.title}</h3>
                  <p className="blog-post-meta">{highlight.meta}</p>
                  <p>{highlight.desc}</p>
                  <Link to={highlight.link} className="story-link">{highlight.linkText}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Marketing Mythbusters */}
      <section className={`mythbusters-section ${darkMode ? "dark-mode" : ""}`}>
        <div className="mythbusters-wrapper">
          <h2 className="mythbusters-heading">{t.mythbustersTitle}</h2>
          <p className="mythbusters-subheading">{t.mythbustersSubtitle}</p>
          <div className="myth-list">
            {t.myths.map((myth, idx) => (
              <div className="myth-item" key={idx}>
                <h3>{myth.title}</h3>
                <p>{myth.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className={`cta-section ${darkMode ? "dark-mode" : ""}`}>
        <div className="container">
          <div className="cta-content">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaDesc}</p>
            <div className="cta-buttons">
              <button
                className="cta-button primary"
                onClick={() => handleGetStarted("/contact")}
              >
                {t.ctaBtn1}
              </button>
              <button
                className="cta-button secondary"
                onClick={() => handleGetStarted("/services")}
              >
                {t.ctaBtn2}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;