import React from "react";
import TextFieldGroup from "./Common/TextFieldGroup";
import TextAreaFieldGroup from "./Common/TextAreaFieldGroup";
import InputGroup from "./Common/InputGroup.js";
function Events() {
  let socialInputs;
  let eventtimeline;
  socialInputs = (
    <div>
      <InputGroup
        placeholder="Facebook Profile URL"
        name="facebook"
        icon="fab fa-facebook"
      />
      <InputGroup
        placeholder="Twitter Profile URL"
        name="twitter"
        icon="fab fa-twitter"
      />
      <InputGroup
        placeholder="LinkedIn Profile URL"
        name="linkedin"
        icon="fab fa-linkedin"
      />
      <InputGroup
        placeholder="Instagram Profile URL"
        name="instagram"
        icon="fab fa-instagram"
      />
      <InputGroup
        placeholder="Youtube Profile URL"
        name="youtube"
        icon="fab fa-youtube"
      />
    </div>
  );
  eventtimeline = (
    <div>
      <TextFieldGroup
        placeholder="Starting Date"
        info="Starting Date for your event"
      />
      <TextFieldGroup
        placeholder="Ending date"
        info="Ending Date for your event"
      />
      <TextFieldGroup
        placeholder="Starting Time"
        info="Starting time for your event"
      />
      <TextFieldGroup
        placeholder="Ending Time"
        info="Ending Time for your event"
      />
      <TextFieldGroup
        placeholder="Registration deadline"
        info="Registration deadline for your event"
      />
    </div>
  );

  return (
    <div classname="create-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add an event</h1>
            <p className="lead text-center">Fill up all the details</p>

            <form>
              <TextFieldGroup
                placeholder="Event Name"
                info="A unique name for your event"
              />
              <TextAreaFieldGroup
                placeholder="Event info"
                info="Write short information about your event"
              />
              <TextFieldGroup
                placeholder="Organization"
                info="Your organization name"
              />
              <TextFieldGroup
                placeholder="Website"
                info="Your own website or a company one"
              />
              <TextFieldGroup
                placeholder="Venue"
                info="Location of the venue where event will be held"
              />
              <div className="mb-3">Add Sponsors</div>{" "}
              <TextFieldGroup
                placeholder="Sponsor name"
                info="Enter the full name of sponsor"
              />
              <div className="mb-3">
                Add Event Timeline
                <span className="text-muted ml-3"></span>
              </div>
              {eventtimeline}
              <div className="mb-3">Add prizes</div>
              <TextFieldGroup
                placeholder=" prize position"
                info=" Enter the position of prize"
              />
              <TextFieldGroup
                placeholder="Prize info"
                info=" Enter the info about prize"
              />
              <div className="mb-3">
                Add Social Network Accounts
                <span className="text-muted ml-3">Optional</span>
              </div>
              {socialInputs}
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
