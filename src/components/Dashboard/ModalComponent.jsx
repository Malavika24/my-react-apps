import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ModalComponent({show, onHide, ModalDataDetails}) {

    const getModalData = (displayTeamDetails) => {
        let teamenteries= Object.entries(displayTeamDetails).map(([key, val]) => 
            <div key={key}>{key}: {val}</div>
        )
      return teamenteries;
    }

  return (
    <div>
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        >
          <Modal.Header closeButton>
          <Modal.Title>Team Details</Modal.Title>
          </Modal.Header>
          <Modal.Body closeButton>
          {getModalData(ModalDataDetails)}
          </Modal.Body>
        </Modal>
    </div>
  )
}
