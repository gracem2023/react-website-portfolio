import React from 'react';
import './AboutContent.css';

const AboutContent = () => (
  <section className="aboutContent" id="aboutContent">
    <div className="content-container">
      <div className="text-content">
        <h2 className="title">Learn About Me</h2>
        <p className="paragraph">
        Hi! My name is Grace, and I’m a third year Computational Media major at Georgia Tech. While some of my classmates study to go to space, I manipulate the spaces humans already occupy, discovering how to connect people with their environments.
        </p>
        <p className="paragraph">
        I’m a student, writer, artist, and UI/UX Designer. I design to empathize, to inspire, to communicate, to include, to simplify, and to make the world of seven billion feel a little more homey. I approach each design project with the curiosity of a fellow human, consumer, and storyteller, because design should illuminate you!
        </p>
      </div>
      <div className="image-content">
        <img src='images/grace.jpg' alt="A description of the image" />
      </div>
    </div>
  </section>
);

export default AboutContent;

