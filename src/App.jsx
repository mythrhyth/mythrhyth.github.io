import React from 'react';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Blogs />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
