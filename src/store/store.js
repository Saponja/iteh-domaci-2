import {  } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {playerReducer} from '../reducers/playerReducer';
import {messageReducer} from '../reducers/messageReducer';
import {recepieReducer} from '../reducers/recepieReducer';


const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    playerReducer,
    messageReducer,
    recepieReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

