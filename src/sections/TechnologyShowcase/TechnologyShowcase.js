import React from 'react';
import './TechnologyShowcase.css';

const techData = [
  {
    title: 'AI Tutors',
    description: '24/7 personalized learning assistance',
    image: '/images/ai-tutors.png',
    alt: 'AI Tutors'
  },
  {
    title: 'Smart Desks',
    description: 'IoT-enabled study stations',
    image: '/images/smart-desks.png',
    alt: 'Smart Desks'
  },
  {
    title: 'Gamification',
    description: 'Progress tracking & rewards',
    image: '/images/gamification.png',
    alt: 'Gamification'
  }
];

const TechnologyShowcase = () => {
  return (
    <section className="tech-showcase">
      <div className="container">
        <h2 className="section-title">Powered By Innovation</h2>
        <div className="tech-grid">
          {techData.map((tech, index) => (
            <div key={index} className="tech-item">
              <img
                src={tech.image}
                alt={tech.alt}
                className="tech-image"
                loading="lazy"
              />
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
