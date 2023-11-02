import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AlertModal = ({ show, handleCancel, handleDelete }) => {
  return (
    <Modal show={show} onHide={handleCancel}>
      <Modal.Header>
        <Modal.Title>Delete Sector</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Are you sure?</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleCancel()}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
