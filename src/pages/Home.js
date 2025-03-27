import React from 'react';
import './Home.css'
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Testimonials from '../sections/Testimonials';
import ValueProposition from '../sections/ValueProposition';

import TechnologyShowcase from '../sections/TechnologyShowcase/TechnologyShowcase';
const Home = () => {
  return (
    <div className="home-page">
       <Hero />
      <Features />
      <Testimonials />
      <TechnologyShowcase /> 
      {/*   <ValueProposition /> */}
    </div>
  );
};

export default Home;