import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import {todo} from "./redusers/requestReduser";

// const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(todo, initialState);
}