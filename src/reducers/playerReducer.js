import { PLAYERS } from "../actions/actionTypes";

const initalState = {
  data: {},
  error: {},
};

export const playerReducer = (state = initalState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PLAYERS.GET_REQUEST:
      return { ...state };
    case PLAYERS.GET_FAILED:
      return {
        ...state,
        error: payload,
      };
    case PLAYERS.GET_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
