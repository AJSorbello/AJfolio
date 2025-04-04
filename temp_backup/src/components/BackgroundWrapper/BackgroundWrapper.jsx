import React from 'react';
import backgroundImage from '../../assets/images/107141768_l.jpg';
import './BackgroundWrapper.css';

const BackgroundWrapper = ({ children }) => {
  return (
    <div 
      className="background-wrapper"
      style={{
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
