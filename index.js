import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/app/app'
import configureStore from "./src/app/configureStore";
import {Provider} from 'react-redux'
/**/
import {getTask, showTask} from './src/actions/task.actions'

const store = configureStore([]);

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);

console.log(store.getState());
store.dispatch(showTask());
console.log(store.getState());
store.dispatch(getTask(1));
console.log(store.dispatch(getTask(1)));
console.log(store.getState());
