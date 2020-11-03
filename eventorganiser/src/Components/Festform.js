import React from "react";
import TextFieldGroup from "./Common/TextFieldGroup";
import TextAreaFieldGroup from "./Common/TextAreaFieldGroup";
import InputGroup from "./Common/InputGroup.js";
function Festform() {
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
  

  return (
    <div classname="create-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto py-5">
            <h1 className="display-4 text-center">Add an Fest</h1>
            <p className="lead text-center">Fill up all the details</p>

            <form>
              <TextFieldGroup
                placeholder="Fest Name"
                info="A unique name for your fest"
              />
              <TextAreaFieldGroup
                placeholder="Fest tagline"
                info="Write a tagline for your fest"
              />
              <TextFieldGroup
                placeholder="Institute"
                info="Your institute name"
              />
              <TextFieldGroup
                placeholder="Website"
                info="Your institute website name"
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

export default Festform;
