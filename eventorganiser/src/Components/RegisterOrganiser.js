import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerOrganiser } from "../actions/authactionsOrganiser";
import TextFieldGroup from "./Common/TextFieldGroup";
import TextAreaFieldGroup from "./Common/TextAreaFieldGroup";

class RegisterOrganiser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      organisation: "",
      dateofbirth: "",
      post: "",
      bio: "",
      website: "",

      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newOrganiser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      dateofbirth: this.state.dateofbirth,
      organisation: this.state.organisation,
      post: this.state.post,
      website: this.state.website,
      bio: this.state.bio,
    };

    this.props.registerOrganiser(newOrganiser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Organiser Account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="DOB"
                  name="dateofbirth"
                  type="date"
                  value={this.state.dateofbirth}
                  onChange={this.onChange}
                  error={errors.dateofbirth}
                />
                <TextFieldGroup
                  placeholder="Organisation"
                  name="organisaton"
                  type="text"
                  value={this.state.organisaton}
                  onChange={this.onChange}
                  error={errors.organisaton}
                />
                <TextFieldGroup
                  placeholder="POST"
                  name="post"
                  type="text"
                  value={this.state.post}
                  onChange={this.onChange}
                  error={errors.post}
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  type="text"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                />
                <TextAreaFieldGroup
                  placeholder="Short bio"
                  name="bio"
                  type="textarea"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterOrganiser.propTypes = {
  registerOrganiser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerOrganiser })(
  withRouter(RegisterOrganiser)
);
