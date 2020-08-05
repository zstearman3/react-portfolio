import React, { Component } from 'react';
import introImage from '../assets/home_family_pic_wide.jpg';

class Intro extends Component {
  render() {

    return (
      <div className="intro-container">
        <div className="section-div">
          <h1 className="intro-header">Hi, my name is Zach Stearman, and I am a software developer.</h1>
          <img src={introImage} id="home-family-pic" alt="Zach Stearman Family"></img>
          <div className="intro-text">
            <p className="intro-paragraph">I am a full stack web developer with a passion for designing user-friendly applications. I am passionate about software development, and I love learning new skills and technologies.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
