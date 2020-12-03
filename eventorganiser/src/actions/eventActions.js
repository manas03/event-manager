import axios from "axios";

import { GET_EVENT, GET_EVENTS, EVENT_LOADING } from "./types";

// Get all events
export const getEvents = () => (dispatch) => {
  dispatch(setEventLoading());
  axios
    .get(`/api/events`)
    .then((res) =>
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_EVENTS,
        payload: null,
      })
    );
};

// Get Event by ID
export const getEventById = (id) => (dispatch) => {
  dispatch(setEventLoading());
  axios
    .get(`/api/events/${id}`)
    .then((res) =>
      dispatch({
        type: GET_EVENT,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_EVENT,
        payload: null,
      })
    );
};

export const setEventLoading = () => {
  return { type: EVENT_LOADING };
};
