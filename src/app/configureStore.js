import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import taskReducer from "../reducers/task.reducer";
import tasksReducer from "../reducers/tasks.reducer";

const reducer = combineReducers({
    task: taskReducer,
    tasks: tasksReducer
});

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState,
                window.devToolsExtension ? window.devToolsExtension(): undefined
            );
}