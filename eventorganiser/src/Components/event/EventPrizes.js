import React, { Component } from "react";
import PropTypes from "prop-types";

export default class EventPrizes extends Component {
  render() {
    const { event } = this.props;

    const eventprizes = event.eventprizes.map((prize, index) => (
      <div key={index}>
        <p className="info">
          <span className="font-weight-bold">Position {prize.position}: </span>
          <span>Prize: {prize.prizeinfo}</span>
        </p>
      </div>
    ));

    return (
      <div className="container pt-4">
        <h4>Prizes</h4>
        <small>Travel have fun and win some rewards too!</small>
        <div className="py-3">{eventprizes}</div>
      </div>
    );
  }
}

EventPrizes.propTypes = {
  event: PropTypes.object.isRequired,
};
