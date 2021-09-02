
export const MESSAGE_ACTIONS = {
    ADD : "ADD",
    REMOVE : "REMOVE"
}

export const addMessage = (count) => dispatch => {

    dispatch({
        type : MESSAGE_ACTIONS.ADD,
        payload: count + 1
    })
}

export const removeMessage = (count) => dispatch => {

    if(count === 0) {

        dispatch({
            type : MESSAGE_ACTIONS.REMOVE,
            payload : count
        })

        return;
    }

    dispatch({
        type : MESSAGE_ACTIONS.REMOVE,
        payload : count - 1
    })
} 