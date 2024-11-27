import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => setShowDetails(true);
  const handleCloseDetails = () => setShowDetails(false);

  return (
    <Col md={8} lg={6} className="mb-4">
      <div className="project-card">
        {/* Project Image */}
        <img src={imgUrl} alt={title} />

        {/* Project Content */}
        <div className="project-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        {/* Footer Section */}
        <div className="project-footer">
          {/* GitHub Link */}
          <div className="github-link">
            <FaGithub />
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          {/* See Details Button */}
          <Button className="more-details-btn" onClick={handleShowDetails}>
            See Details
          </Button>
        </div>
      </div>

      {/* Modal for More Details */}
      <Modal show={showDetails} onHide={handleCloseDetails} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          {/* Add additional project details here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
