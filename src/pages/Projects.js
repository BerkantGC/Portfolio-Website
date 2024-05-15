import React from 'react';
import styles from '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div>
        <h3>YAŞAR FORUM</h3>
        <p>I developed this project for Yaşar University students to share their ideas, class notes, and announcements freely...</p>
      </div>
      <div>
        <h3>FILE ENCRYPTION AND SIGNING SOFTWARE</h3>
        <p>This project is developed for COMP 4441 Cybersecurity...</p>
      </div>
      <div>
        <h3>SPORTFRIEND APP</h3>
        <p>This project is developed for SE 2222 Database Systems...</p>
      </div>
      <div>
        <h3>MUG TREE</h3>
        <p>This project is developed for Mobile App Club of Yaşar University...</p>
      </div>
      <div>
        <h3>MOVIE APP</h3>
        <p>Clone of IMDB by using React Native...</p>
      </div>
      <div>
        <h3>FIND EXIT OF MAZE</h3>
        <p>Game is made by C language and Data Structures...</p>
      </div>
    </section>
  );
}

export default Projects;
