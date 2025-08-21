import React from 'react';
import { FaVrCardboard, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaVrCardboard />,
      img: "/images/vr-ar-classroom.png",
      title: "VR/AR Classrooms",
      desc: "Immersive learning with simulated teacher presence"
    },
    {
      icon: <FaChalkboardTeacher />,
      img: "/images/holographic-lecture.png",
      title: "Holographic Lectures",
      desc: "Real-time interaction with remote instructors"
    },
    {
      icon: <FaBookOpen />,
      img: "/images/smart-library.png",
      title: "Smart Library",
      desc: "Blended digital and physical learning resources"
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Our Learning Ecosystem</h2>
        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <img 
                src={feature.img} 
                alt={feature.title} 
                className="feature-image"
                loading="lazy"
              />
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <div className="hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
