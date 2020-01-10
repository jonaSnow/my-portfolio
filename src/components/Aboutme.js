import React from 'react';
import aboutmepic from '../images/aboutme-img.JPG';

const Aboutme = () => (
  <div className="aboutme__container">
  <img className="aboutme__img" src={aboutmepic} alt="about me"/>
  <div className="aboutme__text">
    <h2>About Me</h2>
    <p>
      I am currently a QA Software Engineer at a software company. My interest include web development, the Mets, and video games. My wife and i have two kids (one is a fur baby). Skills include: Java, Python, JavaScript.
    </p>
  </div>
  </div>
);

export default Aboutme;