import React from "react";
import { Modal as BootstrapModal, Button, Form } from "react-bootstrap";

const WelcomeModal = ({ show, handleClose, handleSubmit }) => {
  return (
    <BootstrapModal show={show} onHide={handleClose} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>
          Please Fill this Form to Get Quotation
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>
          <BootstrapModal.Footer>
            <Button
              type="button"
              variant="secondary"
              onClick={handleClose}
              style={{ backgroundColor: "tomato", border: "none" }}
            >
              Close
            </Button>
            <Button
              type="submit"
              style={{ backgroundColor: "green", border: "none" }}
            >
              Submit
            </Button>
          </BootstrapModal.Footer>
        </Form>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default WelcomeModal;
