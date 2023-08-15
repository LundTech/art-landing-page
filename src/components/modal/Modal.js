import React, { useState, useEffect } from "react";
import "./Modal.css";
import { Fade } from "react-reveal";

const Modal = ({ showModal, onModalDismiss }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  const dismissModal = () => {
    setShow(false);
    setTimeout(() => {
      onModalDismiss();
    }, 1000); // 2000ms matches the duration of the Fade effect
  };

  return (
    <Fade duration={1000} when={show}>
      <div className="modal-container" onClick={dismissModal}>
        <div className="modal-form">
          <span>Hejhej!</span>
        </div>
      </div>
    </Fade>
  );
};

export default Modal;
