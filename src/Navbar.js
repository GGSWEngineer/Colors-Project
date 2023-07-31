import React, { Component } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format:"hex",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            format: event.target.value,
        })
        // this is the function that is passed down
        this.props.handleChange(event.target.value);
    }
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
            <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onChange={changeLevel}
              step={100}
            />
          </div>
        </div>
        <div className="select-container">
            <Select value={format} onChange={this.handleChange}>
                <MenuItem value="hex">HEX - #ffffff</MenuItem>
                <MenuItem value="rgb">RGB - rbg(255,255,255)</MenuItem>
                <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
