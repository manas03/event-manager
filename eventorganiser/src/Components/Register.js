import React, { Component } from "react";

class Register extends Component {
  /*constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    axios
      .post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }*/

  render() {
    //const { errors } = this.state;

    return (
      <div className="register">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <form noValidate>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="name"
                  />
                  <small className="form-text text-muted">
                    Enter your Name
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                  />

                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    placeholder="Date of Birth"
                    name="dob"
                  />
                  <small className="form-text text-muted">
                    Enter your Date of Birth
                  </small>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Organisation"
                    name="organisation"
                  />
                  <small className="form-text text-muted">
                    Enter your Organisation which is hosting the event
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Website"
                    name="dob"
                  />
                  <small className="form-text text-muted">
                    Enter your Website
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Post"
                    name="dob"
                  />
                  <small className="form-text text-muted">
                    Enter your post in the organization
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="textarea"
                    className="form-control form-control-lg"
                    placeholder="Bio"
                    name="dob"
                  />
                  <small className="form-text text-muted">
                    Give a short intro about yourself
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                  />
                  <small className="form-text text-muted">
                    Enter your password
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                  />
                  <small className="form-text text-muted">
                    Enter your password again
                  </small>
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;