import React from 'react';
import './TechnologyShowcase.css';

const TechnologyShowcase = () => {
  return (
    <section className="tech-showcase">
      <div className="container">
        <h2 className="section-title">Powered By Innovation</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <h3>AI Tutors</h3>
            <p>24/7 personalized learning assistance</p>
          </div>
          <div className="tech-item">
            <h3>Smart Desks</h3>
            <p>IoT-enabled study stations</p>
          </div>
          <div className="tech-item">
            <h3>Gamification</h3>
            <p>Progress tracking & rewards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;