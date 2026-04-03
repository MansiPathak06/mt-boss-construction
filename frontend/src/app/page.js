import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';
import Services from './components/Services';
import QuickServices from './components/QuickServices';
import TestimonialsPage from './Testimonials/page';
import TestimonialsSection from './components/Testimonal';
import Footer from './components/Footer';

const page = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <Services/>
      <QuickServices/>
      <TestimonialsSection/>
      <Footer/>
      
    </div>
  );
}

export default page;
