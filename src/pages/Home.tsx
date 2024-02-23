// Home.tsx
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ClientLogos from '../components/ClientLogos';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ClientLogos />
      <Services />
      <TestimonialsCarousel />
      <Blog />
      <Footer /> 
    </>
  );
};

export default Home;
