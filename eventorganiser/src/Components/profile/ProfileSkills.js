import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileSkills extends Component {
  render() {
    const { profile } = this.props;

    // Skill list
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa-check fas" /> {skill}
      </div>
    ));

    return (
      <div>
        <h5 className="pt-5 pb-3">Skills</h5>
        {skills}
      </div>
    );
  }
}

ProfileSkills.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileSkills;
