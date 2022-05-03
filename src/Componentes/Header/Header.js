import React from "react";
import { Container, Navbar } from "react-bootstrap";
import './Header.css'
// {}
const Header = () => {
  return (
    <div className='header'>
        <Navbar expand="lg" variant="dark" >
        <Container>
            <Navbar.Brand>Login</Navbar.Brand>
        </Container>
        </Navbar>
    </div>
  );
};

export default Header;
