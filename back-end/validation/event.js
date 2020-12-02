const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEventInput(data) {
  let errors = {};

  data.eventname = !isEmpty(data.eventname) ? data.eventname : "";
  //data.status = !isEmpty(data.status) ? data.status : '';
  //data.skills = !isEmpty(data.skills) ? data.skills : '';
  data.eventinfo = !isEmpty(data.eventinfo) ? data.eventinfo : "";
  data.organisation = !isEmpty(data.organisation) ? data.organisation : "";
  data.venue = !isEmpty(data.venue) ? data.venue : "";
  data.website = !isEmpty(data.website) ? data.website : "";
  data.fest = !isEmpty(data.fest) ? data.fest : "";

  if (!Validator.isLength(data.eventname, { min: 2, max: 40 })) {
    errors.eventname = "eventname needs to between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.eventname)) {
    errors.eventname = " eventname is required";
  }
  if (Validator.isEmpty(data.fest)) {
    errors.fest = " fest is required";
  }
  if (Validator.isEmpty(data.eventinfo)) {
    errors.eventinfo = "eventinfo is required";
  }
  if (Validator.isEmpty(data.organisation)) {
    errors.organisation = "organisation is required";
  }
  if (Validator.isEmpty(data.venue)) {
    errors.venue = "venue is required";
  }

  /*if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }*/

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
