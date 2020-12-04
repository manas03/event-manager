import React, { Component } from "react";
import PropTypes from "prop-types";

export default class EventContact extends Component {
  render() {
    const { event } = this.props;

    const eventcontact = event.eventcontact.map((contact, index) => (
      <div key={index}>
        <p className="info">
          <span className="font-weight-bold">{contact.name}: </span>
          <span>Email: {contact.email}</span>
        </p>
      </div>
    ));

    return (
      <div className="container pt-4">
        <h4>Contact Details</h4>
        <small>Need Some more info? Contanct the organisers</small>
        <div className="py-3">{eventcontact}</div>
      </div>
    );
  }
}

EventContact.propTypes = {
  event: PropTypes.object.isRequired,
};
