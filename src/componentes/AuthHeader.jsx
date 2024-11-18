import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faUserPlus, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import './AuthHeader.css'; // Import custom CSS for additional styles

const AuthHeader = ({ logout }) => {
    const user = useSelector(state => state.auth.user);
    
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="fixed-top shadow">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link"> <FontAwesomeIcon icon={faHome} /> Home </Link>
                    <Link to="/about" className="nav-link"> <FontAwesomeIcon icon={faInfoCircle} /> About </Link>
                    <Link to="/tour" className="nav-link"> Tour & Travel </Link>
                    <Link to="/blogs" className="nav-link"> Blogging </Link>
                    {/* <Link to="/register" className="nav-link"> <FontAwesomeIcon icon={faUserPlus} /> Blogs </Link> */}
                    <Link to="/dashboard" className="nav-link"> <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard </Link>
                </Nav>
                <Nav>
                {user && <Link to="/tour" className="nav-link">{`${user.firstName} ${user.lastName}`}</Link>}
                    <Button variant="outline-light" onClick={logout} className="ml-2">Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AuthHeader;
