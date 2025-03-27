import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lumina transformed our business operations completely!",
      author: "Sarah Johnson, CEO of TechCorp"
    },
    {
      quote: "The best decision we made was partnering with Lumina.",
      author: "Michael Chen, Director of Ops"
    }
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;