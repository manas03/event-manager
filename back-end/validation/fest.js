const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFestInput(data) {
  let errors = {};

  data.festname = !isEmpty(data.festname) ? data.festname : "";
  data.tagline = !isEmpty(data.festtagline) ? data.festtagline : "";
  data.institute = !isEmpty(data.institute) ? data.institute : "";

  if (validator.isEmpty(data.festname)) {
    errors.festname = "festname is required";
  }
  if (validator.isEmpty(data.festtagline)) {
    errors.festtagline = "tagline is required";
  }
  if (validator.isEmpty(data.institute)) {
    errors.institute = "institute is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
