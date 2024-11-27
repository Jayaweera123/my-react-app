import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, githubLink, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
    window.dispatchEvent(new Event("stopSliding"));
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    window.dispatchEvent(new Event("resumeSliding"));
  };

  return (
    <Col md={8} lg={6} className="mb-4">
      <div className="project-card">
        <img src={imgUrl} alt={title} />
        <div className="project-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="project-footer">
          <div className="github-link">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
                GitHub
              </a>
            )}
          </div>
          <Button className="more-details-btn" onClick={handleShowDetails}>
            See Details
          </Button>
        </div>
      </div>

      <Modal show={showDetails} onHide={handleCloseDetails} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title} - Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {details ? (
            <>
              <p><strong>Status:</strong> {details.status}</p>
              <p><strong>Year:</strong> {details.year}</p>
              <p><strong>Client:</strong> {details.client}</p>
              <p><strong>Contribution:</strong> {details.contribution}</p>
              <p><strong>Technologies Used:</strong></p>
              <ul>
                <li><strong>Web Application:</strong> {details.technologies.web}</li>
                <li><strong>Mobile Application:</strong> {details.technologies.mobile}</li>
              </ul>
              <p><strong>Description:</strong> {details.description}</p>
              <p><strong>Responsibilities:</strong> {details.responsibilities}</p>
            </>
          ) : (
            <p>No additional details available for this project.</p>
          )}
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
