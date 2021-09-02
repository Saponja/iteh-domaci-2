import { getOneAPI } from "../services/playerServices";
import { PLAYERS } from "./actionTypes";

export const getOne = (id) => dispatch => {
    
  dispatch({
	  type : PLAYERS.GET_REQUEST
  })

  return getOneAPI(id)
    .then((response) => {
      dispatch({
        type: PLAYERS.GET_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
      return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: PLAYERS.GET_FAILED,
        payload: error,
      });

      return Promise.reject(error);
    });
};
