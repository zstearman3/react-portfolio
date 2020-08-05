import React, { Component } from 'react';
import SkillsBadge from './SkillsBadge';
import rubyIcon from '../assets/ruby_icon.png'

class Skills extends Component {
  render() {
    return(
      <div className="skills-container">
        <div className="section-div">
          <h1 className="skills-header">Technologies</h1>
          <div className="skills-badges row">
            <SkillsBadge
              skill="Ruby"
              img={rubyIcon}
            />
            <SkillsBadge
              skill="Pyhon"
            />
            <SkillsBadge
              skill="AWS"
            />
            <SkillsBadge
              skill="PostgreSQL"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
