import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <div className="landing-inner dark-overlay text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center ">
                <h1 className="display-3 mb-4">Event Manager</h1>
                <p className="lead pt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet vel dignissimos facilis quod culpa tenetur incidunt officia necessitatibus odit. Perferendis explicabo veniam doloremque rem illo assumenda, quibusdam ducimus deserunt.
                </p>
                <p className="lead pt-2 pb-4">
                  <Link to="/register" className="text-white font-weight-bolder text-monospace">Create an account</Link> as an Organiser or a Student, or log in if you have already have an account
                </p>
                <Link to="/login" className="btn btn-lg btn-dark mr-2">
                  Log In Organiser
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Log In Student
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

