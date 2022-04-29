import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function Quote() {
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="qoute-text">
          <p>
            “jQuery is by far the most widely used library for JavaScript.
            It is used on more than 50% of websites. Many frameworks, such as
            Backbone and Twitter’s Bootstrap, are built on top of jQuery.
            Being able to extend and write plugins for jQuery can not only save lots of time,
            but also makes code much cleaner and easier to maintain.”
            ― Robert Duchnik
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quote;
