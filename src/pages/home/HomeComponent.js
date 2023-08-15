import React, { useState } from "react";
import BackgroundImage from "../../components/backgroundImage/BackgroundImage";
import Modal from "../../components/modal/Modal.js";
import { Fade } from "react-reveal";

const Home = () => {
  // Use useState to control the visibility of Modal
  const [showModal, setShowModal] = useState(false);

  const backgroundImage = require(`../../assets/images/home/pawel-czerwinski-yn97LNy0bao-unsplash.webp`);

  // Toggle the showModal state value on button press
  const onRSVPButtonPress = () => {
    setShowModal(!showModal);  // Toggle the modal visibility
  };

  const onModalDismiss = () => {
    setShowModal(!showModal);  // Toggle the modal visibility
  };

  return (
    <div>
      {/* Conditionally render the Modal based on the state value */}
      {showModal && <Modal showModal={showModal} onModalDismiss={onModalDismiss}/> }
      <BackgroundImage src={backgroundImage} onRSVPButtonPress={onRSVPButtonPress} />
    </div>
  );
}

export default Home;