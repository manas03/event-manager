import React from "react";
function OrganiserEvent() {
  return (
    <div className="major">
      <div classname="d-flex flex-column py-5">
        <h2 className="pt-5">Your Organised Events</h2>
        <div className="btn btn-info btn-sm w-100 m-2 text-left">
          <span className="font-weight-bold">HackCBS</span>
          <button className="mr-5 float-right color-black">Edit</button>
        </div>
        <div className="d-flex justify-content-around flex-wrap p-5">
          <div className="property-card my-5 mx-5">
            <Link to="/">
              <div className="property-image">
                <div className="property-image-title">
                  <h5>{event.eventname}</h5>
                  {event.venue}
                </div>
              </div>
            </Link>
            <div className="property-description">
              <h4> {event.eventname} </h4>
              <p style={{ lineHeight: "1" }}>
                <small>{event.eventinfo}</small>
              </p>
              <p>
                Organised by:{" "}
                <span className="font-weight-bold">{event.organisation}</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-left">{event.venue}</p>
                <p className="text-right">
                  Starts:{" "}
                  <Moment format="DD/MM/YYYY">
                    {moment.utc(event.timeline.StartingDate)}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
          <div className="property-card my-5 mx-5">
            <Link to="/">
              <div className="property-image">
                <div className="property-image-title">
                  <h5>{event.eventname}</h5>
                  {event.venue}
                </div>
              </div>
            </Link>
            <div className="property-description">
              <h4> {event.eventname} </h4>
              <p style={{ lineHeight: "1" }}>
                <small>{event.eventinfo}</small>
              </p>
              <p>
                Organised by:{" "}
                <span className="font-weight-bold">{event.organisation}</span>
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-left">{event.venue}</p>
                <p className="text-right">
                  Starts:{" "}
                  <Moment format="DD/MM/YYYY">
                    {moment.utc(event.timeline.StartingDate)}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganiserEvent;
