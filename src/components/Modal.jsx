import React from "react";
import { Modal as BootstrapModal, Button, Form } from "react-bootstrap";

const Modal = ({ show, handleClose, productName }) => {
  return (
    <BootstrapModal show={show} onHide={handleClose} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>
          Please Fill this Form to Get Quotation
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProduct">
            <Form.Control type="text" value={productName} readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>
        </Form>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        {/* Close Button - Tomato */}
        <Button
          onClick={handleClose}
          style={{ backgroundColor: "red", border: "none" }}
        >
          Close
        </Button>

        {/* Send Button - Black */}
        <Button
          onClick={handleClose}
          style={{ backgroundColor: "green", border: "none" }}
        >
          Send
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
