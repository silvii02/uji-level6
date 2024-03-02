import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import logoImage from"../assets/img/logo.png"


function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isScrolled ? 'scrolled' : ''}`}>
      <Navbar bg="light" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logoImage}   // Ganti dengan URL logo Anda
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="logo-img"
            />
            {'Kedai Katresna'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
            <Nav style={{ margin: '0 auto', textAlign: 'center' }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#AboutPage">About</Nav.Link>
              <Nav.Link href="MenuPage">Menu</Nav.Link>
              <Nav.Link href="#ContactPage">Contact</Nav.Link>
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>

  
    </div>
  );
}

export default NavbarComponent;
