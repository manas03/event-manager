import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import Moment from "react-moment";

class StudentEvent extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className="property-card my-5 mx-5">
        <Link to={`/event/${event._id}`}>
          <div className="property-image">
            <div className="property-image-title">
              <h5>{event.eventname}</h5>
              {event.venue}
            </div>
          </div>
        </Link>
        <div className="property-description">
          <h4> {event.eventname} </h4>
          <p style={{ lineHeight: "1" }}>
            <small>{event.eventinfo}</small>
          </p>
          <p>
            Organised by:{" "}
            <span className="font-weight-bold">{event.organisation}</span>
          </p>
          <div className="d-flex justify-content-between">
            <p className="text-left">{event.venue}</p>
            <p className="text-right">
              Starts:{" "}
              <Moment format="DD/MM/YYYY">
                {moment.utc(event.timeline.StartingDate)}
              </Moment>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

StudentEvent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default StudentEvent;
