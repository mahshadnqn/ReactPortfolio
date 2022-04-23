import React from 'react';
import "../App.css";
import mee from "../images/mee.jpg";

const About = () => {
      return (  
        <section id="about">
        <div className="about-flex-container">
          <div className="container" id="photo">
            <img
              src={mee}
              alt="a picture of a woman"
              width="300px"
              height="300px"
            />
          </div>
          <div className="container" id="description">
            <h2 id="about-header" className="horizontal-flex-items">
              About Me
            </h2>
            <p className="horizontal-flex-items">
              My name is Mahshad Naghashan. I am a student in Humber College’s Web
              Development program. After years of working in administrative positions
              I chose to pursue my ambition of working in IT by diving deep into web
              technologies and programming.
            </p>
            <div className="horizontal-flex-items">
              <button id="resume-btn">
                <span className="fas fa-download" /> Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
      );
}

export default About;
    
