import { GET_EVENTS, GET_EVENT, EVENT_LOADING } from "../actions/types";

const initialState = { event: null, events: null, loading: false };

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case GET_EVENT:
      return {
        ...state,
        event: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
