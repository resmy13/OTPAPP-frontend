import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const EmailForm = () => {
  // State for email and text input
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email and text data to backend to send OTP and save to database
      const response = await axios.post('/sendDataAndOTP', {
        email: email,
        text: text
      });

      if (response.status === 200) {
        console.log('Data and OTP sent successfully');
        // Handle successful response, such as showing a success message
      }
    } catch (error) {
      console.error('Error sending data and OTP:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            <br/>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailForm;
