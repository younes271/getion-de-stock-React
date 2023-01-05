import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CreateFournisseur from '../Modals/CreateFournisseur';

const Navbarp = ({addFournisseur}) => {
  const [modal,setModal]=useState(false);
  const toggle = ()=>{setModal(!modal)}
  const add = (obj)=>{addFournisseur(obj);} 


  console.log("ana f navbar : ", modal);
  

    return (
     <>
      <Navbar key='false' bg="light" expand='false' className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Getion de Stock</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-false`}
          aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
            Getion de Stock
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Accueil</Nav.Link>
              <Nav.Link href="#action2">fournisseur</Nav.Link>
              <NavDropdown
                title="Fournisseur"
                id={`offcanvasNavbarDropdown-expand-false`}
              >
                <NavDropdown.Item onClick={()=>{setModal(true)}}>
                  Ajouter
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    <CreateFournisseur modal={modal} toggle={toggle} addFournisseur={add} />
    
  
        </>
    );
};

export default Navbarp;