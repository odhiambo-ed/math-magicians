import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="main">
          <div className="home-text">
            <h1>Welcome to our page!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium rerum rem odio possimus necessitatibus,
              eaque saepe dolor ad voluptatem repellat maiores pariatur
              impedit maxime reprehenderit repudiandae! Doloribus voluptates
              natus delectus? Laborum voluptates illo, ratione eius ad molestias
              fugit id qui praesentium saepe in mollitia totam est! Harum odit inventore omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium rerum rem odio possimus necessitatibus,
              eaque saepe dolor ad voluptatem repellat maiores pariatur
              impedit maxime reprehenderit repudiandae! Doloribus voluptates
              natus delectus? Laborum voluptates illo, ratione eius ad molestias
              fugit id qui praesentium saepe in mollitia totam est! Harum odit inventore omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium rerum rem odio possimus necessitatibus,
              eaque saepe dolor ad voluptatem repellat maiores pariatur
              impedit maxime reprehenderit repudiandae! Doloribus voluptates
              natus delectus? Laborum voluptates illo, ratione eius ad molestias
              fugit id qui praesentium saepe in mollitia totam est! Harum odit inventore omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium rerum rem odio possimus necessitatibus,
              eaque saepe dolor ad voluptatem repellat maiores pariatur
              impedit maxime reprehenderit repudiandae! Doloribus voluptates
              natus delectus? Laborum voluptates illo, ratione eius ad molestias
              fugit id qui praesentium saepe in mollitia totam est! Harum odit inventore omnis.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
