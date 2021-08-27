import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />

        <Portfolio />

        <Contact />

        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
