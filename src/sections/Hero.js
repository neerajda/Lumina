import { useState, useRef } from "react";
import "./Hero.css";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwTqi90QuBPoMNJ7DrfLJVFDnk3f_cQBGvJD4BRcSmKa6KQRiOmk_xZ-YYvtPC-5CCMkA/exec"; // Replace with your Google Apps Script URL
const Hero = () => {
  const particleContainerRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", location: "" });
  const [loading, setLoading] = useState(false);

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

      const colors = ["#6E45E2", "#88D3CE"];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      particleContainerRef.current.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
  };

const handleFormSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // or remove this if already allowing CORS in script
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert(`Thanks, ${formData.name}! We'll keep you updated.`);
    setShowForm(false);
    setFormData({ name: "", email: "", location: "" });
  } catch (error) {
    console.error(error);
    alert("Error submitting form. Please try again.");
  }
};


  return (
    <section className="hero tech-bg">
      <div ref={particleContainerRef} className="particle-container"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="gradient-text">Bright minds</span> learning together
          </h1>
          <p className="hero-subtitle">
            Hybrid learning space blending cutting-edge tech with collaborative environments
          </p>
          <div className="hero-cta">
            <button className="cta-primary" onClick={() => setShowForm(true)}>
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
          </video>
        </div>
      </div>

      {showForm && (
        <div className="interest-form-overlay">
          <div className="interest-form">
            <h2>Book a Tour</h2>
            <p>Share your details to know more about Lumina.</p>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Your Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
              <button type="submit" className="cta-primary" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
              <button type="button" className="cta-secondary" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
