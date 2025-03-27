// client/src/components/Logo/Logo.js
import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-text">
        <span style={{ color: '#6E45E2' }}>L</span>
        <span style={{ color: '#000000' }}>U</span>
        <span style={{ color: '#FF7E5F' }}>M</span>
        <span style={{ color: '#000000' }}>I</span>
        <span style={{ color: '#D2691E' }}>N</span>
        <span style={{ color: '#000000' }}>A</span>
      </div>
      <div className="logo-tagline">
      <span className="tagline-black">Bright minds learning</span>
      <span className="tagline-blue"> together</span>
      </div>
    </div>
  );
};

export default Logo;