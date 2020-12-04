import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import Education from "./Education";
import ProfileSkills from "./ProfileSkills";
import Spinner from "../Common/Spinner";
import Particles from "react-particles-js";

const particleOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    opacity: {
      value: 0.4,
      anim: {
        enable: true,
      },
    },
    move: {
      speed: 0.8,
    },
  },
};

class Profile extends Component {
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let profileContent;
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        profileContent = (
          <div>
            <div className="row d-flex justify-content-between pb-5">
              <div className="py-4">
                <Link to="/studentdash" className="btn btn-light">
                  Go back
                </Link>
              </div>
              <div className="py-4">
                <Link to="/edit-profile" className="btn btn-light">
                  Edit Profile
                </Link>
              </div>
              <div className="py-4">
                <Link to="/add-edu" className="btn btn-light">
                  <i className="fas fa-graduation-cap text-info mr-1"></i>
                  Add Education
                </Link>
              </div>
            </div>
            <p className="lead text-lead">
              Welcome{" "}
              <Link to={`/profile/${profile.handle}`}>{profile.handle}</Link>
            </p>
            <div className="container p-4">
              <div className="float-right">
                <img className="photo" src={user.avatar} alt="Display" />
              </div>
              <h4 className="name">{user.name}</h4>
              <p className="info">{profile.institute}</p>
              <p className="info">
                <span className="font-weight-bold">Email: </span>
                john@gmail.com
              </p>
              <p className="desc">
                <span className="font-weight-bold">Bio: </span> {profile.bio}
              </p>
              {isEmpty(profile.website) ? null : (
                <p className="info">
                  <span className="font-weight-bold">
                    Website <i className="fas fa-globe" /> :
                  </span>{" "}
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-50 text-decoration-none"
                  >
                    Visit {user.name}'s website
                  </a>
                </p>
              )}
            </div>
            <hr />
            <h5 className="pt-5 pb-3">Personal Information</h5>
            <p className="info">
              <span className="font-weight-bold">Institute: </span>{" "}
              {profile.institute}
            </p>
            <p className="info">
              <span className="font-weight-bold">Phone Number:</span>{" "}
              {profile.phoneno}
            </p>
            <h5 className="pt-5 pb-3">{user.name}'s Social Media</h5>
            {isEmpty(profile.social && profile.social.twitter) ? null : (
              <a
                className="text-white p-2"
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-3x" />
              </a>
            )}

            {isEmpty(profile.social && profile.social.facebook) ? null : (
              <a
                className="text-white p-2"
                href={profile.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-3x" />
              </a>
            )}

            {isEmpty(profile.social && profile.social.linkedin) ? null : (
              <a
                className="text-white p-2"
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-3x" />
              </a>
            )}

            {isEmpty(profile.social && profile.social.youtube) ? null : (
              <a
                className="text-white p-2"
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube fa-3x" />
              </a>
            )}

            {isEmpty(profile.social && profile.social.instagram) ? null : (
              <a
                className="text-white p-2"
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-3x" />
              </a>
            )}
            <hr />
            <ProfileSkills profile={profile} />
            <Education education={profile.education} />
            <button className="btn btn-danger">Delete Account</button>
          </div>
        );
      } else {
        // Loged in user has no profile
        profileContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not set up a profile yet, add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row p-5">
            <div className="col-md-12">
              <Particles className="particles" params={particleOptions} />
              {profileContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
