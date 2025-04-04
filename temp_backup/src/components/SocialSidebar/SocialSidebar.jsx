import React, { useState, useEffect } from 'react';
import './SocialSidebar.css';

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the hero section to know when to hide the sidebar
      const heroSection = document.querySelector('.home-hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        
        // Check if we're scrolled past the hero section
        if (window.scrollY > heroHeight - 100) {
          setIsPastHero(true);
          if (!isCollapsed) {
            setIsCollapsed(true);
          }
        } else {
          setIsPastHero(false);
          setIsCollapsed(false);
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCollapsed]);

  const toggleSidebar = () => {
    if (isPastHero) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div 
      className={`social-sidebar ${isPastHero ? 'past-hero' : ''} ${isCollapsed ? 'collapsed' : 'expanded'}`}
      onClick={toggleSidebar}
    >
      <div className="toggle-indicator"></div>
      <div className="social-sidebar__links">
        <a href="https://github.com/AJSorbello" className="social-sidebar__link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ajsorbello/" className="social-sidebar__link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/ajsorbello" className="social-sidebar__link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://medium.com/@ajsorbello" className="social-sidebar__link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-medium"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCxxxxxxxx" className="social-sidebar__link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
