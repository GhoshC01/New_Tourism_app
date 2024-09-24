import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; // Import custom CSS file for header styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="fixed-top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/"> <FontAwesomeIcon icon={faHome} /> Home </Link>
          <Link className="nav-link" to="/about"> <FontAwesomeIcon icon={faInfoCircle} /> About </Link>
          <Link className="nav-link" to="/blogs">Blog </Link>
          <Link className="nav-link" to="/register"> <FontAwesomeIcon icon={faUserPlus} /> Register </Link>
          <Link className="nav-link" to="/login"> <FontAwesomeIcon icon={faSignInAlt} /> Login </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
