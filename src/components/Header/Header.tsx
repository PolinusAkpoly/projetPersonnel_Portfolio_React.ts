/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 02/08/2024 17:08:41
*/
import React, { FC, useEffect, useState } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


interface HeaderProps {

}


const Header: FC<HeaderProps> = () => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
//  console.log(`lastScrollTop`, lastScrollTop);


const handleScroll = () =>{
  const posScrollBar = window.pageYOffset || document.documentElement.scrollTop;
  setLastScrollTop(posScrollBar)
 

}
  useEffect(() => {
     
    const runLocalData = async () => {
      window.addEventListener('scroll', handleScroll)


      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    }
    runLocalData()
  },[lastScrollTop])

  


  return (
    <div className={ lastScrollTop && lastScrollTop > 0 ? "headerNouveau" : "Header" }>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"><strong>PORT<em>FOLIO</em></strong> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/">ACCEUIL</Nav.Link>
            <Nav.Link as={Link} to="/apropos">A PROPOS</Nav.Link>
            <Nav.Link as={Link} to="/services">MES SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/projets">MES PORTFOLIOS</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  );
}

export default Header;