import { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import myImage from "../assets/img/MyImage.png"; // Import your image here
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    Name: '',
    email: '',
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [showModal, setShowModal] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    emailjs.send(
      'service_rjimhnb', // Your EmailJS service ID
      'template_753xbhi', // Your EmailJS template ID
      {
        from_name: formDetails.Name,
        from_email: formDetails.email,
        message: formDetails.message
      },
      'a3lYensrYyYrAdK9n' // Replace with your actual EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully' });
      setShowModal(true); // Show success modal
    }, (error) => {
      console.log(error.text);
      setButtonText("Send");
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      setShowModal(true); // Show failure modal
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
                  <Card className="mb-4 basic-info">
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
                          value={formDetails.Name} 
                          placeholder="Name" 
                          onChange={(e) => onFormUpdate('Name', e.target.value)} 
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
                        <textarea 
                          rows="6" 
                          value={formDetails.message} 
                          placeholder="Message" 
                          onChange={(e) => onFormUpdate('message', e.target.value)}>
                        </textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Popup Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{status.success ? "Success" : "Error"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: '1.1em', color: status.success ? "green" : "red" }}>
            {status.message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
