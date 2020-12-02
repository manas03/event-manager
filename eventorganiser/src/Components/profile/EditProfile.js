import React, { Component } from "react";
import TextFieldGroup from "../Common/TextFieldGroup";
import TextAreaFieldGroup from "../Common/TextAreaFieldGroup";
import SelectListGroup from "../Common/SelectListGroup";
import InputGroup from "../Common/InputGroup";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import classnames from "classnames";
import isEmpty from "../../validation/is-empty";

class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      displaySocialInputs: true,
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

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) this.setState({ errors: nextProps.errors });
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Make skills back into an array
      const skillsCSV = profile.skills.join(",");
      //If profile doesnt exist make empty string
      profile.phoneno = !isEmpty(profile.phoneno) ? profile.phoneno : "";
      profile.institute = !isEmpty(profile.institute) ? profile.institute : "";
      profile.gender = !isEmpty(profile.gender) ? profile.gender : "";
      profile.website = !isEmpty(profile.website) ? profile.website : "";
      profile.dateofbirth = !isEmpty(profile.dateofbirth)
        ? profile.dateofbirth
        : "";
      profile.githubusername = !isEmpty(profile.githubusername)
        ? profile.githubusername
        : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : "";
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : "";
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : "";
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : "";

      // Set component state
      this.setState({
        handle: profile.handle,
        gender: profile.gender,
        phoneno: profile.phoneno,
        institute: profile.institute,
        dateofbirth: profile.dateofbirth,
        website: profile.website,
        resume: profile.resume,
        skills: skillsCSV,
        githubusername: profile.githubusername,
        bio: profile.bio,
        profilephoto: profile.profilephoto,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram,
      });
    }
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Facebook profile URL"
            name="facebook"
            icon="fab fa-facebook fa-2x"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Youtube profile URL"
            name="youtube"
            icon="fab fa-youtube fa-2x"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Twitter profile URL"
            name="twitter"
            icon="fab fa-twitter fa-2x"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Linkedin profile URL"
            name="linkedin"
            icon="fab fa-linkedin fa-2x"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="Instagram profile URL"
            name="instagram"
            icon="fab fa-instagram fa-2x"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    const options = [
      { label: "* Select your gender", value: 0 },
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      { label: "Other", value: "Other" },
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row pb-4">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Your Profile</h1>
              <p className="lead text-center">Make changes to your profile</p>
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
                <SelectListGroup
                  placeholder="Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={options}
                  error={errors.gender}
                />
                <TextFieldGroup
                  name="dateofbirth"
                  type="date"
                  value={this.state.dateofbirth}
                  onChange={this.onChange}
                  error={errors.dateofbirth}
                  info="Enter your Date of Birth"
                />
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.phoneno,
                    })}
                    placeholder="Phone Number"
                    name="phoneno"
                    pattern="[0-9]*"
                    maxLength="10"
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
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
