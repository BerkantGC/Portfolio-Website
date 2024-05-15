// About.js
import React from 'react';
import styles from '../styles/About.css'; // Import CSS module
import Colors from '../Colors'

const About = () => {
  return (
    <section id="about">
      <section className='description'>
        <h2>About Me</h2>
        <p>I’m a 3rd-year computer engineering student at Yaşar University with full
        scholarship. With 2 years of experience, I apply my skills to develop and maintain
        projects. I am passionate about learning new technologies, solving challenging
        problems and creating innovative solutions.</p>
      </section>
      <section id="education" className={styles.education}>
        <h2>Education</h2>
        <p>Computer Engineering (Bachelor's Degree)<br></br> <span>Yaşar University <br/>Sep 2021 - June 2025</span></p>
        <p>Computer Sciences (ERASMUS+)<br></br> <span>Yaşar University <br/>Feb 2024 - July 2024</span></p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (React & React Native)</li>
          <li>Java (Spring)</li>
          <li>HTML, CSS</li>
          <li>Database (MySQL)</li>
          <li>Data Structures</li>
          <li>Problem Solving</li>
          <li>Leadership</li>
        </ul>
      </section>
    </section>
  );
}

export default About;
