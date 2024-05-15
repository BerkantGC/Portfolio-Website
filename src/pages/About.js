// About.js
import React from 'react';
import styles from '../styles/About.css'; // Import CSS module
import Education from "./Education"
import Skills from "./Skills"


const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>I'm Berkant Gürcan, a passionate Computer Engineer.</p>
      <Education></Education>
    </section>
  );
}

export default About;
