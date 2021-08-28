import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {


  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Portfolio} />
          <Route path='/resume' component={Resume} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
