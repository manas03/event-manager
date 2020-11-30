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
  // dispatch(setProfileLoading());
  axios
    .get("/api/studentprofiles")
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
    .post("/api/studentprofiles", profileData)
    .then((res) => history.push("/profile"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Loading profile
export const setProfileLoading = () => {
  return { type: PROFILE_LOADING };
};

// Clear profile
export const clearCurrentProfile = () => {
  return { type: CLEAR_CURRENT_PROFILE };
};
