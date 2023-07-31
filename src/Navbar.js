import React, { Component } from "react";
import Select from "@mui/material/Select";
import { Snackbar } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(event) {
    this.setState({
      format: event.target.value,
      open:true,
    });
    // this is the function that is passed down
    this.props.handleChange(event.target.value);
  }
  closeSnackbar() {
    this.setState({
      open: false,
    });
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
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rbg(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <ClearIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default Navbar;
