import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "../../../styles/ModalForm.css"

// eslint-disable-next-line react/prop-types
const ModalForm = ({ showModal, onClose }) => {
  
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    contactNumber: '',
    projectDescription: '',
  });

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log(formData);
    onClose();
  };

  return (
    <Modal  show={showModal} onHide={onClose}>
      <Modal.Header className='modal-header' closeButton>
        <Modal.Title>What project are you looking for?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
             
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formProjectDescription">
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button className='rq-btn' type="submit">
            Send Request
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;