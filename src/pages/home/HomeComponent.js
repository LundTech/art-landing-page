import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import WorkTogether from "../../containers/workTogether/WorkTogether";
import About from "../../containers/about/About";
import Services from "../../containers/services/Services";
import Contact from "../../containers/contact/Contact";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import FullWidthImage from "../../components/fullWidthImage/FullWidthImage";
import BackgroundImage from "../../components/backgroundImage/BackgroundImage";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Header
          theme={this.props.theme}
          backgroundColor={this.props.theme.primaryBackgroundColor}
        /> */}
        <BackgroundImage
            src={require(`../../assests/images/home/pawel-czerwinski-yn97LNy0bao-unsplash.webp`)}
        />
        {/* <FullWidthImage src={require(`../../assests/images/copper-pipe-residential-plumbing-slider.jpg.webp`)} alt={'copper-pipes'} /> */}
        {/* <Services
          theme={this.props.theme}
          backgroundColor={this.props.theme.primaryBackgroundColor}
        /> */}

        {/* <About theme={this.props.theme} /> */}
        {/* <FullWidthImage src={require(`../../assests/images/copper-pipe-residential-plumbing-slider.jpg.webp`)} alt={'copper-pipes'} /> */}
        {/* <Work theme={this.props.theme} /> */}
        {/* <Skills theme={this.props.theme} /> */}
        {/* <Contact theme={this.props.theme} /> */}
        {/* <Footer theme={this.props.theme} 
          backgroundColor={this.props.theme.secondaryBackgroundColor} 
          textColor={this.props.theme.secondaryTextColor}
        /> */}
        {/* <TopButton theme={this.props.theme} /> */}
      </div>
    );
  }
}

export default Home;
