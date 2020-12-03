import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import {
  clearCurrentProfile,
  getCurrentProfile,
} from "../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
    this.props.history.push("/loginuser");
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onProfile(e) {
    e.preventDefault();
    const { profile } = this.props.profile;
    // let handle = !isEmpty(profile.handle) ? profile.handle : " ";
    this.props.history.push(`/profile/${profile.handle}`);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <div
            className="nav-link cursor"
            to="profile"
            onClick={this.onProfile.bind(this)}
          >
            Profile
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/studentdash">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
            to="/dashboard"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle"
              title="You must have a Gravatar connected to your email to display an image"
              style={{ width: "25px", height: "25px", marginRight: "5px" }}
            />
            Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/registeruser">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/loginuser">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Event Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  Users
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile,
  getCurrentProfile,
})(withRouter(Navbar));
