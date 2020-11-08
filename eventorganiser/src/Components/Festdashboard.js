import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Festdashboard extends Component {
  render() {
    return (
      <div className= "container">
     <div>
      <h1 className="third">Fest Name</h1>
      <h2 className="second">Hosted by AMU</h2>
        <div className="container w-25 pt-5">
          <Link className="text-decoration-none" to="/addevent">
          <div className="fix">         
          <div className="wrapper"> 
              <div className="card">
                <h4>ADD an Event</h4>
                <h1>
                  <span className="enclosed">
                    ADD
                  </span>
                  Event
                </h1>
              </div>
              </div>
              </div>
          </Link>
        </div> 
        </div>   
        <div classname="d-flex flex-column py-5">
        <h2 className="pt-5">Your Events</h2>
        <div className="btn btn-info btn-sm w-100 m-2 text-left"><span className="font-weight-bold">Event1</span> - Organised by Organiser1</div>
        <div className="btn btn-info btn-sm w-100 m-2 text-left"><span className="font-weight-bold">Event2</span> - Organised by Organiser2</div>
        <div className="btn btn-info btn-sm w-100 m-2 text-left"><span className="font-weight-bold">Event3</span> - Organised by Organiser3</div>
        </div>  
      </div>
    )
  }
}
