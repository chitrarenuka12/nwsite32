import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { useLanguage } from "../context/LanguageContext";

// Simple translations for demonstration
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact Us",
    searchEngine: "SearchEngine",
    ppc: "PPC Advertising",
    social: "Social Media",
    content: "Content Marketing",
    email: "Email Marketing",
    analytics: "Analytics Reporting",
    logout: "Logout",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    blog: "مدونة",
    contact: "اتصل بنا",
    searchEngine: "محرك البحث",
    ppc: "إعلانات الدفع بالنقرة",
    social: "وسائل التواصل",
    content: "تسويق المحتوى",
    email: "التسويق عبر البريد",
    analytics: "تحليلات التقارير",
    logout: "تسجيل خروج",
  },
  he: {
    home: "בית",
    about: "אודות",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    searchEngine: "מנוע חיפוש",
    ppc: "פרסום PPC",
    social: "מדיה חברתית",
    content: "שיווק תוכן",
    email: "שיווק בדוא\"ל",
    analytics: "דוחות אנליטיים",
    logout: "התנתק",
  }
};

const Header = ({ toggleTheme, isDark }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [initials, setInitials] = useState("");
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { language, setLanguage } = useLanguage(); // Using custom hook for language
  const avatarRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Set RTL for Arabic/Hebrew
  useEffect(() => {
    if (language === "ar" || language === "he") {
      document.body.setAttribute("dir", "rtl");
    } else {
      document.body.setAttribute("dir", "ltr");
    }
  }, [language]);

  // Get user initials from localStorage
  const getUserInitials = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find(user => user.email === loggedInEmail);

    if (currentUser) {
      const firstInitial = currentUser.firstName?.trim().charAt(0).toUpperCase() || "";
      const lastInitial = currentUser.lastName?.trim().charAt(0).toUpperCase() || "";
      return firstInitial + lastInitial;
    }
    return "";
  };

  useEffect(() => {
    setInitials(getUserInitials());
    const handleStorage = () => setInitials(getUserInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  // Close avatar dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile nav on large screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(prev => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const handleMainClick = (page) => {
    navigate(`/${page}`);
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const getActiveLink = () => {
    if (location.pathname === "/" || location.pathname === "/home2") return "home";
    if (location.pathname === "/about") return "about";
    if (
      [
        "/services",
        "/search-engine",
        "/ppc-advertising",
        "/social-media",
        "/content-marketing",
        "/email-marketing",
        "/analytics-reporting",
      ].includes(location.pathname)
    ) return "services";
    if (location.pathname === "/blog") return "blog";
    if (location.pathname === "/contact") return "contact";
    return "";
  };

  const activeLink = getActiveLink();

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    setAvatarDropdownOpen(false);
    navigate("/login");
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev);
  };

  return (
    <header className="header">
      <nav className="logo">
        <Link to="/home">
          <img src="/Images/logo111.png" alt="Logo" />
        </Link>
      </nav>

      <button
        className={`hamburger ${mobileNavOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMobileNav}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleMainClick("home")}
          >
            {translations[language].home}
          </span>
          <span
            className={`arrow ${activeDropdown === "home" ? "open" : ""}`}
            onClick={() => toggleDropdown("home")}
          >
            ▼
          </span>
          {activeDropdown === "home" && (
            <div className="dropdown">
              <Link to="/home" onClick={handleLinkClick}>{translations[language].home}</Link>
              <Link to="/home2" onClick={handleLinkClick}>{translations[language].home} 2</Link>
            </div>
          )}
        </div>

        <Link
          to="/about"
          className={`nav-link ${activeLink === "about" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].about}
        </Link>

        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleMainClick("services")}
          >
            {translations[language].services}
          </span>
          <span
            className={`arrow ${activeDropdown === "services" ? "open" : ""}`}
            onClick={() => toggleDropdown("services")}
          >
            ▼
          </span>
          {activeDropdown === "services" && (
            <div className="dropdown">
              <Link to="/search-engine" onClick={handleLinkClick}>{translations[language].searchEngine}</Link>
              <Link to="/ppc-advertising" onClick={handleLinkClick}>{translations[language].ppc}</Link>
              <Link to="/social-media" onClick={handleLinkClick}>{translations[language].social}</Link>
              <Link to="/content-marketing" onClick={handleLinkClick}>{translations[language].content}</Link>
              <Link to="/email-marketing" onClick={handleLinkClick}>{translations[language].email}</Link>
              <Link to="/analytics-reporting" onClick={handleLinkClick}>{translations[language].analytics}</Link>
            </div>
          )}
        </div>

        <Link
          to="/blog"
          className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].blog}
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].contact}
        </Link>
      </nav>

      <div className="rightSection">
        {/* Language Dropdown - left of theme toggle */}
        <div className="language-dropdown">
          <button className="lang-btn">
            {language === "en" ? "English" : language === "ar" ? "العربية" : "עברית"} ▼
          </button>
          <div className="lang-menu">
            <button onClick={() => setLanguage("en")}>English</button>
            <button onClick={() => setLanguage("ar")}>العربية</button>
            <button onClick={() => setLanguage("he")}>עברית</button>
          </div>
        </div>

        <button className="themeToggle" onClick={toggleTheme}>
          {isDark ? "🌙" : "🌞"}
        </button>

        <div className="avatarContainer" ref={avatarRef} style={{ position: "relative" }}>
          <div
            className="avatarCircle"
            title="Your initials"
            onClick={toggleAvatarDropdown}
            style={{ cursor: "pointer" }}
          >
            {initials || "AD"}
          </div>

          {avatarDropdownOpen && (
            <div
              className="avatarDropdown"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 1000,
                minWidth: "120px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {translations[language].logout}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Language dropdown styles */}
      <style>{`
        .language-dropdown {
          display: inline-block;
          position: relative;
          margin-right: 18px;
          vertical-align: middle;
        }
        .lang-btn {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 15px;
        }
        .lang-menu {
          display: none;
          position: absolute;
          left: 0;
          top: 100%;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          z-index: 1001;
          min-width: 120px;
        }
        .language-dropdown:hover .lang-menu {
          display: block;
        }
        .lang-menu button {
          width: 100%;
          padding: 8px 16px;
          border: none;
          background: none;
          text-align: left;
          cursor: pointer;
          font-size: 15px;
        }
        .lang-menu button:hover {
          background: #f0f4fa;
        }
      `}</style>
    </header>
  );
};

export default Header;