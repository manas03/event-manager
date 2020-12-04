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
        <div className="btn btn-info btn-sm w-100 m-2 text-left">
          <span className="font-weight-bold">Event2</span> - Organised by
          Organiser2
        </div>
        <div className="btn btn-info btn-sm w-100 m-2 text-left">
          <span className="font-weight-bold">Event3</span> - Organised by
          Organiser3
        </div>
      </div>
    </div>
  );
}

export default OrganiserEvent;
