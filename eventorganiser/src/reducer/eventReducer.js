import { ADD_EVENT } from "../actions/types";

const initialState = {
  event: {},
  events: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events],
      };

    default:
      return state;
  }
}
