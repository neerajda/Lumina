import React from 'react';
import { BookOpen, Brain, Globe, CalendarCheck, Crown, Users } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="intro-text">
        At Lumina Academy, we combine smart spaces with cutting-edge technology to
        transform online learning into a collaborative, productive experience.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <BookOpen className="service-icon" />
          <h2>Smart Study Spaces</h2>
          <p>
            IoT-enabled study desks with ergonomic setups, smart lighting, and distraction-free zones.
          </p>
        </div>

        <div className="service-card">
          <Brain className="service-icon" />
          <h2>AI-Powered Assistance</h2>
          <p>
            24/7 AI tutors, personalized mentoring, and guided study plans to keep your learning on track.
          </p>
        </div>

        <div className="service-card">
          <Globe className="service-icon" />
          <h2>Course Partnerships</h2>
          <p>
            Access top online courses (IIT-M BS, NPTEL, Coursera, edX) with added offline mentoring support.
          </p>
        </div>

        <div className="service-card">
          <CalendarCheck className="service-icon" />
          <h2>Workshops & Events</h2>
          <p>
            Regular workshops, skill-building events, and networking sessions to boost your career growth.
          </p>
        </div>

        <div className="service-card">
          <Crown className="service-icon" />
          <h2>Premium Memberships</h2>
          <p>
            Flexible plans (daily, monthly, yearly) with premium add-ons like VR/AR tools and exam proctoring.
          </p>
        </div>

        <div className="service-card">
          <Users className="service-icon" />
          <h2>Mentorship & Career Guidance</h2>
          <p>
            One-on-one career counseling, internship connections, and personalized roadmaps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
