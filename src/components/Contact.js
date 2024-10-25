import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImage from "../assets/img/MyImage.png"; // Import your image here
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com'; // Import EmailJS

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '', // Added subject field to the form details
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    // Use EmailJS to send email
    emailjs.send(
      'service_jpsnpr8', // Your EmailJS service ID
      'template_7x2sopd', // Your EmailJS template ID
      {
        from_name: formDetails.firstName,
        from_email: formDetails.email,
        phone: formDetails.phone,
        subject: formDetails.subject,
        message: formDetails.message
      },
      'your_public_key' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully' });
    }, (error) => {
      console.log(error.text);
      setButtonText("Send");
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={myImage} alt="My Image" />
              }
            </TrackVisibility>
          </Col>

          {/* Right Side - Basic Info and Contact Form */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  {/* Basic Info Section */}
                  <Card className="basic-info mb-4">
                    <Card.Body>
                      <h3><strong>Ravindu Jayaweera</strong></h3>
                      <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Gampaha, Sri Lanka</p>
                      <p><FontAwesomeIcon icon={faEnvelope} /> brdilshanjayaweera@gmail.com</p>
                      <p><FontAwesomeIcon icon={faPhone} /> +94710927068</p>
                    </Card.Body>
                  </Card>

                  {/* Contact Form Section */}
                  <h2><strong>Contact Me</strong></h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.firstName} 
                          placeholder="Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                        />
                      </Col>

                      <Col xs={12} className="px-1">
                        <input 
                          type="email" 
                          value={formDetails.email} 
                          placeholder="Email Address" 
                          onChange={(e) => onFormUpdate('email', e.target.value)} 
                        />
                      </Col>

                      <Col xs={12} className="px-1">
                        <input 
                          type="tel" 
                          value={formDetails.phone} 
                          placeholder="Phone No." 
                          onChange={(e) => onFormUpdate('phone', e.target.value)} 
                        />
                      </Col>

                      <Col xs={12} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.subject} 
                          placeholder="Subject" 
                          onChange={(e) => onFormUpdate('subject', e.target.value)} 
                        />
                      </Col>

                      <Col xs={12} className="px-1">
                        <textarea 
                          rows="6" 
                          value={formDetails.message} 
                          placeholder="Message" 
                          onChange={(e) => onFormUpdate('message', e.target.value)}>
                        </textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>

                      {
                        status.message && (
                          <Col xs={12}>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        )
                      }
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
