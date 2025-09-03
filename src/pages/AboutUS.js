import "./AboutUs.css";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";
import React, { useState, useEffect, useRef } from 'react';

const AboutUs = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage(); // <-- Add this

  const handleGetStarted = (path) => {
    navigate(path);
  };

  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const missionRef = useRef(null);

  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const visionRef = useRef(null);

  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const storyRef = useRef(null);
  const [storyAnimated, setStoryAnimated] = useState(false); // <-- Add this

  const [isExpertsVisible, setIsExpertsVisible] = useState(false);
  const expertsRef = useRef(null);

  useEffect(() => {
    // Mission section animation
    const missionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsMissionVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (missionRef.current) missionObserver.observe(missionRef.current);

    // Vision section animation
    const visionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisionVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (visionRef.current) visionObserver.observe(visionRef.current);

    // Story section animation
    const storyObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !storyAnimated) {
          setIsStoryVisible(true);
          setStoryAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (storyRef.current) storyObserver.observe(storyRef.current);

    // Experts section animation
    const expertsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsExpertsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (expertsRef.current) expertsObserver.observe(expertsRef.current);

    // Cleanup observers
    return () => {
      if (missionRef.current) missionObserver.unobserve(missionRef.current);
      if (visionRef.current) visionObserver.unobserve(visionRef.current);
      if (storyRef.current) storyObserver.unobserve(storyRef.current);
      if (expertsRef.current) expertsObserver.unobserve(expertsRef.current);
    };
  }, []);

  const expertiseData = [
    { title: 'Search Engine Optimization', description: 'Boost your visibility and rank higher with our data-driven SEO strategies.' },
    { title: 'Pay-Per-Click Management', description: 'Drive immediate traffic and maximize your ROI with targeted ad campaigns.' },
    { title: 'Social Media Marketing', description: 'Build a powerful brand presence and engage with your audience across all platforms.' },
    { title: 'Content & Inbound Marketing', description: 'Attract, convert, and delight customers with valuable content tailored to their needs.' },
    { title: 'Web Design & Development', description: 'Create stunning, responsive websites that not only look great but also perform flawlessly.' },
    { title: 'Email Marketing', description: 'Nurture leads and build lasting customer relationships with automated email campaigns.' }
  ];

  const teamData = [
    { name: 'John Doe', role: 'CEO & Founder', image: '/images/team-john.jpg', bio: 'Visionary leader with a passion for innovation. John has over 15 years of experience in digital strategy and business development.' },
    { name: 'Jane Smith', role: 'Lead Designer', image: '/images/team-jane.jpg', bio: 'A creative powerhouse specializing in user-centric design and brand identity. Jane brings ideas to life with stunning visuals.' },
    { name: 'Michael Chen', role: 'Senior Developer', image: '/images/team-michael.jpg', bio: 'Our technical guru, Michael builds robust and scalable web applications. He is an expert in modern front-end and back-end frameworks.' },
    { name: 'Sarah Lee', role: 'Marketing Strategist', image: '/images/team-sarah.jpg', bio: 'Sarah is a data-driven marketer who crafts compelling campaigns that deliver measurable ROI and connect with target audiences.' }
  ];

  // Vision data
  const visionData = [
    {
      title: "Global Reach",
      percentage: 95,
      description: "Client satisfaction rate across global markets"
    },
    {
      title: "ROI Improvement",
      percentage: 178,
      description: "Average ROI increase for our clients"
    },
    {
      title: "Growth Rate",
      percentage: 230,
      description: "Year-over-year growth in client success metrics"
    }
  ];

  // Story timeline data
  const timelineData = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Founded as a small startup with a big idea: to make high-end digital marketing accessible to all businesses."
    },
    {
      year: "2018",
      title: "Rapid Expansion",
      description: "We grew our team from a handful of experts to a full-service agency, expanding our offerings to include SEO and PPC."
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Our work on several key projects earned us 'Agency of the Year' for our innovative and results-driven campaigns."
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "We opened our first international office, marking a new chapter in our mission to help brands succeed worldwide."
    }
  ];
  
  // Animated numbers for vision stats
  const [visionCounts, setVisionCounts] = useState(visionData.map(() => 0));
  const [visionAnimated, setVisionAnimated] = useState(false);

  useEffect(() => {
    let interval;
    if (isVisionVisible && !visionAnimated) {
      interval = setInterval(() => {
        setVisionCounts((prev) => {
          let updated = prev.map((count, idx) => {
            const target = visionData[idx].percentage;
            if (count < target) {
              const next = Math.min(count + Math.ceil(target / 60), target);
              return next;
            }
            return count;
          });
          if (updated.every((count, idx) => count >= visionData[idx].percentage)) {
            clearInterval(interval);
            setVisionAnimated(true);
          }
          return updated;
        });
      }, 20);
    }
    return () => clearInterval(interval);
  }, [isVisionVisible, visionAnimated, visionData]);

  const translations = {
    en: {
      heroTagline: "Empowering Your Brand with Innovative Digital Solutions",
      missionTitle: "Our Mission: To Empower Brands Digitally",
      missionP1: "We are a team of passionate digital strategists dedicated to helping businesses like yours thrive online. Our mission is to forge strong partnerships, leveraging cutting-edge technology and data-driven insights to achieve your marketing goals. We don't just work for you; we work with you to build a powerful digital legacy.",
      missionP2: "Our commitment to excellence means we are constantly innovating, adapting to the ever-changing digital landscape to ensure you stay ahead of the competition. Your success is our ultimate metric.",
      visionTitle: "Our Vision",
      visionH3: "Shaping the Future of Digital Marketing",
      visionP: "We envision a world where businesses of all sizes can leverage the power of digital marketing to reach their full potential. Our vision is to be the catalyst for transformative growth, creating meaningful connections between brands and their audiences through innovative strategies and cutting-edge technology.",
      visionFeatures: [
        { icon: "fas fa-globe", title: "Global Impact", desc: "Expanding our reach to help businesses worldwide succeed in the digital landscape." },
        { icon: "fas fa-lightbulb", title: "Continuous Innovation", desc: "Staying ahead of trends and developing new approaches to digital marketing challenges." },
        { icon: "fas fa-handshake", title: "Partnership Focused", desc: "Building long-term relationships based on trust, transparency, and shared success." }
      ],
      journeyTitle: "Our Journey",
      journeySubtitle: "From Clicks to Conversions, We’ve Got You Covered",
      timeline: [
        { year: "2015", title: "The Beginning", desc: "Founded as a small startup with a big idea: to make high-end digital marketing accessible to all businesses." },
        { year: "2018", title: "Rapid Expansion", desc: "We grew our team from a handful of experts to a full-service agency, expanding our offerings to include SEO and PPC." },
        { year: "2021", title: "Industry Recognition", desc: "Our work on several key projects earned us 'Agency of the Year' for our innovative and results-driven campaigns." },
        { year: "2024", title: "Global Reach", desc: "We opened our first international office, marking a new chapter in our mission to help brands succeed worldwide." }
      ],
      expertsTitle: "Meet Our Experts",
      expertsSubtitle: "Where Ideas Take Flight, Success Lands",
      ctaTitle: "Ready to Transform Your Digital Presence?",
      ctaDesc: "Join hundreds of successful brands that have experienced growth with our data-driven marketing strategies.",
      ctaBtn1: "Get Started Today",
      ctaBtn2: "View Our Work"
    },
    ar: {
      heroTagline: "تمكين علامتك التجارية بحلول رقمية مبتكرة",
      missionTitle: "مهمتنا: تمكين العلامات التجارية رقمياً",
      missionP1: "نحن فريق من الاستراتيجيين الرقميين المتحمسين لمساعدة الشركات على النجاح عبر الإنترنت. مهمتنا هي بناء شراكات قوية، والاستفادة من أحدث التقنيات والرؤى المستندة إلى البيانات لتحقيق أهدافك التسويقية. نحن لا نعمل من أجلك فقط؛ بل نعمل معك لبناء إرث رقمي قوي.",
      missionP2: "التزامنا بالتميز يعني أننا نبتكر باستمرار ونتكيف مع المشهد الرقمي المتغير لضمان بقائك في المقدمة. نجاحك هو معيارنا النهائي.",
      visionTitle: "رؤيتنا",
      visionH3: "تشكيل مستقبل التسويق الرقمي",
      visionP: "نتخيل عالماً يمكن فيه لجميع الشركات الاستفادة من قوة التسويق الرقمي لتحقيق إمكاناتها الكاملة. رؤيتنا هي أن نكون محفزاً للنمو التحويلي، ونخلق روابط ذات معنى بين العلامات التجارية وجمهورها من خلال استراتيجيات مبتكرة وتقنيات متقدمة.",
      visionFeatures: [
        { icon: "fas fa-globe", title: "تأثير عالمي", desc: "توسيع نطاقنا لمساعدة الشركات حول العالم على النجاح رقمياً." },
        { icon: "fas fa-lightbulb", title: "ابتكار مستمر", desc: "مواكبة الاتجاهات وتطوير أساليب جديدة لتحديات التسويق الرقمي." },
        { icon: "fas fa-handshake", title: "تركيز على الشراكة", desc: "بناء علاقات طويلة الأمد قائمة على الثقة والشفافية والنجاح المشترك." }
      ],
      journeyTitle: "رحلتنا",
      journeySubtitle: "من النقرات إلى التحويلات، نحن معك في كل خطوة",
      timeline: [
        { year: "2015", title: "البداية", desc: "تأسست كشركة ناشئة صغيرة بفكرة كبيرة: جعل التسويق الرقمي عالي الجودة متاحاً لجميع الشركات." },
        { year: "2018", title: "التوسع السريع", desc: "نمينا فريقنا من مجموعة صغيرة من الخبراء إلى وكالة متكاملة الخدمات، ووسعنا عروضنا لتشمل تحسين محركات البحث وإعلانات الدفع بالنقرة." },
        { year: "2021", title: "الاعتراف الصناعي", desc: "عملنا في عدة مشاريع رئيسية منحنا لقب 'وكالة العام' لحملاتنا المبتكرة والمبنية على النتائج." },
        { year: "2024", title: "الوصول العالمي", desc: "افتتحنا أول مكتب دولي لنا، معلنين بداية جديدة في مهمتنا لمساعدة العلامات التجارية على النجاح عالمياً." }
      ],
      expertsTitle: "تعرف على خبرائنا",
      expertsSubtitle: "حيث تنطلق الأفكار وتحط النجاحات",
      ctaTitle: "هل أنت جاهز لتحويل حضورك الرقمي؟",
      ctaDesc: "انضم إلى مئات العلامات التجارية الناجحة التي شهدت نمواً مع استراتيجياتنا التسويقية المعتمدة على البيانات.",
      ctaBtn1: "ابدأ اليوم",
      ctaBtn2: "شاهد أعمالنا"
    },
    he: {
      heroTagline: "להעצים את המותג שלך עם פתרונות דיגיטליים חדשניים",
      missionTitle: "המשימה שלנו: להעצים מותגים דיגיטלית",
      missionP1: "אנחנו צוות אסטרטגים דיגיטליים נלהבים שמסייע לעסקים להצליח אונליין. המשימה שלנו היא לבנות שותפויות חזקות, לנצל טכנולוגיה מתקדמת ותובנות מבוססות נתונים כדי להשיג את מטרות השיווק שלך. אנחנו לא רק עובדים בשבילך; אנחנו עובדים איתך כדי לבנות מורשת דיגיטלית עוצמתית.",
      missionP2: "המחויבות שלנו למצוינות פירושה שאנחנו מחדשים כל הזמן, מתאימים את עצמנו לנוף הדיגיטלי המשתנה כדי להבטיח שתישאר מוביל. ההצלחה שלך היא המדד הסופי שלנו.",
      visionTitle: "החזון שלנו",
      visionH3: "מעצבים את עתיד השיווק הדיגיטלי",
      visionP: "אנחנו רואים עולם שבו עסקים מכל הגדלים יכולים לנצל את כוח השיווק הדיגיטלי כדי להגיע למלוא הפוטנציאל שלהם. החזון שלנו הוא להיות זרז לצמיחה טרנספורמטיבית, ליצור קשרים משמעותיים בין מותגים לקהל שלהם באמצעות אסטרטגיות חדשניות וטכנולוגיה מתקדמת.",
      visionFeatures: [
        { icon: "fas fa-globe", title: "השפעה גלובלית", desc: "הרחבת ההשפעה שלנו כדי לסייע לעסקים ברחבי העולם להצליח בזירה הדיגיטלית." },
        { icon: "fas fa-lightbulb", title: "חדשנות מתמדת", desc: "להיות תמיד צעד אחד לפני כולם ולפתח גישות חדשות לאתגרים בשיווק הדיגיטלי." },
        { icon: "fas fa-handshake", title: "ממוקד שותפות", desc: "בניית מערכות יחסים ארוכות טווח המבוססות על אמון, שקיפות והצלחה משותפת." }
      ],
      journeyTitle: "המסע שלנו",
      journeySubtitle: "מקליקים להמרות – אנחנו איתך בכל שלב",
      timeline: [
        { year: "2015", title: "ההתחלה", desc: "הוקמה כסטארטאפ קטן עם רעיון גדול: להנגיש שיווק דיגיטלי איכותי לכל עסק." },
        { year: "2018", title: "התרחבות מהירה", desc: "הגדלנו את הצוות מקבוצה קטנה של מומחים לסוכנות שירותים מלאה, והרחבנו את ההיצע שלנו לקידום אתרים ו-PPC." },
        { year: "2021", title: "הכרה בתעשייה", desc: "העבודה שלנו בפרויקטים מרכזיים העניקה לנו את תואר 'סוכנות השנה' בזכות קמפיינים חדשניים וממוקדי תוצאות." },
        { year: "2024", title: "הגעה גלובלית", desc: "פתחנו את המשרד הבינלאומי הראשון שלנו, מסמנים פרק חדש במשימה שלנו לסייע למותגים להצליח ברחבי העולם." }
      ],
      expertsTitle: "הכירו את המומחים שלנו",
      expertsSubtitle: "היכן שהרעיונות ממריאים וההצלחות נוחתות",
      ctaTitle: "מוכן לשדרג את הנוכחות הדיגיטלית שלך?",
      ctaDesc: "הצטרף למאות מותגים מצליחים שצמחו עם אסטרטגיות השיווק שלנו המבוססות נתונים.",
      ctaBtn1: "התחל היום",
      ctaBtn2: "צפה בעבודות שלנו"
    }
  };

  return (
    <div className={`about-us-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Hero Section with autoplay video */}
      <div className="hero-container-about">
        <video
          className="hero-video-about"
          src="/images/aboutus-hero.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="video-overlay-about"></div>
        <div className="hero-content-about">
          <h1 className="hero-tagline-about">{translations[language].heroTagline}</h1>
        </div>
      </div>

      {/* Section 2: Our Mission (Image and Text) */}
      <section ref={missionRef} className={`mission-section ${isMissionVisible ? 'animate' : ''}`}>
        <div className="container mission-layout">
          <div className="mission-image-container">
            <img src="/images/mission.jpg" alt="Our Mission" className="mission-photo" />
          </div>
          <div className="mission-content">
            <h2 className="mission-title">{translations[language].missionTitle}</h2>
            <p>{translations[language].missionP1}</p>
            <p>{translations[language].missionP2}</p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Vision */}
      <section ref={visionRef} className={`vision-section ${isVisionVisible ? 'animate' : ''}`}>
        <div className="container-vision">
          <h2>{translations[language].visionTitle}</h2>
          <div className="vision-content">
            <div className="vision-text">
              <h3>{translations[language].visionH3}</h3>
              <p>{translations[language].visionP}</p>
              <div className="vision-features">
                {translations[language].visionFeatures.map((feature, index) => (
                  <div key={index} className="vision-feature">
                    <div className="vision-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="vision-feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="vision-stats">
              {visionData.map((item, index) => (
                <div key={index} className="vision-stat-item">
                  <div className="stat-number">{visionCounts[index]}%</div>
                  <div className="stat-title">{item.title}</div>
                  <div className="stat-description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Story (Vertical Timeline) */}
      <section
        ref={storyRef}
        className={`story-section ${storyAnimated ? 'animate' : ''}`}
      >
        <div className="container-story">
          <h2 style={{marginBottom:"10px"}}>{translations[language].journeyTitle}</h2>
          <p style={{textAlign:"center",marginBottom:"40px"}}>{translations[language].journeySubtitle}</p>
          <div className="timeline-vertical">
            {translations[language].timeline.map((item, index) => (
              <div key={index} className="timeline-item-vertical">
                <div className="timeline-marker"></div>
                <div className="timeline-content-vertical">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* Section 6: Meet Our Experts (Team) */}
      <section ref={expertsRef} className={`experts-section ${isExpertsVisible ? 'animate' : ''}`}>
        <div className="container">
          <h2 style={{marginBottom:"10px"}}>{translations[language].expertsTitle}</h2>
          <p style={{textAlign:"center",marginBottom:"40px"}}>{translations[language].expertsSubtitle}</p>
          <div className="experts-grid">
            {teamData.map((member, index) => (
              <div key={index} className="expert-card" style={{ '--delay-index': index }}>
                <img src={member.image} alt={member.name} className="expert-photo" />
                <div className="expert-info">
                  <h3>{member.name}</h3>
                  <p className="expert-role">{member.role}</p>
                  <p className="expert-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{translations[language].ctaTitle}</h2>
            <p>{translations[language].ctaDesc}</p>
            <div className="cta-buttons">
              <button className="cta-button prmary " onClick={() => handleGetStarted("/contact")}>
                {translations[language].ctaBtn1}
              </button>
              <button className="cta-button secondary " onClick={() => handleGetStarted("/about")}>
                {translations[language].ctaBtn2}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;