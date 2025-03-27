import React from 'react';
import { FiGlobe, FiUsers, FiAward, FiBook } from 'react-icons/fi';
import './ValueProposition.css';

const ValueProposition = () => {
  const stats = [
    { icon: <FiGlobe />, value: "Hybrid", label: "Learning Model" },
    { icon: <FiUsers />, value: "100+", label: "Study Pods" },
    { icon: <FiAward />, value: "20+", label: "Certified Partners" },
    { icon: <FiBook />, value: "Unlimited", label: "Resources" }
  ];

  return (
    <section className="value-prop">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ValueProposition