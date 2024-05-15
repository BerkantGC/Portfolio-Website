// Header.js
import React, { useState } from 'react';
import styles from '../styles/Header.css'; // Import CSS module
import Colors from '../Colors';
import BackgroundBlurs from "../images/BackgroundBlurs.png";
import { CSSTransition } from 'react-transition-group';

const Background = (props) => {
  let githubLinkURL = "https://github.com/BerkantGC";

  return (
    <div style={{backgroundColor: Colors.dark}} className="frame"> 
      <div style={{backgroundColor: Colors.dark_blue, borderColor: Colors.lines}} className='main-container'>
        <div className='background-blur' style={{backgroundImage: `url(${BackgroundBlurs})`}}>
          <nav className='header'>
            <p>berkant-gurcan</p>
            <p href="/me"onClick={()=>props.handler("me")} style={(props.selectedPage == "me") ? {borderBottomColor: Colors.sunlitOrange}:{}}>_me</p>
            <p href="/about" onClick={()=>props.handler("about-me")} style={(props.selectedPage == "about-me") ? {borderBottomColor: Colors.sunlitOrange}:{}}>_about-me</p>
            <p href="/projects"onClick={()=>props.handler("projects")} style={(props.selectedPage == "projects") ? {borderBottomColor: Colors.sunlitOrange}:{}}>_projects</p>
            <p href="/contact"onClick={()=>props.handler("contact-me")}  style={(props.selectedPage == "contact-me") ? {borderBottomColor: Colors.sunlitOrange}:{}}>_contact-me</p>
          </nav>
          <div className='page-container' key={props.selectedPage}>
              <div>
                {props.children}
              </div>
          </div>
          <div className='find-me-in'>
            <button>Linkedin</button>
            <button>github</button>
            <button>mail</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;

