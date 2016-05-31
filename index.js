import React from 'react'
import ReactDOM from 'react-dom'
import TaskTable from './components/taskTable'
import configureStore from "./configureStore";
import {Provider} from 'react-redux'

const store = configureStore([]);

ReactDOM.render(
    <Provider store = {store}>
        <TaskTable />
    </Provider>,
    document.getElementById('container')
);
