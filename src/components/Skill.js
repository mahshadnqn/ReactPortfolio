import React from 'react';
import "../App.css";
import data from "./laravel/cms.json";

const Skill = () => {
      return (
        <section id="skill">
        <h2>Skills</h2>
        <div className="container">
            <div className="flex-items">
            <div className="center">
                <div>
                <h3>{data[0].name}</h3>
                <div className="progress-bar-border">
                    <div id="forty" className="progress-bar" />
                </div>
                </div>
                <div>
                <h3>{data[1].name}</h3>
                <div className="progress-bar-border">
                    <div id="thirty" className="progress-bar" />
                </div>
                </div>
                <div>
                <h3>{data[2].name}</h3>
                <div className="progress-bar-border">
                    <div id="thirty" className="progress-bar" />
                </div>
                </div>
            </div>
            </div>
            <div className="flex-items">
            <div className="center">
                <div>
                <h3>{data[3].name}</h3>
                <div className="progress-bar-border">
                    <div id="forty" className="progress-bar" />
                </div>
                </div>
                <div>
                <h3>{data[4].name}</h3>
                <div className="progress-bar-border">
                    <div id="thirty" className="progress-bar" />
                </div>
                </div>
                <div>
                <h3>{data[5].name}</h3>
                <div className="progress-bar-border">
                    <div id="thirty" className="progress-bar" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      );
}

export default Skill;