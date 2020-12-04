import axios from "axios";

import {
  ADD_EVENT,
  GET_ERRORS,
  CLEAR_ERRORS,
  ADD_FEST,
  GET_FEST,
  FEST_LOADING,
} from "./types";

// Add Event
export const addEvent = (eventData, history) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post("/api/events", eventData)
    .then((res) =>
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
export const addFest = (festData, history) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post("/api/fests/fest", festData)
    .then((res) =>
      dispatch({
        type: ADD_FEST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
export const getFest = (id) => (dispatch) => {
  axios
    .get(`/api/fests/${id}`)
    .then((res) =>
      dispatch({
        type: GET_FEST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_FEST,
        payload: null,
      })
    );
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
