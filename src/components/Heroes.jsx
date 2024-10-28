import React from 'react';
import './heroes.css';

const Heroes = ({ title, subtitle, imageUrl, linkUrl }) => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <video className="heroes-video" autoPlay loop muted playsInline>
        <source src="/freepizza.mp4" type="video/mp4" />
      </video>
      <div className="text-on-media">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <a href={linkUrl} className="heroes-button">Employees</a>
      </div>
    </div>
  );
};

export default Heroes;
