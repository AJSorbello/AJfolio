import React from 'react';
import { scrollToSection } from '../../utils/scrollUtils';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const handleScrollTo = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };
  
  return (
    <footer className="main-footer">
      <div className="main-footer__content">
        <div className="main-footer__top">
          <div className="main-footer__logo-container">
            <div className="main-footer__logo-img">
              <img src={process.env.PUBLIC_URL + "/assets/png/Bello_Photo.png"} alt="AJ Sorbello" />
            </div>
            <h3 className="main-footer__name">AJ Sorbello</h3>
          </div>
          
          <div className="main-footer__social-links">
            <a href="https://github.com/AJSorbello" className="main-footer__social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ajsorbello/" className="main-footer__social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/ajsorbello" className="main-footer__social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://medium.com/@ajsorbello" className="main-footer__social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-medium"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCQmBAU6MYEQKtVgTEXe_MPw" className="main-footer__social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        
        <div className="main-footer__navigation">
          <div className="main-footer__nav-list">
            <button onClick={() => handleScrollTo('about')} className="btn btn--outline">About</button>
            <button onClick={() => handleScrollTo('projects')} className="btn btn--outline">Projects</button>
            <button onClick={() => handleScrollTo('contact')} className="btn btn--outline">Contact</button>
            <a href={process.env.PUBLIC_URL + "/assets/AJ_Sorbello_Resume_4_2_25.pdf"} className="btn btn--outline" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        
        <div className="main-footer__bottom">
          <div className="main-footer__copyright">
            &copy; {new Date().getFullYear()} AJ Sorbello. All rights reserved.
          </div>
          <div>
            <Link to="/" className="main-footer__copyright">
              Built with React
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
