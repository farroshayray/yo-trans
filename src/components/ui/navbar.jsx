import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='d-flex justify-content-between align-items-center'>
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
          <Nav className="justify-content-center mx-auto">
            <div className=" d-flex flex-column flex-lg-row">
                <Nav.Link href="/" className='nav-link-hover'>Home</Nav.Link>
                <Nav.Link href="#link" className='nav-link-hover'>About</Nav.Link>
                <Nav.Link href="#link" className='nav-link-hover'>Agent</Nav.Link>
                <NavDropdown title="Contact Us" id="basic-nav-dropdown" className='nav-link-hover'>
                    <NavDropdown.Item 
                    href="https://wa.me/6285158444204?text=Halo%20yo-trans!%20ada%20yang%20ingin%20saya%20tanyakan"
                    target="_blank"
                    className='nav-link-hover'
                    >
                        <i className="bi bi-whatsapp me-2"></i>
                        Whatsapp
                        </NavDropdown.Item>
                    <NavDropdown.Item 
                        href="https://telegram.me/share/url?url=https://yo-trans.com&text=Halo%20yo-trans!%20ada%20yang%20ingin%20saya%20tanyakan" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='nav-link-hover'
                        >
                        <i className="fa-brands fa-telegram me-2"></i>
                        Telegram
                        </NavDropdown.Item>
                    <NavDropdown.Item 
                        href="mailto:yo-trans@gmail.com?subject=Halo%20yo-trans!&body=Ada%20yang%20ingin%20saya%20tanyakan" 
                        target="_blank"
                        className='nav-link-hover'
                        >
                        <i className="fa-solid fa-envelope me-2"></i>
                        Email
                        </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" className='nav-link-hover'>FAQ</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/login" className='block d-lg-none'>Login</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="/login" className='login-button1 d-none d-lg-block'>Login</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Navbar1;