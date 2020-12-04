import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextFieldGroup from "./Common/TextFieldGroup";
import TextAreaFieldGroup from "./Common/TextAreaFieldGroup";
import InputGroup from "./Common/InputGroup.js";
import { addEvent } from "../actions/eventActionsOrganiser";
import { Link } from "react-router-dom";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      displayTimeline: false,

      eventname: "",
      eventinfo: "",
      organisation: "",
      eventwebsite: "",
      venue: "",
      eventimage: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: "",
      youtube: "",
      RegistrationDeadline: "",
      StartingDate: "",
      EndingDate: "",
      StartingTime: "",
      EndingTime: "",
      ResultDate: "",

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
      eventname: this.state.eventname,
      eventinfo: this.state.eventinfo,
      organisation: this.state.organisation,
      eventwebsite: this.state.eventwebsite,
      venue: this.state.venue,
      eventimage: this.state.eventimage,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
      RegistrationDeadline: this.state.RegistrationDeadline,
      StartingDate: this.state.StartingDate,
      EndingDate: this.state.EndingDate,
      EndingDate: this.state.EndingDate,
      StartingTime: this.state.StartingTime,
      EndingTime: this.state.EndingTime,
      ResultDate: this.state.ResultDate,
    };

    this.props.addEvent(newPost, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs, displayTimeline } = this.state;
    let socialInputs;
    let eventTimeline;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook fa-2x"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Youtube Profile URL"
            name="youtube"
            icon="fab fa-youtube fa-2x"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter fa-2x"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin fa-2x"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab fa-instagram fa-2x"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    if (displayTimeline) {
      eventTimeline = (
        <div>
          <TextFieldGroup
            placeholder="Starting Date"
            name="StartingDate"
            type="date"
            info="StartingDate for your event"
            value={this.state.StartingDate}
            onChange={this.onChange}
            error={errors.StartingDate}
          />
          <TextFieldGroup
            placeholder="Ending Date"
            name="EndingDate"
            type="date"
            info="EndingDate for your event"
            value={this.state.EndingDate}
            onChange={this.onChange}
            error={errors.EndingDate}
          />
          <TextFieldGroup
            placeholder="Starting Time"
            name="StartingTime"
            type="date"
            info="StartingTime for your event"
            value={this.state.StartingTime}
            onChange={this.onChange}
            error={errors.StartingTime}
          />
          <TextFieldGroup
            placeholder="Ending Time"
            name="EndingTime"
            type="date"
            info="EndingTime for your event"
            value={this.state.EndingTime}
            onChange={this.onChange}
            error={errors.EndingTime}
          />
          <TextFieldGroup
            placeholder="Result Date"
            name="ResultDate"
            type="date"
            info="ResultDate for your event"
            value={this.state.ResultDate}
            onChange={this.onChange}
            error={errors.ResultDate}
          />
          <TextFieldGroup
            placeholder="Registration daedline"
            name="RegistrationDeadline"
            type="date"
            info="RegistrationDeadline for your event"
            value={this.state.RegistrationDeadline}
            onChange={this.onChange}
            error={errors.RegistrationDeadline}
          />
        </div>
      );
    }

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto py-5">
              <h1 className="display-4 text-center">Add an event</h1>
              <p className="lead text-center">Fill up all the details</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Eventname"
                    name="eventname"
                    value={this.state.eventname}
                    onChange={this.onChange}
                    error={errors.eventname}
                    info="A unique eventname for your event"
                  />
                  <TextFieldGroup
                    placeholder="Eventinfo"
                    name="eventinfo"
                    value={this.state.eventinfo}
                    onChange={this.onChange}
                    error={errors.eventinfo}
                    info="Write short information for your event"
                  />
                  <TextFieldGroup
                    placeholder="Organization"
                    name="organisation"
                    value={this.state.organisation}
                    onChange={this.onChange}
                    error={errors.organisation}
                    info="Your Organization name"
                  />
                  <TextFieldGroup
                    placeholder="Venue"
                    name="venue"
                    value={this.state.venue}
                    onChange={this.onChange}
                    error={errors.venue}
                    info="Eventvenue"
                  />
                  <TextFieldGroup
                    placeholder="Website"
                    name="eventwebsite"
                    value={this.state.eventwebsite}
                    onChange={this.onChange}
                    error={errors.eventwebsite}
                    info="Website for your event"
                  />
                  <TextFieldGroup
                    placeholder="Image"
                    name="eventimage"
                    value={this.state.eventimage}
                    onChange={this.onChange}
                    error={errors.eventimage}
                    info="A unique image for your event"
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
                  <div className="mb-3 pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState((prevState) => ({
                          displayTimeline: !prevState.displayTimeline,
                        }));
                      }}
                      className="btn btn-light"
                    >
                      Add your event timeline
                    </button>
                  </div>
                  {eventTimeline}
                </div>
                <div className=" py-4 bkl">
                  <div className=" pl-4">
                    <span>
                      <Link to="/add-edu" className="btn btn-light">
                        <i className="fa fa-trophy  text-info mr-1"></i>
                        ADD PRIZES
                      </Link>
                    </span>
                  </div>

                  <div className="pl-4">
                    <span>
                      <Link to="/add-edu" className="btn btn-light">
                        <i className=" fa fa-users text-info mr-1"></i>
                        ADD SPONSORS
                      </Link>
                    </span>
                  </div>

                  <div className="pl-4">
                    <Link to="/add-edu" className="btn btn-light">
                      <i className="  far fa-id-card text-info mr-1"></i>
                      ADD CONTACT
                    </Link>
                  </div>
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

AddEvent.propTypes = {
  addEventt: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addEvent })(AddEvent);
