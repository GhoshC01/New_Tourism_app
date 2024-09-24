import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify'; // Import ToastContainer here
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../reduxStore/authSlice';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch the login action
      await dispatch(login({ email, password }))
      toast.success("Login successfully");
      navigate('/tour'); // Redirect to the dashboard or desired route
    } catch (error) {
      toast.error("Password and confirm password do not match");
    }
  };

  return (
    <Container className="login-container">
      <Card className="login-card">
        <Card.Header className="text-center text-white login-header">
          <p className="h5 mt-2 py-4 font-weight-bold">Sign in</p>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={loginSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="input-field"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="input-field"
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="d-flex align-items-center">
              <Form.Check type="checkbox" className="me-3" />
              <Form.Label className="checkbox-label">Remember me</Form.Label>
            </Form.Group>

            <Button variant="link" className="forgot-password-link">
              Forgot Password?
            </Button>

            <Button variant="dark" className="btn-block login-btn" type="submit">
              Sign in
            </Button>

            <Card.Text>
              Don't have an account? <Link to="/register" className="register-link">Register</Link>
            </Card.Text>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
