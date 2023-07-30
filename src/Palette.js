import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar"

// order of styles is important here because they might override eachother
import "./Palette.css";



class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLevel) {
    console.log(newLevel);
    this.setState({
      level: newLevel,
    });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = this.props.palette.colors[level].map(
      (color) => <ColorBox background={color.hex} name={color.name} />
    );
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel}/>
        {/* navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Palette;
