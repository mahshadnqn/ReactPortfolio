
import React from 'react';
import "../App.css";

const Header = () => {
      return (  
        <header id="header" className="horizontal-flex-items">
          <nav className="flex-container">
            <div id="logo">
              <a href="index.html">Mahshad N.</a>
            </div>
            <div id="main-menu">
              <ul className="flex-container">
                <li><a href="index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>
      );
    }

export default Header;