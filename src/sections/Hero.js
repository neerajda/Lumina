
import { useEffect, useRef } from "react";

import "./Hero.css";

const Hero = () => {
  const particleContainerRef = useRef(null);

  const createParticles = (e) => {
    if (!particleContainerRef.current) return;

    const button = e.currentTarget;
    const buttonRect = button.getBoundingClientRect();

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const x = buttonRect.left + buttonRect.width / 2;
      const y = buttonRect.top + buttonRect.height / 2;
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 70;

      particle.style.setProperty("--x", `${x}px`);
      particle.style.setProperty("--y", `${y}px`);
      particle.style.setProperty("--x-move", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--y-move", `${Math.sin(angle) * distance}px`);

      const colors = e.currentTarget.classList.contains("cta-primary")
        ? ["#6E45E2", "#88D3CE"]
        : ["#FF7E5F", "#D2691E"];

      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      particleContainerRef.current.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
  };
  

        
  return (
    <section className="hero tech-bg">
      <div ref={particleContainerRef} className="particle-container"></div>
      <div className="container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="gradient-text">Bright minds</span>
            <span> learning together</span>
          </h1>
          <p className="hero-subtitle">
            Hybrid learning space blending cutting-edge tech with collaborative environments
          </p>
          <div className="hero-cta">
            <button className="cta-primary" onClick={createParticles}>
              Book a Tour
            </button>
            <button className="cta-secondary" onClick={createParticles}>
              View Plans
            </button>
          </div>
          </div>
          <div className="hero-visual">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/classroom-demo.mp4" type="video/mp4" />
            <img src="/images/video-poster.png" alt="Lumina Academy Classroom" />
          </video>
          <div className="video-overlay"></div>
        </div>
        </div>
      
    </section>
  );
};

export default Hero;
