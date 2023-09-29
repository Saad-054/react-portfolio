// Contact.jsx
import React from "react";

function Contact() {
  return (
    <section id="contact" className="text-center">
      <h5>Contact Me</h5>
      <p className="contact-description">Feel free to reach out to me using any of the following methods:</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:saadsiddiqui@gmail.com">saadsiddiqui@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/saad-siddiqui-engineer/">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/Saad-054/">GitHub Profile</a></p>
        {/* Add additional contact details as needed */}
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;