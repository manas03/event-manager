import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextFieldGroup from "./Common/TextFieldGroup";
import TextAreaFieldGroup from "./Common/TextAreaFieldGroup";
import InputGroup from "./Common/InputGroup.js";
import { addFest } from "../actions/eventActionsOrganiser";

class FestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      festname: "",
      festtagline: "",
      institute: "",
      website: "",

      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      festname: this.state.festname,
      festtagline: this.state.festtagline,
      institute: this.state.institute,
      website: this.state.website,
    };

    this.props.addFest(newPost, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto py-5">
              <h1 className="display-4 text-center">Add an Fest</h1>
              <p className="lead text-center">Fill up all the details</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Fest name"
                    name="festname"
                    value={this.state.festname}
                    onChange={this.onChange}
                    error={errors.festname}
                    info="A unique festname for your fest"
                  />
                  <TextFieldGroup
                    placeholder="Fest Tagline"
                    name="festtagline"
                    value={this.state.festtagline}
                    onChange={this.onChange}
                    error={errors.festtagline}
                    info="A unique tagline for your fest"
                  />
                  <TextFieldGroup
                    placeholder="Institute"
                    name="institute"
                    value={this.state.institute}
                    onChange={this.onChange}
                    error={errors.institute}
                    info="Your institute"
                  />
                  <TextFieldGroup
                    placeholder="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChange}
                    error={errors.website}
                    info="Any website for your fest"
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FestForm.propTypes = {
  addFest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addFest })(FestForm);
