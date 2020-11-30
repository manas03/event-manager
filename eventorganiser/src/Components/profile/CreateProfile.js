import React, { Component } from "react";
import TextFieldGroup from "../Common/TextFieldGroup";
import TextAreaFieldGroup from "../Common/TextAreaFieldGroup";
import InputGroup from "../Common/InputGroup";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { createProfile } from "../../actions/profileActions";
import classnames from "classnames";

class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      displaySocialInputs: false,
      handle: "",
      phoneno: "",
      institute: "",
      gender: "",
      website: "",
      dateofbirth: "",
      bio: "",
      resume: "",
      skills: "",
      githubusername: "",
      facebook: "",
      profilephoto: "",
      youtube: "",
      twitter: "",
      linkedin: "",
      instagram: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const profileData = {
      handle: this.state.handle,
      gender: this.state.gender,
      phoneno: this.state.phoneno,
      institute: this.state.institute,
      dateofbirth: this.state.dateofbirth,
      website: this.state.website,
      resume: this.state.resume,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      profilephoto: this.state.profilephoto,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) this.setState({ errors: nextProps.errors });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Youtube Profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="Instagram Profile URL"
            name="insta"
            icon="fab fa-instagram"
            value={this.state.insta}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row pb-4">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some info for your profile
              </p>
              <small className="d-block pb-3">* required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile"
                />
                <div className="form-group pb-3">
                  <label for="sel1">Gender</label>
                  <select className="form-control" id="sel1">
                    <option value="" disabled selected>
                      Choose your gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    value={this.state.gender}
                    onChange={this.onChange}
                    error= {errors.gender}
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    placeholder="Date of Birth"
                    name="dob"
                    value={this.state.dateofbirth}
                    onChange={this.onChange}
                    error={errors.dateofbirth}
                  />
                  <small className="form-text text-muted">
                    Enter your Date of Birth
                  </small>
                </div>
                {/* <TextFieldGroup
                  placeholder="Phone Number"
                  type="text"
                  pattern="[0-9]*"
                  name="phoneno"
                  maxLength="10"
                  value={this.state.phoneno}
                  onChange={this.onChange}
                  error={errors.phoneno}
                  info="Enter your phone number"
                /> */}
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.phoneno,
                    })}
                    placeholder="Phone Number"
                    name="phoneno"
                    pattern="[0-9]*"
                    value={this.state.phoneno}
                    onChange={this.onChange}
                  />
                  {errors.phoneno && (
                    <div className="invalid-feedback">{errors.phoneno}</div>
                  )}
                  <small className="form-text text-muted">
                    Enter Your phone number
                  </small>
                </div>
                <input type="text" pattern="[0-9]*" />
                <TextFieldGroup
                  placeholder="Institute"
                  name="institute"
                  value={this.state.institute}
                  onChange={this.onChange}
                  error={errors.institute}
                  info="Name of the institution you are a part of"
                />
                <div className="form-group py-3">
                  <label for="exampleFormControlFile1">
                    Upload a Profile Photo
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
                <div className="form-group pb-3">
                  <label for="exampleFormControlFile1">
                    Upload your Resume/ CV
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
                <TextFieldGroup
                  placeholder="Website URL"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Add your website"
                />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please enter comma separated values (e.g. HTML,CSS,C)"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="Include your username to show latest repos and a github link"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us something about yourself"
                />
                <div className="mb-3 pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState((prevState) => ({
                        displaySocialInputs: !prevState.displaySocialInputs,
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
