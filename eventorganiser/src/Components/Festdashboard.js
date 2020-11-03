import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Festdashboard extends Component {
  render() {
    return (
      <div >
     <div>
      <h1 className="third">ZARF</h1>
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
        <div classname="events">
        <h2 className="eventtag">Your Events</h2>
        <div classname="ef">
        <div className="btn btn-primary btn-sm ">Event1</div>
        
        <div className="btn btn-primary btn-sm eventbutton">Event2</div>
        <div className="btn btn-primary btn-sm eventbutton">Event3</div>
        </div> 
        </div>
 
      </div>
    )
  }
}
