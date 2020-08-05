import React, { Component } from 'react';
import introImage from '../assets/home_family_pic_wide.jpg';

class Intro extends Component {
  render() {
    return (
      <div className="intro row">
        <div className="col-xs-12">
          <h1 className="intro-header">Hi, my name is Zach Stearman, and I am a software developer.</h1>
          <img src={introImage} id="home-family-pic" alt="Zach Stearman Family"></img>
          <div className="intro-text">
            <p className="intro-paragraph">I am a full stack web developer with a passion for designing user-friendly applications. I began coding in 2014 to pursue a passion project of building a college basketball analytics website. That site, prophetratings.com, now displays four seasons worth of college basketball statistics, custom analytics, and predictions. The project taught me the fundamentals of web design, and equipped me with countless skills that are vital to building robust applications including database design, RESTful API usage, web scraping, and much more. Most importantly, developing the site instilled a love of solving problems using code and taught me how to tackle complex tasks one step at a time. </p>

          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
