import { RECEPIE_ACTIONS } from "../actions/recepieActions";

const initialState = {
  recepies: [],
  count: 0,
  total : 0
};

export const recepieReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case RECEPIE_ACTIONS.ADD_RECEPIE:
      return {
        ...state,
        count: state.count + 1,
        total : state.total + payload.price,
        recepies: [...state.recepies, payload],
      };

    case RECEPIE_ACTIONS.REMOVE_RECEPIE:
      // let obj = state.recepies.find(item => item.name === payload)
      let obj = state.recepies[payload];

      return {
        ...state,
        count: state.count - 1,
        total : state.total - obj.price,
        recepies: state.recepies.filter((item, index) => index !== payload),
      };

    case RECEPIE_ACTIONS.REMOVE_ALL:
      return {
        ...state,
        count : 0,
        total: 0,
        recepies: []
      }
    default:
      return state;
  }
};
