import {MESSAGE_ACTIONS} from "../actions/messageActions";

const initialState = {
    count : 0
}


export const messageReducer = (state = initialState, action = {}) => {
    
    const {type, payload} = action;

    switch (type) {
        case MESSAGE_ACTIONS.ADD:
            return {
                ...state,
                count : payload
            }
        case MESSAGE_ACTIONS.REMOVE:
            return {
                ...state,
                count : payload
            }
        default:
            return state;
    }

}


