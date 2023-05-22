import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from './Components/AnimatedRoutes';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

function App() {

  useEffect(() => {
    document.title = "Andaiye Wurm Portfolio"
  }, []);

  return (
    <div className="App">
      <Router>
        <div className='navHere'>
        <Navigation/>
        </div>
        {/* <AnimatedRoutes /> */}
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
