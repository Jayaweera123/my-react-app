import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import I1 from "../assets/img/I1.png";
import I6 from "../assets/img/I6.png";
import I4 from "../assets/img/I4.jpg";
import I7 from "../assets/img/I7.png";
import I5 from "../assets/img/I5.png";
import I3 from "../assets/img/I3.png";
import I2 from "../assets/img/I2.png";

export const Projects = () => {
  const projects = [
    {
      title: "I - FOODZ",
      description: "Second Year Software Project - MERN Stack - Full Stack Developer.",
      imgUrl: I6,
      githubLink: "https://github.com/example/i-foodz",
    },
    {
      title: "Trip Eka",
      description: "Seats Booking System for Annual TripE.",
      imgUrl: I4,
      githubLink: "https://github.com/example/trip-eka",
    },
    {
      title: "Ascendia",
      description: "Second Year Software Project.",
      imgUrl: I1,
      githubLink: "https://github.com/Jayaweera123/Ascendia-",
    },
    {
      title: "Learn Wave",
      description: "A Student management system for tuition classes.",
      imgUrl: I3,
      githubLink: "https://github.com/Jayaweera123/LearnWave",
    },
    {
      title: "Learn Wave - Mobile",
      description: "A Student management App for tuition classes.",
      imgUrl: I2,
      githubLink: "https://github.com/example/learn-wave-mobile",
    },
    {
      title: "My Portfolio",
      description: "React Frontend.",
      imgUrl: I5,
      githubLink: "https://github.com/example/my-portfolio",
    },
    {
      title: "Highway Tracking System",
      description: "1st year Hardware project.",
      imgUrl: I7,
      githubLink: "https://github.com/example/highway-tracking-system",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Automatically slide every 3 seconds
    return () => clearInterval(interval);
  }, [projects.length]);

  const sliderStyle = {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(-${currentIndex * 300}px)`, // 300px is the width of each card
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>My experience as an IT Undergraduate and SE Enthusiast.</p>
            <div className="project-slider">
              <div className="project-cards-wrapper" style={sliderStyle}>
                {projects.map((project, index) => (
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
  );
};
