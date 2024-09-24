import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../reduxStore/authSlice.js';
import './Register.css'; // Import the CSS file
import { toast } from 'react-toastify'; // Import ToastContainer here
import 'react-toastify/dist/ReactToastify.css';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import './ToastStyles.css';


const Register = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const registerSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(register({ firstName, lastName, email, password, confirmPassword, contact }));
      // Assuming the registration is handled synchronously
      toast.success("Register successfully");

      navigate('/login');
    } else {
      toast.error("Password and confirm password do not match");
    }
  };
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="register-card" style={{ marginTop: '70px' }}>
        <Card.Header className="text-center text-white" style={{ background: '#343a40' }}>
          <h4 className="my-4">Register</h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={registerSubmit}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter first name"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstName}
              />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter last name"
                onChange={(e) => setLastname(e.target.value)}
                value={lastName}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Confirm password"
                onChange={(e) => setConfirmpassword(e.target.value)}
                value={confirmPassword}
              />
            </Form.Group>

            <Form.Group controlId="formContact" className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter contact number"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
            </Form.Group>

            <Button variant="dark" className="w-100 py-2" type="submit">
              Register
            </Button>

            <Card.Text className="text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </Card.Text>

            <p className="text-center">or register with</p>
            <Row className="d-flex justify-content-center">
              <Col xs="auto">
                <Button variant="outline-primary" className="m-0">
                  <i className="fab fa-facebook-f" />
                </Button>
              </Col>
              <Col xs="auto">
                <Button variant="outline-info" className="m-0">
                  <i className="fab fa-twitter" />
                </Button>
              </Col>
              <Col xs="auto">
                <Button variant="outline-primary" className="m-0">
                  <i className="fab fa-linkedin-in" />
                </Button>
              </Col>
              <Col xs="auto">
                <Button variant="outline-dark" className="m-0">
                  <i className="fab fa-github" />
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      {/* Corrected Toast Container */}
      
    </Container>
  );
};

export default Register;
