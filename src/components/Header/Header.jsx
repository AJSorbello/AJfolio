import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollUtils';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    // Prevent body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'visible';
    };
  }, [scrolled, menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavLinkClick = (sectionId) => {
    closeMenu();
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={process.env.PUBLIC_URL + "/assets/png/Bello_Photo.png"}
              alt="AJ Sorbello Profile"
              className="header__logo-img"
            />
          </div>
          <Link to="/" className="header__logo-container">
            <span className="header__logo-sub">AJ Sorbello</span>
          </Link>
        </div>
        <div className="header__main">
          {/* Social Icons in Header for Mobile - Only visible on very small screens now */}
          <div className="header__social-icons mobile-only-small">
            <a href="https://github.com/AJSorbello" className="header__social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ajsorbello/" className="header__social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/ajsorbello" className="header__social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          
          <ul className={`header__links ${menuOpen ? 'header__links--open' : ''}`}>
            <button className="header__close-button" onClick={closeMenu}>
              &times;
            </button>
            <li className="header__link-wrapper">
              <Link to="/" className="header__link" onClick={(e) => {
                e.preventDefault();
                closeMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (window.location.pathname !== '/') {
                  // If not on home page, navigate to home page after a small delay to allow smooth scroll
                  setTimeout(() => {
                    window.location.href = '/';
                  }, 100);
                }
              }}>
                Home
              </Link>
            </li>
            <li className="header__link-wrapper">
              <button 
                className="header__link"
                onClick={() => handleNavLinkClick('about')}
              >
                About
              </button>
            </li>
            <li className="header__link-wrapper">
              <button
                className="header__link"
                onClick={() => handleNavLinkClick('projects')}
              >
                Projects
              </button>
            </li>
            <li className="header__link-wrapper">
              <button
                className="header__link"
                onClick={() => handleNavLinkClick('contact')}
              >
                Contact
              </button>
            </li>
            
            {/* Extended Social Media Links in Mobile Menu */}
            <li className="header__social-wrapper mobile-only-small">
              <div className="header__social-title">Follow Me</div>
              <div className="header__social-links">
                <a href="https://github.com/AJSorbello" className="header__social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ajsorbello/" className="header__social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/ajsorbello" className="header__social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://medium.com/@ajsorbello" className="header__social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-medium"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCxxxxxxxx" className="header__social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </li>
          </ul>
          
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <div
              className={`header__main-ham-menu ${menuOpen ? 'header__main-ham-menu--open' : ''}`}
            >
              <span className="header__main-ham-menu-line"></span>
              <span className="header__main-ham-menu-line"></span>
              <span className="header__main-ham-menu-line"></span>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`header__overlay ${menuOpen ? 'header__overlay--open' : ''}`} 
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Header;
