import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_PROFILES,
} from "./types";

// GET current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/api/studentprofile")
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};

// Create profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post("/api/studentprofile", profileData)
    .then((res) => history.push("/profile"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add education
export const addEducation = (eduData, history, handle) => (dispatch) => {
  axios
    .post("/api/studentprofile/education", eduData)
    .then((res) => history.push(`/profile/${handle}`))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete education
export const deleteEducation = (id) => (dispatch) => {
  if (window.confirm("Are you sure you wanna delete this education?")) {
    axios
      .delete(`/api/studentprofile/education/${id}`)
      .then((res) =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

// Get all profiles
export const getProfiles = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/all/`)
    .then((res) =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILES,
        payload: null,
      })
    );
};

// Get profile by handle
export const getProfileByHandle = (handle) => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: null,
      })
    );
};

//Delete account and profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm("Are you sure you wanna delete your account.")) {
    axios
      .delete("/api/profile")
      .then((res) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

// Loading profile
export const setProfileLoading = () => {
  return { type: PROFILE_LOADING };
};

// Clear profile
export const clearCurrentProfile = () => {
  return { type: CLEAR_CURRENT_PROFILE };
};
