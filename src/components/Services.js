import React, { useState, useEffect, useRef } from 'react'; // Added useState, useEffect, useRef
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Services = () => {
  const [startScroll, setStartScroll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStartScroll(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
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
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Services</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={startScroll} 
                autoPlaySpeed={1000} /* Increased speed to 1 second per slide */
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Development</h5>
                  <p>Crafting responsive, high-performance websites tailored to your business needs. From concept to launch, we build web solutions that engage users and drive growth.</p>
                </div>
                
                <div className="item">
                  <img src={meter2} alt="Mobile App Development" />
                  <h5>Mobile App Development</h5>
                  <p>Developing custom mobile applications that provide a seamless user experience across devices. We bring your ideas to life with robust, scalable, and innovative app solutions.</p>
                </div>
                
                <div className="item">
                  <img src={meter3} alt="UI/UX Designing" />
                  <h5>UI/UX Designing</h5>
                  <p>Designing intuitive and aesthetically pleasing interfaces that enhance user experience. We focus on user-centered designs that combine functionality with a seamless look and feel.</p>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
