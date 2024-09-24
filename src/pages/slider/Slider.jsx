import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slider3dImage from '../../assets/Slider1.jpg'; // Replace with the actual 3D image path
import './Slider.css';

const Slider = () => {

  return (
    <Container fluid className="slider-container vh-100">
      <Row className="h-100">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center bg-light text-center p-5"
        >
          <>
            <h1 className="mb-4 text-stylish animated-heading">
              <span className="chunk">Sign Up</span>
              <span className="chunk">for Your</span>
              <span className="chunk">Adventure &</span>
              <span className="chunk">Travel around</span>
              <span className="chunk">the World</span>
            </h1>
            <Link to="/login">
              <Button variant="success" className="px-4 py-2">
                Login
              </Button>
            </Link>
          </>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center p-0"
        >
          <img src={slider3dImage} alt="Tour 3D" className="img-fluid vh-100 w-100" style={{ objectFit: 'cover' }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Slider;
