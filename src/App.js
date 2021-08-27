import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [navSelected, setNavSelected] = useState('#about-me');


  return (
    <div>
      <Nav setNavSelected={setNavSelected} />
      <main>
        {(
          () => {
            switch(navSelected) {
              case 'projects' === navSelected:
                return (<Portfolio />);
              case 'contact-me' === navSelected:
                return(<Contact />);
              case 'resume' === navSelected:
                return(<Resume />);
              case 'about-me' === navSelected:
                return(<About />)
              default:
                return(<About />)
            }
          }
        )()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
