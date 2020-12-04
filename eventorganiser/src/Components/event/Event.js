import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../Common/Spinner";
import { getEvent } from "../../actions/eventActions";
import moment from "moment";
import Moment from "react-moment";
import EventContact from "./EventContact";
import EventPrizes from "./EventPrizes";
import isEmpty from "../../validation/is-empty";

// import bgimg from "../../img/landing2.jpg";
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

class Event extends Component {
  constructor() {
    super();
    this.state = {
      black: true,
    };
  }

  changeColor() {
    this.setState({ black: !this.state.black });
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params._id);
  }

  render() {
    const { event, loading } = this.props.event;

    let btn_cls = this.state.black ? "btn-dark" : "btn-info";
    let eventContent;
    if (event === null || loading || Object.keys(event).length === 0) {
      eventContent = <Spinner />;
    } else {
      eventContent = (
        <div>
          <h2 className="head-style pb-5 mb-3">{event.eventname}</h2>
          <div className="">
            <h4 className="display-4">{event.organisation}</h4>
            <h4 className="pt-3">Venue: {event.venue}</h4>
          </div>
          <div className="pt-4 pb-2">
            <div
              className={`btn ${btn_cls}`}
              onClick={this.changeColor.bind(this)}
            >
              Register For This Event
            </div>
          </div>
          <div className="row py-5 text-left">
            <div className="col-md-4">
              <h4>About {event.eventname}:</h4>
              <p>{event.eventinfo}</p>
            </div>
            <div className="col-md-8">
              <img
                className="img-fluid float-right col-md-6 eventpic"
                src={event.eventimage}
                alt={event.eventname}
                style={{
                  minHeight: "300px",
                  minWidth: "500px",
                  borderRadius: "35px",
                }}
              />
            </div>
          </div>
          <hr />
          <div className="container py-5">
            <h4 className="py-3">Important Dates</h4>
            <p className="info">
              <span className="font-weight-bold">Registration Deadline: </span>
              {"  "}
              <Moment format="DD/MM/YYYY">
                {moment.utc(event.timeline.RegistrationDeadline)}
              </Moment>
            </p>
            <p className="info">
              <span className="font-weight-bold">Starting Date:</span>
              {"  "}
              <Moment format="DD/MM/YYYY">
                {moment.utc(event.timeline.StartingDate)}
              </Moment>
            </p>
            <p className="info">
              <span className="font-weight-bold">Ending Date:</span>
              {"  "}
              <Moment format="DD/MM/YYYY">
                {moment.utc(event.timeline.EndingDate)}
              </Moment>
            </p>
            <p className="info">
              <span className="font-weight-bold">Result Date:</span>
              {"  "}
              <Moment format="DD/MM/YYYY">
                {moment.utc(event.timeline.ResultDate)}
              </Moment>
            </p>
          </div>
          <hr />
          <EventContact event={event} />
          <hr />
          <div className="container">
            <h5 className="pt-5 pb-3">{event.eventname}'s Social Media</h5>
            {isEmpty(event.eventwebsite) ? null : (
              <p className="info py-3">
                <span className="font-weight-bold">
                  Website <i className="fas fa-globe" /> :
                </span>{" "}
                <a
                  href={event.eventwebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-50 text-decoration-none"
                >
                  Visit {event.eventname}'s website
                </a>
              </p>
            )}
            {isEmpty(event.eventsocial && event.eventsocial.twitter) ? null : (
              <a
                className="text-white p-3"
                href={event.eventsocial.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-3x text-primary" />
              </a>
            )}
            {isEmpty(event.eventsocial && event.eventsocial.youtube) ? null : (
              <a
                className="text-white p-3"
                href={event.eventsocial.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube fa-3x text-danger" />
              </a>
            )}
            {isEmpty(event.eventsocial && event.eventsocial.facebook) ? null : (
              <a
                className="text-white p-3"
                href={event.eventsocial.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-3x text-danger" />
              </a>
            )}
            {isEmpty(event.eventsocial && event.eventsocial.linkedin) ? null : (
              <a
                className="text-white p-3"
                href={event.eventsocial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-3x text-primary" />
              </a>
            )}
          </div>
          <hr />
          <EventPrizes event={event} />
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <Particles className="particles" params={particleOptions} />
            <div className="col-md-12">{eventContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  getEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  event: state.event,
});

export default connect(mapStateToProps, { getEvent })(Event);
