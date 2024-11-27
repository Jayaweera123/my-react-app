import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img1.png";
import projImg5 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Ascendia",
      description: "Second Year Software Project - MERN Stack - Full Stack Developer.",
      imgUrl: img1,
    },
    {
      title: "Expl",
      description: "E-visa Issuing System - Frontend Developer.",
      imgUrl: projImg2,
    },
    {
      title: "NeoMove",
      description: "Devthon winning application.",
      imgUrl: projImg3,
    },
    {
      title: "TaskManager Pro",
      description: "A task management tool for boosting productivity.",
      imgUrl: projImg4,
    },
    {
      title: "HealthEase",
      description: "Healthcare management system to track patient data and appointments.",
      imgUrl: projImg5,
    },
    {
      title: "Highway Tracking System",
      description: "A collaborative platform for developers to share and review code.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <h2>Projects</h2>
          <p>My experience as an IT Undergraduate and SE Enthusiast.</p>
          <div className="project-slider">
            <div className="project-cards-wrapper">
              {projects.concat(projects).map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.imgUrl}
                  githubLink={project.githubLink}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
};
