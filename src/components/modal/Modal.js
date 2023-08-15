import React, { useState, useEffect } from "react";
import "./Modal.css";
import { Fade } from "react-reveal";

const Modal = ({ showModal, onModalDismiss }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  const dismissModal = (e) => {
    if (!e || e.target === e.currentTarget) {
      setShow(false);
      setTimeout(() => {
        onModalDismiss();
      }, 1000); // This matches the duration of the Fade effect
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    dismissModal();
  }

  return (
    <Fade duration={1000} when={show}>
      <div className="modal-container" onClick={dismissModal}>
        <div className="modal-form">
          <input 
            className="modal-input" 
            type="text" 
            value={name} 
            placeholder="Full Name" 
            onChange={(e) => onNameChange(e)}
          />
          <div className="modal-input-btn-container">
            <input 
              className="modal-input-btn" 
              type="button"
              value="Submit"  // This should probably be the value rather than a placeholder
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Modal;
