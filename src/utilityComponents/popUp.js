import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

export const PopupExample = ({popupshow, isShow, value}) => {

    const handleClose = () =>{ value("text"); popupshow(false)};
    // setShow(true);

    
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Open Pop-up
        </Button> */}
  
        <Modal show={isShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pop-up Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Pop-up content goes here...</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* Add additional buttons or functionality as needed */}
          </Modal.Footer>
        </Modal>
        
      </>
    );
  }
