import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <img
            src="/navbarlogo.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Agent</Nav.Link>
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item 
              href="https://wa.me/6285158444204?text=Halo%20yo-trans!%20ada%20yang%20ingin%20saya%20tanyakan"
              target="_blank"
              >
                <i className="bi bi-whatsapp me-2"></i>
                Whatsapp
                </NavDropdown.Item>
              <NavDropdown.Item 
                href="https://telegram.me/share/url?url=https://yo-trans.com&text=Halo%20yo-trans!%20ada%20yang%20ingin%20saya%20tanyakan" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <i className="fa-brands fa-telegram me-2"></i>
                Telegram
                </NavDropdown.Item>
            <NavDropdown.Item 
                href="mailto:yo-trans@gmail.com?subject=Halo%20yo-trans!&body=Ada%20yang%20ingin%20saya%20tanyakan" 
                target="_blank"
                >
                <i className="fa-solid fa-envelope me-2"></i>
                Email
                </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;