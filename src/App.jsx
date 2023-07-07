import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LinkShortner from './components/LinkShortner';
import Footer from './components/Footer';
import Boost from './components/Boost';
import Statistics from './components/Statistics';

function App() {
  return (
    <>
      <div className="main">
        <Navbar/>
        <Hero/>
        <LinkShortner />
        <Statistics/>
        <Boost/>
        <Footer/>
      </div>
    </>
  )
}

export default App
