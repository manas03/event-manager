import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "./Common/Spinner";
import { getFest } from "../actions/eventActionsOrganiser";
import Festform from "./Festform";
import Festdashboard from "./Festdashboard";

class Fest extends Component {
  componentDidMount() {
    this.props.getFest(this.props.match.params.id);
  }

  render() {
    const { fest } = this.props.fest;
    let festContent;

    /*if (fest === null || loading || Object.keys(fest).length === 0) {
      festContent = <Spinner />;
    } else {
      festContent = (
        <div>
          <Festdashboard fest={fest} />
        </div>
      );
    }*/

    return (
      /* <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back To Feed
              </Link>
              {festContent}
            </div>
          </div>
        </div>
      </div>*/
      <div className="container">
        <div>
          <h1 className="third">{fest.festname}</h1>
          <h2 className="second">{fest.festtagline}</h2>
          <div className="container w-25 pt-5">
            <Link className="text-decoration-none" to="/addevent">
              <div className="fix">
                <div className="wrapper">
                  <div className="card">
                    <h4>ADD an Event</h4>
                    <h1>
                      <span className="enclosed">ADD</span>
                      Event
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column py-5">
          <h2 className="pt-5">Your Events</h2>
          <div className="btn btn-info btn-sm w-100 m-2 text-left">
            <span className="font-weight-bold">hid</span> - Organised by
            Organiser1
          </div>
        </div>
      </div>
    );
  }
}

Fest.propTypes = {
  getFest: PropTypes.func.isRequired,
  fest: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  fest: state.fest,
});

export default connect(mapStateToProps, { getFest })(Fest);
