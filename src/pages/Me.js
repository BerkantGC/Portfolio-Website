// Header.js
import React, { useState } from 'react';
import styles from '../styles/Me.css'; // Import CSS module
import Colors from '../Colors';
import BerkantGC from "../images/photo.png";

const Me = () => {
  let cvLink = "https://drive.google.com/file/d/1VfpJ4125JQm9ajeXksaBDNU2CpE_r2zF/view?usp=sharing";
  const [selectedPage, setSelectedPage] = useState("me");

  return (
        <div className='me-container'> 
            <img className='berkant-photo' src={BerkantGC}></img>
            <div className='details'>
                <p>Hello. I'm</p>
                <h1>Berkant Gürcan</h1>
                <h3 style={{color: Colors.gradient_blue}}>{">"} Computer Engineer</h3>
            <div>
                <p style={{color: Colors.softGrayBlue}}>// you can also see it on my resume.</p>
                <p style={{color: Colors.royalBlue, fontStyle: 'oblique'}}>const <span style={{color: Colors.mintTurquoise}}>myResume </span>
                <span style={{color: Colors.white}}>= </span> <a target='_blank' href={cvLink} style={{color: Colors.salmonRose, fontStyle:'normal', textDecoration: 'underline'}}>CV</a></p> 
            </div>
            </div>
            <div>
        </div>
        </div>   
  );
}

export default Me;

