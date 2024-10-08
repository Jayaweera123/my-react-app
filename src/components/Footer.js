import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg"; // e.g. GitHub Icon
import navIcon2 from "../assets/img/nav-icon2.svg"; // e.g. LinkedIn Icon
import navIcon3 from "../assets/img/nav-icon3.svg"; // e.g. Instagram Icon

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center">
            <h2>Ravindu Jayaweera</h2>
            
            {/* Footer links with anchor to sections */}

            <ul className="footer-links">
             <li><a href="#Banner">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#connect">Contact</a></li>

            </ul>

            {/* Social icons */}
            <div className="social-icon">
              {/* LinkedIn Link */}
              <a href="https://www.linkedin.com/in/ravindu-jayaweera-4a6449283/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>

              {/* Facebook Link */}
              <a href="https://www.facebook.com/ravindu.dilshan.560" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook Icon" />
              </a>

              {/* Instagram Link */}
              <a href="https://www.instagram.com/ravindu_jayaweera.1/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram Icon" />
              </a>
            </div>

            {/* Copyright text */}
            <p>&copy; 2024 Ravindu Jayaweera. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
