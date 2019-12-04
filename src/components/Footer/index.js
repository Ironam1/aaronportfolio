import React, { Component } from "react";
import "./style.css";
import { AiOutlineCopyright } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="copy">
          <AiOutlineCopyright /> 
        </div>
        Aaron MacInnis
      </div>
    );
  }
}

export default Footer;
