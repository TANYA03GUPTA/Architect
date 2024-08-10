import "./Contact.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c495f115-1d2f-46ec-a82e-31a2654540bb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: "Message has been sent !",
        icon: "success",
      });
    }
  };

  return (
    <div className="contact-container">
      <Row>
        <Col md={7} className="contact-form">
          <h2>Contact Us</h2>
          <p>
            We d love to hear from you! Whether you have questions, need more
            information, or want to discuss your upcoming project, feel free to
            reach out. Our team is here to assist you and provide the support
            you need.
          </p>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </Col>

        <Col md={5} className="contact-whatsapp">
          <h2>Talk on WhatsApp</h2>
          <p>
            Need immediate assistance? Click the button below to chat with us on
            WhatsApp.
          </p>
          <Button
            href="https://wa.me/1234567890" // Replace with your WhatsApp number
            variant="success"
            target="_blank"
          >
            Chat with Us
          </Button>
        </Col>
      </Row>
    </div>
  );
}
