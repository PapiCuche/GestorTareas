import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { AuthLogin } from '../api/auth.api';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await AuthLogin({ email, password });
      console.log('Login successful:', data);
      // Guarda el token y redirige a la página principal
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col md={4} className="mx-auto">
          <Card className="p-4 shadow">
            <Card.Body>
              <div className="text-center mb-4">
                <img src="/path/to/user-icon.png" alt="User Icon" style={{ width: '50px' }} />
              </div>
              <h3 className="text-center mb-4">Login</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" label="Remember me" />
                  <a href="#" className="small">Forgot Password?</a>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Login
                </Button>
                {error && <div className="mt-3 text-danger">{error}</div>}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
