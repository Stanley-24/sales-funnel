import React from 'react';
import './Hero.css';

const Hero = ({ onEnrollClick }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Helping 10 Business Owners Automate With AI
        </h1>
        <p className="hero-subtext">
          Get a free AI-powered interview that audits your daily tasks and shows exactly what you can automate.
        </p>
        <button className="hero-button" onClick={onEnrollClick}>
          🚀 Claim Your Free Interview
        </button>
      </div>
    </section>
  );
};

export default Hero;
