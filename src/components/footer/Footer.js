import React, { Component } from "react";

import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <div className="footer-section">
        &copy; 2020 - Created with{" "}
        <span role="img" aria-labelledby="emoji">
          💙
        </span>{" "}
        by Shaurya Singhal
      </div>
    );
  }
}

export default Footer;
