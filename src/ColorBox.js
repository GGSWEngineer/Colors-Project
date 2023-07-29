import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    console.log("CHANGING COPY STATE");
    console.log(this.state.copied); // Log initial value of this.state.copied

    this.setState({ copied: true }, () => {
      setTimeout(() => {
        console.log(this.state.copied); // Log the updated value of this.state.copied
        this.setState({ copied: false });
      }, 1500);
    });
  }
  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className="ColorBox">
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied ? "show" : ""}`}
          />
          <div className={`copy-msg ${copied ? "show" : ""}`}>
            <h1>Copied!</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
