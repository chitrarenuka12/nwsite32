import './ContactUs.css';
import { useDarkMode } from '../context/Darkmodecontext';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  en: {
    heroTitle: "Get In Touch with US",
    heroDesc: "Friendly and welcoming, used by brands like Unbounce to make visitors feel valued and at ease.",
    formTitle: "Get in Touch",
    formDesc: "Fill out the form below and our team will contact you within 24 hours",
    name: "Your Name",
    email: "Email Address",
    phone: "Phone Number",
    eventType: "Event Type",
    selectEventType: "Select Event Type",
    eventTypes: [
      { value: "corporate", label: "Corporate Event" },
      { value: "wedding", label: "Wedding" },
      { value: "conference", label: "Conference" },
      { value: "birthday", label: "Birthday Party" },
      { value: "gala", label: "Gala Dinner" },
      { value: "other", label: "Other" }
    ],
    eventDate: "Event Date",
    guests: "Number of Guests",
    message: "Tell us about your event",
    submit: "Submit Inquiry",
    thankYou: "Thank you for your inquiry! We will contact you shortly.",
    contactOtherTitle: "Other Ways to Reach Us",
    callUs: "Call Us",
    phoneNum: "+1 (555) 123-4567",
    phoneHours: "Mon-Fri, 9am-6pm EST",
    emailUs: "Email Us",
    emailAddr: "events@yourcompany.com",
    emailResp: "Response within 24 hours",
    visitUs: "Visit Us",
    address: "123 Event Plaza, Suite 456",
    city: "New York, NY 10001",
    dmInsightsTitle: "Digital Marketing Insights",
    dmInsightsSub: "Stay ahead with the latest trends, tips, and strategies from our expert team.",
    dmInsights: [
      { title: "AI in Marketing:", desc: "Discover how artificial intelligence is transforming campaign targeting and personalization." },
      { title: "Content That Converts:", desc: "Learn the secrets to creating engaging content that drives real results." },
      { title: "SEO Best Practices:", desc: "Get actionable advice to boost your search rankings and organic traffic." },
      { title: "Social Media Growth:", desc: "Explore proven tactics for building your brand and audience on social platforms." }
    ],
    mapTitle: "Find Us On The Map"
  },
  ar: {
    heroTitle: "تواصل معنا",
    heroDesc: "ودود ومرحّب، تستخدمه العلامات التجارية لجعل الزوار يشعرون بالتقدير والراحة.",
    formTitle: "تواصل معنا",
    formDesc: "املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة",
    name: "اسمك",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    eventType: "نوع الحدث",
    selectEventType: "اختر نوع الحدث",
    eventTypes: [
      { value: "corporate", label: "حدث شركات" },
      { value: "wedding", label: "حفل زفاف" },
      { value: "conference", label: "مؤتمر" },
      { value: "birthday", label: "حفلة عيد ميلاد" },
      { value: "gala", label: "عشاء رسمي" },
      { value: "other", label: "آخر" }
    ],
    eventDate: "تاريخ الحدث",
    guests: "عدد الضيوف",
    message: "أخبرنا عن الحدث الخاص بك",
    submit: "إرسال الاستفسار",
    thankYou: "شكرًا لاستفسارك! سنتواصل معك قريبًا.",
    contactOtherTitle: "طرق أخرى للتواصل معنا",
    callUs: "اتصل بنا",
    phoneNum: "+1 (555) 123-4567",
    phoneHours: "الاثنين-الجمعة، 9 صباحًا - 6 مساءً بتوقيت شرق أمريكا",
    emailUs: "راسلنا عبر البريد",
    emailAddr: "events@yourcompany.com",
    emailResp: "الرد خلال 24 ساعة",
    visitUs: "زرنا",
    address: "123 ساحة الفعاليات، جناح 456",
    city: "نيويورك، NY 10001",
    dmInsightsTitle: "رؤى التسويق الرقمي",
    dmInsightsSub: "ابق في المقدمة مع أحدث الاتجاهات والنصائح والاستراتيجيات من فريقنا الخبير.",
    dmInsights: [
      { title: "الذكاء الاصطناعي في التسويق:", desc: "اكتشف كيف يغير الذكاء الاصطناعي استهداف الحملات والتخصيص." },
      { title: "المحتوى الذي يحول:", desc: "تعلم أسرار إنشاء محتوى جذاب يحقق نتائج فعلية." },
      { title: "أفضل ممارسات SEO:", desc: "احصل على نصائح عملية لتعزيز ترتيبك في البحث وزيادة الزيارات العضوية." },
      { title: "نمو وسائل التواصل الاجتماعي:", desc: "استكشف أساليب مثبتة لبناء علامتك التجارية وجمهورك على المنصات الاجتماعية." }
    ],
    mapTitle: "اعثر علينا على الخريطة"
  },
  he: {
    heroTitle: "צור קשר איתנו",
    heroDesc: "ידידותי ומזמין, בשימוש מותגים כדי לגרום למבקרים להרגיש מוערכים ובנוח.",
    formTitle: "צור קשר",
    formDesc: "מלא את הטופס וצוותנו יחזור אליך תוך 24 שעות",
    name: "השם שלך",
    email: "כתובת אימייל",
    phone: "מספר טלפון",
    eventType: "סוג האירוע",
    selectEventType: "בחר סוג אירוע",
    eventTypes: [
      { value: "corporate", label: "אירוע עסקי" },
      { value: "wedding", label: "חתונה" },
      { value: "conference", label: "כנס" },
      { value: "birthday", label: "מסיבת יום הולדת" },
      { value: "gala", label: "ארוחת גאלה" },
      { value: "other", label: "אחר" }
    ],
    eventDate: "תאריך האירוע",
    guests: "מספר אורחים",
    message: "ספר לנו על האירוע שלך",
    submit: "שלח פנייה",
    thankYou: "תודה על פנייתך! נחזור אליך בקרוב.",
    contactOtherTitle: "דרכים נוספות ליצור קשר",
    callUs: "התקשרו אלינו",
    phoneNum: "+1 (555) 123-4567",
    phoneHours: "ב'-ו', 9:00-18:00 שעון ניו יורק",
    emailUs: "שלחו לנו אימייל",
    emailAddr: "events@yourcompany.com",
    emailResp: "תגובה תוך 24 שעות",
    visitUs: "בקרו אותנו",
    address: "123 Event Plaza, Suite 456",
    city: "ניו יורק, NY 10001",
    dmInsightsTitle: "תובנות שיווק דיגיטלי",
    dmInsightsSub: "הישארו מובילים עם מגמות, טיפים ואסטרטגיות מהצוות המקצועי שלנו.",
    dmInsights: [
      { title: "בינה מלאכותית בשיווק:", desc: "גלו כיצד AI משנה את מיקוד הקמפיינים וההתאמה האישית." },
      { title: "תוכן שממיר:", desc: "למדו את הסודות ליצירת תוכן שמייצר תוצאות אמיתיות." },
      { title: "שיטות SEO מומלצות:", desc: "קבלו טיפים מעשיים לשיפור הדירוג והגדלת התנועה האורגנית." },
      { title: "צמיחה ברשתות חברתיות:", desc: "גלו טקטיקות מוכחות לבניית מותג וקהל ברשתות החברתיות." }
    ],
    mapTitle: "מצאו אותנו על המפה"
  }
};

function ContactUs() {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert(t.thankYou);
  };

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      {/* Hero Section */}
      <div className="hero-container-corporate">
        <video
          className="hero-video-corporate"
          src="/images/contact.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-corporate">
          <h1 className="hero-tagline-corporate">{t.heroTitle}</h1>
          <p className="hero-paragraph-corporate">{t.heroDesc}</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2>{t.formTitle}</h2>
            <p>{t.formDesc}</p>
            <form onSubmit={handleSubmit} className="event-contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{t.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">{t.eventType}</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t.selectEventType}</option>
                    {t.eventTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventDate">{t.eventDate}</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">{t.guests}</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                  />
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">{t.submit}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <h2>{t.contactOtherTitle}</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>{t.callUs}</h3>
              <p>{t.phoneNum}</p>
              <span>{t.phoneHours}</span>
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>{t.emailUs}</h3>
              <p>{t.emailAddr}</p>
              <span>{t.emailResp}</span>
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>{t.visitUs}</h3>
              <p>{t.address}</p>
              <span>{t.city}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Insights Section */}
      <section className="dm-insights-section">
        <div className="container">
          <h2>{t.dmInsightsTitle}</h2>
          <p className="dm-insights-subheading">{t.dmInsightsSub}</p>
          <ul className="dm-insights-list">
            {t.dmInsights.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map Section at Bottom */}
      <section className="contact-map-section">
        <h2>{t.mapTitle}</h2>
        <div className="map-wrapper">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.857181993982!2d-74.00594168459344!3d40.71277577933009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c7e4b2d%3A0x7c2e8e8e8e8e8e8e!2s123%20Event%20Plaza%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;