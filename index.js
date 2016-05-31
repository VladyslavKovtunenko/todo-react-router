import React from 'react'
import ReactDOM from 'react-dom'
import TaskTable from './components/taskTable'
import configureStore from "./configureStore";
import showTask from './actions/showTask'

// ReactDOM.render(
//     <TaskTable />,
//     document.getElementById('container')
// );

const store = configureStore([]);

store.dispatch(showTask());
console.log(store.getState());

