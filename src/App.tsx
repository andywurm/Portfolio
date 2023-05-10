import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from './Components/AnimatedRoutes';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {

  useEffect(() => {
    document.title = "Andaiye Wurm Portfolio"
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
