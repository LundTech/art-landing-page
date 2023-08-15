import React, { useState } from "react";
import BackgroundImage from "../../components/backgroundImage/BackgroundImage";
// import Credit from "../../components/credit/Credit";
import Modal from "../../components/modal/Modal.js";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const backgroundImage = require(`../../assets/images/home/pawel-czerwinski-yn97LNy0bao-unsplash-_1_.webp`);

  const onRSVPButtonPress = () => {
    setShowModal(!showModal);
  };

  const onModalDismiss = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {showModal && (
        <Modal showModal={showModal} onModalDismiss={onModalDismiss} />
      )}
      <BackgroundImage
        src={backgroundImage}
        onRSVPButtonPress={onRSVPButtonPress}
      />
    </div>
  );
};

export default Home;
