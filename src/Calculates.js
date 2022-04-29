import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function Calculates() {
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="calc">
          <Calculator />
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Calculates;
