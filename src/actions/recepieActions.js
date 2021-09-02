import { applyMiddleware } from "redux";

export const RECEPIE_ACTIONS = {
  ADD_RECEPIE: "ADD_RECEPIE",
  REMOVE_RECEPIE: "REMOVE_RECEPIE",
  REMOVE_ALL: "REMOVE_ALL"
};

export const addRecepie = ({letter, name, recepie, price}) => (dispatch) => {
  dispatch({
    type: RECEPIE_ACTIONS.ADD_RECEPIE,
    payload: {letter: letter, name: name, recepie: recepie, price : price },
  });
};

export const removeRecepie = (index) => dispatch => {
  dispatch({
    type : RECEPIE_ACTIONS.REMOVE_RECEPIE,
    payload : index
  })
}

export const removeAll = () => dispatch => {
  dispatch({
    type: RECEPIE_ACTIONS.REMOVE_ALL,
  })
}
