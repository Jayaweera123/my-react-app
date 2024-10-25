import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaBlender, FaHotjar } from 'react-icons/fa';
import { SiAngular, SiNextdotjs, SiJavascript, SiMysql, SiDotnet, SiMongodb, SiTailwindcss, SiCodeblocks, SiCanva, SiVisualstudio, SiFigma, SiPostman, SiCsharp } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of my skills on which I have been working for the past few years.</p>
              
              <div className="my-skills">
                <div className="skills-grid">

                  {/* Frontend Skills */}
                  <div className="skills-category">
                    <h3>Frontend</h3>
                    <div className="skills-columns">
                      <div className="skills-column">
                        <div className="skill-item">
                          <FaReact size={40} />
                          <span>React</span>
                        </div>
                        <div className="skill-item">
                          <SiAngular size={40} />
                          <span>Angular</span>
                        </div>
                      </div>
                      <div className="skills-column">
                        <div className="skill-item">
                          <SiNextdotjs size={40} />
                          <span>Next Js</span>
                        </div>
                        <div className="skill-item">
                          <SiJavascript size={40} />
                          <span>JavaScript</span>
                        </div>
                      </div>
                      <div className="skills-column">
                        <div className="skill-item">
                          <BsBootstrap size={40} />
                          <span>Bootstrap</span>
                        </div>
                        <div className="skill-item">
                          <SiTailwindcss size={40} />
                          <span>Tailwind CSS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div className="skills-category">
                    <h3>Backend</h3>
                    <div className="skills-columns">
                      <div className="skills-column">
                        <div className="skill-item">
                          <FaNodeJs size={40} />
                          <span>Node Js</span>
                        </div>
                        <div className="skill-item">
                          <SiMysql size={40} />
                          <span>MySQL</span>
                        </div>
                      </div>
                      <div className="skills-column">
                        <div className="skill-item">
                          <SiDotnet size={40} />
                          <span>.Net</span>
                        </div>
                        <div className="skill-item">
                          <SiMongodb size={40} />
                          <span>MongoDB</span>
                        </div>
                      </div>
                      <div className="skills-column">
                        <div className="skill-item">
                          <FaJava size={40} />
                          <span>Java</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Programming Languages */}
                  <div className="skills-category">
                    <h3>Programming</h3>
                    <div className="skills-columns">
                      <div className="skills-column">
                        <div className="skill-item">
                          <FaJava size={40} />
                          <span>Java</span>
                        </div>
                      </div>
                      <div className="skills-column">
                        <div className="skill-item">
                          <SiCodeblocks size={40} />
                          <span>C</span>
                        </div>
                      </div>
                      <div className="skills-column">
                        <div className="skill-item">
                          <SiCsharp size={40} />
                          <span>C#</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Others Category */}
                  <div className="skills-category">
                    <h3>Others</h3>
                    <div className="skills-columns">
                      <div className="skills-column">
                        <div className="skill-item">
                          <FaHotjar size={40} />
                          <span>IntelliJ IDEA</span>
                        </div>
                        <div className="skill-item">
                          <SiVisualstudio size={40} />
                          <span>VS Code</span>
                        </div>
                      </div>
                      <div className="skills-column">
                        <div className="skill-item">
                          <FaBlender size={40} />
                          <span>Blender</span>
                        </div>
                        <div className="skill-item">
                          <SiCanva size={40} />
                          <span>Canva</span>
                        </div>
                      </div>
                      <div className="skills-column">
                        <div className="skill-item">
                          <SiFigma size={40} />
                          <span>Figma</span>
                        </div>
                        <div className="skill-item">
                          <SiPostman size={40} />
                          <span>Postman</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
