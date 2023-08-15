import React, { Component } from "react";
import "./Credit.css";

class Credit extends Component {
  render() {
    return (
        <div className="credit-container">
            <span className="credit-text" >Photo by: 
                <a className="credit-text-link" href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Pawel Czerwinski @ Unsplash</a>
            </span>
        </div>
    );
  }
}

export default Credit;