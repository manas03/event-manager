import { ADD_FEST, GET_FEST } from "../actions/types";

const initialState = {
  fest: {},
  fests: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FEST:
      return {
        ...state,
        fests: [action.payload, ...state.fests],
      };
    case GET_FEST:
      return {
        ...state,
        fest: action.payload,
      };

    default:
      return state;
  }
}
