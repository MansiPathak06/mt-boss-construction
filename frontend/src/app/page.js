import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';
import Services from './components/Services';
import QuickServices from './components/QuickServices';

const page = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <Services/>
      <QuickServices/>
      
    </div>
  );
}

export default page;
