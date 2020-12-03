import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEvents } from "../../actions/eventActions";
import Spinner from "../Common/Spinner";
import StudentEvent from "./StudentEvent";

class StudentDash extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { user } = this.props.auth;
    const { events, loading } = this.props.event;

    let dashboardContent;
    if (events === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (events.length > 0) {
        dashboardContent = events.map((event) => (
          <StudentEvent key={event._id} event={event} />
        ));
      } else {
        dashboardContent = <h4>No Events Found</h4>;
      }
    }

    return (
      <div>
        <div className="container">
          <h2 className="second py-4">Welcome {user.name}</h2>
          <h4 className="third">Take a look at the various events going on</h4>
        </div>
        <div className="d-flex justify-content-around flex-wrap p-5">
          {dashboardContent}
        </div>
      </div>
    );
  }
}

StudentDash.propTypes = {
  getEvents: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  event: state.event,
});

export default connect(mapStateToProps, { getEvents })(StudentDash);
