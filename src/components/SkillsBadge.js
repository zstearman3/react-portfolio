import React, { Component } from 'react';

class SkillsBadge extends Component {
  render() {
    return(
      <div className="col-lg-3 col-6">
        <div className="badge">
          <h3>{this.props.skill}</h3>
          <div className="col-12">
            <img src={this.props.img}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsBadge;
