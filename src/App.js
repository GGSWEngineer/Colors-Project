import React, { Component } from 'react'
import './App.css';
import Pallete from "./Palette"
import seedColors from "./seedColors"
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]))
    return (
      <div className="App">
          <Pallete {...seedColors[4]}/>
      </div>
    );
  }
 
}

export default App;
