import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  /*constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }*/
  onClick(e) {
    e.preventDefault();
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4"  onClick={this.onClick}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
