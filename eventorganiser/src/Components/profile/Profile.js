import React, { Component } from 'react'
import "./Profile.css"

export default class Profile extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <div className="left">
                  <div className="photo-left pb-5">
                    <img className="photo" src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"/>
                    <div className="active"></div>
                  </div>
                  <h4 className="name">Manas</h4>
                  <p className="info">Student</p>
                  <p className="info"><span className="font-weight-bold">Email:</span> manas@gmail.com</p>
                  <p className="desc"><span className="font-weight-bold">Bio: </span> Hi! My name is Manas. I'm a student at Zakir Hussain College of Engg and Tech., AMU.</p>
                  <h5 className="pt-5 pb-3">Personal Information</h5>
                  <p className="info"><span className="font-weight-bold">Institute: </span> ZHCET, AMU</p>
                  <p className="info"><span className="font-weight-bold">Phone Number:</span> 9000000000</p>
                  <h5 className="pt-5 pb-3">Skills</h5>
                  <div  className="p-3">
                    <i className="fa-check fas" />
                     C++
                  </div>
                  <div  className="p-3">
                    <i className="fa-check fas" />
                     JavaScript
                  </div>
                  <div  className="p-3">
                    <i className="fa-check fas" />
                     HTML
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
