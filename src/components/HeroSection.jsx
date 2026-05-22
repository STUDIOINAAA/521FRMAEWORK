import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="heading-display">감각을 구조로<br/>우연을 의도로</h1>
        <p className="text-lead hero-lead">
          Senses into structure, <span className="mobile-block">chance into intention</span>
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">View Reel</a>
          <a href="#contact" className="btn btn-outline">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
