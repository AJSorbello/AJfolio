import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollUtils';
import './Hero.css';

const Hero = () => {
  const handleScrollToProjects = () => {
    scrollToSection('projects');
  };
  
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="home-hero__name">AJ Sorbello</h1>
        <p className="home-hero__description">
          Full-Stack Web Developer specializing in React, Node.js, and modern JavaScript frameworks. 
          Building seamless user experiences with clean, efficient code.
        </p>
        <div className="home-hero__cta">
          <button onClick={handleScrollToProjects} className="btn btn--outline">View Projects</button>
          <a href="/assets/AJ_Sorbello_Resume_4_2_25.pdf" className="btn btn--outline" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
      
      <div className="scroll-down">
        <p className="scroll-down__text">Scroll Down</p>
        <div className="scroll-down__icon">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
