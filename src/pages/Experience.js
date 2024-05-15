import React from 'react';
import styles from "../styles/Experience.css";
import Colors from "../Colors";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className='experience-content'>
        <div style={{backgroundColor: Colors.sunlitOrange, borderColor: Colors.lines}}>
          <h3>IEEE YAŞAR UNIVERSITY BRANCH</h3>
          <p>PRESIDENT & FULL-STACK DEVELOPER<br/><span>Jan 2024 - Now</span></p>
          <p>IEEE (Engineering) Community, one of the student communities of Yaşar University...</p>
          <div>See details</div>
        </div>

        <div style={{backgroundColor: Colors.sunlitOrange,borderColor: Colors.lines}}>
          <h3>YU MOBILE APP CLUB</h3>
          <p>FULL STACK DEVELOPER<br/><span>Aug 2022 - Dec 2023</span></p>
          <p>I served as a Full Stack Developer at the YU Mobile Application Club...</p>
          <div>See details</div>
        </div>

        <div style={{backgroundColor: Colors.sunlitOrange, borderColor: Colors.lines}}>
          <h3>IBOST</h3>
          <p>FRONTEND WEB DEVELOPER<br/><span>May 2023 - June 2023</span></p>
          <p>I have undertaken the development and design of a website for the emerging technology company, iBost...</p>
          <div>See details</div>
        </div>

        <div style={{backgroundColor: Colors.sunlitOrange, borderColor: Colors.lines}}>
          <h3>GAMESATIŞ</h3>
          <p>SOFTWARE DEVELOPER INTERN<br/><span>Jun 2022 - Sep 2022</span></p>
          <p>During the 4 months of internship, I have significantly enhanced my skills in frontend and backend development...</p>
          <div>See details</div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
