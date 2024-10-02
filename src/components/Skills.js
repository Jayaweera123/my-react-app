import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of my skills on which I have been working on for the past few years.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>UI/UX Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Programming</h5>
                </div>
              </Carousel>

              {/* New Skills Section */}
              <div className="my-skills">
                <div className="skills-grid">
                  {/* Frontend Skills */}
                  <div className="skills-category">
                    <h3>Frontend</h3>
                    <span>React Js</span>
                    <span>Redux</span>
                    <span>Next Js</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>Material UI</span>
                  </div>

                  {/* Backend Skills */}
                  <div className="skills-category">
                    <h3>Backend</h3>
                    <span>Node Js</span>
                    <span>Express Js</span>
                    <span>MySQL</span>
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                    <span>Java</span>
                    <span>Python</span>
                  </div>

                  {/* Programming Languages */}
                  <div className="skills-category">
                    <h3>Programming</h3>
                    <span>Java</span>
                    <span>Python</span>
                    <span>C</span>
                    <span>Pascal</span>
                  </div>

                  {/* IDEs */}
                  <div className="skills-category">
                    <h3>IDE's</h3>
                    <span>IntelliJ IDEA</span>
                    <span>VS Code</span>
                    <span>Cursor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
