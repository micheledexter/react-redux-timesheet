import React, { Component } from 'react';
import Hello from './hello/Hello';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello friend="WoooHooo!" />
      </div>
    );
  }
}

export default App;
