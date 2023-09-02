
import { Navbar,Container,Nav, } from "react-bootstrap"
import { useState } from "react";
import ModalForm from "./ReactRouter/pages/ModalForm";


function Header() {
    const [showModal, setShowModal] = useState(false);
  
    const handleHireMeClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
 
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="text-white p-3 ">
      <Container>
        <Navbar.Brand href="/" className="myName navbar-dark">Nahas Nissar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav navbar-dark">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <button onClick={handleHireMeClick} className="btn btn-m ">Hire Me</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ModalForm showModal={showModal} onClose={handleCloseModal} />

    </div>
  )
}

export default Header;