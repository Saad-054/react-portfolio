import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import cvPdf from "../assets/CV/cv.pdf"; // Import the images

function Contact() {
  return (
    <section id="contact" className="text-center">
      <h5>Contact Me</h5>
      <p className="contact-description">Feel free to reach out to me using any of the following methods:</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:saadsiddiqui@gmail.com">saadsiddiqui@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/saad-siddiqui-engineer/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/Saad-054/" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        <p>CV: <a href={cvPdf} target="_blank" rel="noopener noreferrer">Download CV (PDF)</a></p>
      </div>
      <div className="contact-form">
        <h6>Send me a message:</h6>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
          </div>
          <Button >Submit</Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
