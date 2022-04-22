import React from 'react';
import './App.css';

import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div
          style={{
            backgroundColor: 'black',
            width: '35%',
            margin: 'auto',
            marginTop: 100,
          }}
        >
          <Calculator />
        </div>
      </div>
    );
  }
}
export default App;
