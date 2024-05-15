// Header.js
import React, { useState } from 'react';
import styles from '../styles/Me.css'; // Import CSS module
import Colors from '../Colors';
import BerkantGC from "../images/photo.png";

const Me = () => {
  let githubLinkURL = "https://github.com/BerkantGC";
  const [selectedPage, setSelectedPage] = useState("me");

  return (
        <div className='me-container'> 
            <img className='berkant-photo' src={BerkantGC}></img>
            <div className='details'>
                <p>Hello. I'm</p>
                <h1>Berkant Gürcan</h1>
                <h3 style={{color: Colors.gradient_blue}}>{">"} Computer Engineer</h3>
            <div>
                <p style={{color: Colors.softGrayBlue}}>// you can also see it on my Github page.</p>
                <p style={{color: Colors.royalBlue, fontStyle: 'oblique'}}>const <span style={{color: Colors.mintTurquoise}}>githubLink </span>
                <span style={{color: Colors.white}}>= </span> <a href={githubLinkURL} style={{color: Colors.salmonRose, textDecoration: 'underline'}}>{githubLinkURL}</a></p> 
            </div>
            </div>
            <div>
        </div>
        </div>   
  );
}

export default Me;

