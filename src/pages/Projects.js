import React from 'react';
import '../styles/Projects.css';
import YaşarForumImage from "../images/yasarforum1.png"
import MovieAppImage from "../images/Movie-App.png"
import SportfriendImage from "../images/Sportfriend.png"
import FileEncryptImage from "../images/file-encryption-and-signing-software.jpg"
import FindMazeExitImage from "../images/Find-Exit-of-MAZE.png"
import MugTreeImage from "../images/mug-tree.jpg"

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className='projects-details'>
        <div style={{backgroundImage: `url(${YaşarForumImage})`}}>
          <div>YAŞAR FORUM<p>I developed this project for Yaşar University students to share their ideas, class
            notes and announcements freely. The project is developed by using React Native,
            Spring Boot and MySQL.</p>
          </div>
        </div>

        <div style={{backgroundImage: `url(${FileEncryptImage})`}}>
          <div>FILE ENCRYPTION AND SIGNING SOFTWARE<p>
            A data (file) encryption & signing software with English user interface, using Public
            Key Infrastructure (PKI). It is a web-based application. Hash (SHA-512), symmetric
            encryption(AES) and asymmetric encryption(RSA) were all used in project</p>
            </div>
        </div>

        <div style={{backgroundImage: `url(${SportfriendImage})`}}>
          <div>SPORTFRIEND APP<p>This project is developed for SE 2222 Database Systems:
          The Sportfriend App is a platform designed for users to share their sports activities, connect with friends, and rate different sports. 
          It's built using Spring for the backend, React.js for the frontend, and MySQL for the database.</p></div>
        </div>

        <div style={{backgroundImage: `url(${MugTreeImage})`}}>
          <div>MUG TREE
            <p>Website which is developed for Mobile App Club of Yaşar University:
            The clone of tree websites which are directing the user to related links. Also
            activities and games can be seen and downloadable. Firebase and React.JS are
            used.</p>
          </div>
        </div>

        <div style={{backgroundImage: `url(${MovieAppImage})`}}>
          <div>MOVIE APP<p>The Movie App is a mobile-friendly project using React Native and Firebase. Users
          can browse movies, view details such as ratings and reviews, discover and explore
          information about movies.</p></div>
        </div>

        <div style={{backgroundImage: `url(${FindMazeExitImage})`}}>
          <div>FIND EXIT OF MAZE<p>Developed by using C language and data. Game utilizes fundamental data
          structures such as arrays, linked lists, or graphs to represent the maze and
          implement algorithms for maze traversal, such as depth-first search (DFS) or
          breadth-first search (BFS).</p></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
