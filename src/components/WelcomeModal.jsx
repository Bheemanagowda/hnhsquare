import React, { useState } from "react";
import Modal from "./Modal";

const WelcomeModal = () => {
  const [show, setShow] = useState(true); // Show the modal initially

  const handleClose = () => setShow(false);

  return <Modal show={show} handleClose={handleClose} />;
};

export default WelcomeModal;
