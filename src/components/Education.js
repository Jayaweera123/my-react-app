import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import uom from '../assets/img/uom.jpg';
import bc from '../assets/img/bc.png';
import nenasala from '../assets/img/nenasala.png';

import './Education.css'; // Import the CSS file for styling

const Education = () => {
  const educationData = [
    {
      institution: 'University of Moratuwa',
      degree: 'Bachelor of Technology - BTech, Computer Science and Engineering',
      period: 'May 2021 - present',
      grade: '3.86 CGPA',
      description: `I am currently pursuing a Bachelor's degree in Information Technology at the University of Moratuwa. I have completed 6 semesters and have maintained a CGPA of 8.86. My coursework includes subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.`,
      logo: uom,
    },
    {
      institution: 'Institute for Java Software Engineering - IJSE',
      degree: 'Comprehensive Master in Java Development',
      period: '2021 - 2022',
      grade: 'Best performance in all projects',
      description: `I completed the Comprehensive Master in Java Development (CMJD) at the Institute for Java Software Engineering (IJSE). During this program, I gained in-depth knowledge of various Java concepts and worked on several projects that enhanced my practical skills and understanding of Java development.`,
      logo: nenasala,
    },
    {
      institution: 'Bandaranayake Collage, Gampaha',
      degree: 'High School Diploma',
      period: 'Feb 2010 - Nov 2019',
      grade: 'Advanced Level bio stream',
      description: `I completed my school education at Banadaranayake Collage Gampaha, where I achieved outstanding academic results, securing 8A1B  in my Ordinary Level (OL) examinations and BBC in the Biology stream in my Advanced Level (AL) examinations. Throughout my school years, I excelled not only academically but also in various extracurricular activities. I served as a prefect, demonstrating leadership and responsibility, and actively participated in numerous school events and initiatives, showcasing my dedication and enthusiasm in every aspect of school life.`,
      logo: bc,
    },
  ];

  return (
    <section id="education" className="education-section">
      <Container>
        <h2 className="section-title">Education</h2>
        <p className="section-description">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>
        <Row className="education-timeline">
          {educationData.map((item, index) => (
            <Col key={index} md={12} className="timeline-item">
              <div className="timeline-badge">
                <img src={item.logo} alt={item.institution} className="timeline-logo" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">{item.institution}</h3>
                  <h4 className="timeline-degree">{item.degree}</h4>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <div className="timeline-body">
                  <p><strong>Grade: </strong>{item.grade}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
