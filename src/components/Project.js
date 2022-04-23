import React from 'react';
import "../App.css";
import project from "../images/project.jpg";
import jsproject from "../images/js.jpg";
import cproject from "../images/C.png";
import nproject from "../images/node.JPG";
import cake from "../images/cake.JPG";



const Project = () => {
      return (
  
        <section id="project">
          <h2>Projects</h2>
          <div className="project-center">
            <div className="flex-container">
              <div className="project-flex-items">
                <img src={cake} alt="" width={300} height={150} />
              </div>
              <div className="project-flex-items">
                <h3>Peace Of Cake</h3>
                <p>HTML, CSS, JavaScript</p>
                <p>This was a group project for IXD course, the layout, homepage and location page was developed by me.</p>
              </div>
            </div>
            <div className="flex-container">
              <div className="project-flex-items">
                <img src={jsproject} alt="" width={300} height={150} />
              </div>
              <div className="project-flex-items">
                <h3>Color Picker</h3>
                <p>HTML, CSS, JavaScript</p>
                <p>Color Picker was my pet project for JavaScrip course, it is a simple game that challenges your concentration</p>
              </div>
            </div>
            <div className="flex-container">
              <div className="project-flex-items">
                <img src={cproject} alt="" width={300} height={150} />
              </div>
              <div className="project-flex-items">
                <h3>Wine Inquiry</h3>
                <p>C# ASP.NET</p>
                <p>This is a web application for managing wine bottles at a store</p>
              </div>
            </div>    
            <div className="flex-container">
              <div className="project-flex-items">
                <img src={nproject} alt="" width={300} height={150} />
              </div>
              <div className="project-flex-items">
                <h3>Happy Moon Photography</h3>
                <p>Node.js</p>
                <p>This was a simple website for a Photography developed using node.js</p>
              </div>
            </div>
          </div>  
        </section>
      );
}
export default Project;