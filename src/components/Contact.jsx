import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import cvPdf from "../assets/CV/cv.pdf";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <Container id="contact" className="text-center mt-5">
      <h5 className="text-primary">Contact Me</h5>
      <p className="contact-description text-muted">
        Feel free to reach out to me using any of the following methods:
      </p>
      <div className="contact-info">
        <p>Email: <a className="text-danger" href="mailto:saadsiddiqui@gmail.com">saadsiddiqui@gmail.com</a></p>
        <p>LinkedIn: <a className="text-info" href="https://www.linkedin.com/in/saad-siddiqui-engineer/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>GitHub: <a className="text-dark" href="https://github.com/Saad-054/" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        <p>CV: <a className="text-success" href={cvPdf} target="_blank" rel="noopener noreferrer">Download CV (PDF)</a></p>
      </div>
      <div className="contact-form mt-5">
        <h6 className="text-primary">Send me a message:</h6>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control as="textarea" rows={4} placeholder="Your Message" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;
