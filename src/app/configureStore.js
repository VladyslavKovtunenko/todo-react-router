import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import taskReducer from "../reducers/task.reducer";
import tasksReducer from "../reducers/tasks.reducer";
import isLoginReducer from "../reducers/isLogin.reducer";

const reducer = combineReducers({
    task: taskReducer,
    tasks: tasksReducer,
    isLogin: isLoginReducer
});

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState,
                window.devToolsExtension ? window.devToolsExtension(): undefined
            );
}
