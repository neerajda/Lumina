import React from "react";
import "./About.css";

const About = () => {
  const sections = [
    {
      title: "Our Vision",
      description:
        "To become the global leader in hybrid education hubs that make online learning smarter, more interactive, and socially connected.",
    },
    {
      title: "Our Mission",
      description:
        "To help students and professionals 'Study Smarter, Together' by bridging the gap between online education and real-world collaboration.",
    },
    {
      title: "Our Offerings",
      description:
        "Immersive VR/AR classrooms, smart libraries, premium mentoring, labs, counseling, and partnerships with top platforms like IIT-M BS, NPTEL, Coursera, and more.",
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About Lumina</h1>
      <p className="about-intro">
        Lumina Academy is a next-generation hybrid study hub designed to
        revolutionize online learning by seamlessly blending physical spaces
        with advanced technology.
      </p>

      <div className="cards-container">
        {sections.map((section, index) => (
          <div className="about-card" key={index}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
