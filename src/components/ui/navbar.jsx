import { useState, useEffect } from 'react';
import { Ticket } from "lucide-react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router';

function Navbar1() {
  const router = useRouter();
  const [userFullname, setUserFullname] = useState(null);

  useEffect(() => {
    // Ambil fullname dari localStorage jika tersedia
    const storedFullname = localStorage.getItem("fullname");
    setUserFullname(storedFullname);
  }, []);

  const handleLogout = () => {
    localStorage.clear(); 
    setUserFullname(null); 
    router.push('/login'); 
  };

  const scrollToFooter = () => {
    router.push("/home").then(() => {
      setTimeout(() => {
        const footer = document.querySelector("#myFooter");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    });
  };

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
            <div className="d-flex flex-column flex-lg-row">
              <Nav.Link href="/" className='nav-link-hover'>Home</Nav.Link>
              <Nav.Link onClick={scrollToFooter} className='nav-link-hover'>About</Nav.Link>
              <Nav.Link href="#link" className='nav-link-hover'>Agent</Nav.Link>
              <NavDropdown title="Contact Us" id="basic-nav-dropdown" className='nav-link-hover'>
                <NavDropdown.Item 
                  href="https://wa.me/6285158444204?text=Halo%20yo-trans!%20ada%20yang%20ingin%20saya%20tanyakan"
                  target="_blank"
                  className='nav-link-hover'
                >
                  <i className="bi bi-whatsapp me-2"></i> Whatsapp
                </NavDropdown.Item>
                <NavDropdown.Item 
                  href="https://telegram.me/share/url?url=https://yo-trans.com&text=Halo%20yo-trans!%20ada%20yang%20ingin%20saya%20tanyakan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='nav-link-hover'
                >
                  <i className="fa-brands fa-telegram me-2"></i> Telegram
                </NavDropdown.Item>
                <NavDropdown.Item 
                  href="mailto:yo-trans@gmail.com?subject=Halo%20yo-trans!&body=Ada%20yang%20ingin%20saya%20tanyakan" 
                  target="_blank"
                  className='nav-link-hover'
                >
                  <i className="fa-solid fa-envelope me-2"></i> Email
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" className='nav-link-hover'>FAQ</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/transactionLists" className='nav-link-hover d-flex gap-1 lg:ml-9'><Ticket size={18} />My Tickets</Nav.Link>
              {/* Jika user login (fullname tersedia), tampilkan namanya */}
                <div className='flex lg:hidden'>
                  {userFullname ? (
                    <>
                      <Nav.Link className='nav-link-hover mr-5'>Hello, {userFullname}!</Nav.Link>
                      <Nav.Link onClick={handleLogout} className='logout-button1'>Logout</Nav.Link>
                    </>
                  ) : (
                    <Nav.Link href="/login" className='login-button1'>Login</Nav.Link>
                  )}
                </div>
            </div>
          </Nav>
        </Navbar.Collapse>
        {/* Jika user login (fullname tersedia), tampilkan namanya */}
        <div className='hidden lg:flex'>
        {userFullname ? (
          <>
            <Nav.Link className='nav-link-hover mr-5'>Hello, {userFullname}!</Nav.Link>
            <Nav.Link onClick={handleLogout} className='logout-button1'>Logout</Nav.Link>
          </>
        ) : (
          <Nav.Link href="/login" className='login-button1'>Login</Nav.Link>
        )}
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
