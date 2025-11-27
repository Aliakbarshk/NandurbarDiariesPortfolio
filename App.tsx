import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import ReelsShowcase from './components/ReelsShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ReelsShowcase />
      <Footer />
    </div>
  );
}

export default App;