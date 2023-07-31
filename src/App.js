import React, { Component } from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom"
import Pallete from "./Palette"
import seedColors from "./seedColors"
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]))
    return (
      <Routes>
        <Route path="/" element={<h1>Pallete list goes here</h1>}/>
      <Route path="/palette/:id" element={<h1>Pallete list goes here!!!!!!!!!!</h1>}/></Routes>
      
      // <div className="App">
      //     <Pallete palette={generatePalette(seedColors[4])}/>
      // </div>
    );
  }
 
}

export default App;
