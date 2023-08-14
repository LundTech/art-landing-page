import React, { Component } from "react";
import BackgroundImage from "../../components/backgroundImage/BackgroundImage";

class Home extends Component {
  render() {
    const backgroundImage = require(`../../assets/images/home/pawel-czerwinski-yn97LNy0bao-unsplash.webp`)
    return (
      <div>
        <BackgroundImage
            src={backgroundImage}
        />
      </div>
    );
  }
}

export default Home;
