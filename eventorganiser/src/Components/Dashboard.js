import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container w-25 pt-5">
          <Link className="text-decoration-none" to="/addevent">
          <div className="wrapper">            
              <div className="card">
                <h4>Organise An Event</h4>
                <h1>
                  <span className="enclosed">
                    ADD
                  </span>
                  Event
                </h1>
              </div>
          </div>
          </Link>
          <p className="p-3 display-5 lead pt-5 text-center">
            If you want to organise an event tap on the button above. To organise an event you must belong to an organisation and you need to enter all your profile details.
          </p>
        </div>      
      </div>
    )
  }
}
